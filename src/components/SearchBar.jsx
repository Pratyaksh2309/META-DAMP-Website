import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import { coursesData } from '../data/courses'
import { experiencesData } from '../data/experiences'

const SearchBar = ({ filter = 'all', onSearch, onSearchToggle }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [fuse, setFuse] = useState(null)
  const searchContainerRef = useRef(null)

  const navigate = useNavigate()

  // Prepare search data
  const searchData = [
    ...coursesData.map(course => ({
      ...course,
      title: `${course.code} - ${course.name}`,
      category: 'course',
      url: `/course/${course.id}`
    })),
    ...experiencesData.map(exp => ({
      ...exp,
      category: 'experience',
      url: `/experience/${exp.id}`
    }))
  ]

  useEffect(() => {
    const fuseInstance = new Fuse(searchData, {
      keys: ['title', 'name', 'code', 'company', 'type', 'tags', 'skills', 'description'],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 2
    })
    setFuse(fuseInstance)
  }, [])

  const handleSearch = (e) => {
    const searchQuery = e.target.value
    setQuery(searchQuery)

    // If external search handler provided, call it
    if (onSearch) {
      onSearch(searchQuery)
    }

    if (searchQuery.length < 2) {
      setShowResults(false)
      setResults([])
      return
    }

    if (fuse) {
      const searchResults = fuse.search(searchQuery)
      let filteredResults = searchResults
      
      // Apply filter if specified
      if (filter === 'courses') {
        filteredResults = searchResults.filter(result => result.item.category === 'course')
      } else if (filter === 'experiences') {
        filteredResults = searchResults.filter(result => result.item.category === 'experience')
      }
      
      setResults(filteredResults.slice(0, 5))
      setShowResults(true)
    }
  }

  const getBadgeClass = (category) => {
    switch (category) {
      case 'course': return 'bg-primary-blue-100 text-primary-blue-700'
      case 'experience': return 'bg-accent-yellow-100 text-accent-yellow-700'
      default: return 'bg-neutral-100 text-neutral-700'
    }
  }

  const handleIconClick = () => {
    const newExpandedState = !isExpanded
    setIsExpanded(newExpandedState)
    if (onSearchToggle) {
      onSearchToggle(newExpandedState)
    }
    if (newExpandedState) {
      setTimeout(() => {
        const input = searchContainerRef.current?.querySelector('input')
        input?.focus()
      }, 100)
    } else {
      setQuery('')
      setShowResults(false)
    }
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleResultClick = (url) => {
    navigate(url)
    setShowResults(false)
    setQuery('')
    setIsExpanded(false)
    if (onSearchToggle) {
      onSearchToggle(false)
    }
  }

  return (
    <div
      ref={searchContainerRef}
      className={`relative z-[9999] transition-all duration-500 ease-in-out stagger-animation group ${
        isExpanded ? 'w-full max-w-2xl' : 'w-auto'
      }`}
    >
      <div className={`relative px-8 py-4 rounded-2xl transition-all duration-500 ${
        isExpanded 
          ? 'bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-xl' 
          : 'bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl'
      }`}>
        {isExpanded ? (
          <input
            type="text"
            placeholder="Search courses, experiences, tracks..."
            value={query}
            onChange={handleSearch}
            onFocus={() => query.length >= 2 && setShowResults(true)}
            className="w-full px-0 py-0 text-slate-700 bg-transparent placeholder-slate-400 focus:outline-none transition-all"
          />
        ) : (
          <button
            onClick={handleIconClick}
            className="flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
            title="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        )}

        {/* Close button when expanded */}
        {isExpanded && (
          <button
            onClick={handleIconClick}
            className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}

        {/* Gradient overlay on hover */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        )}
      </div>

      {/* Search Results - stays in same position */}
      {showResults && isExpanded && results.length > 0 && (
        <div className="absolute z-[9999] w-full mt-2 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-2xl max-h-80 overflow-y-auto">
          {results.map((result, index) => {
            const item = result.item
            return (
              <div
                key={index}
                onMouseDown={(e) => {
                  e.preventDefault()
                  handleResultClick(item.url)
                }}
                className="block p-4 hover:bg-blue-50 border-b border-slate-100 last:border-b-0 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-slate-900 truncate">{item.title}</h4>
                    {item.description && (
                      <p className="text-sm text-slate-500 mt-1 line-clamp-1">{item.description}</p>
                    )}
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full flex-shrink-0 ${getBadgeClass(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}
      
      {showResults && results.length === 0 && query.length >= 2 && (
        <div className="absolute z-[9999] w-full mt-2 bg-white/95 backdrop-blur-xl border-2 border-primary-blue-200 rounded-2xl shadow-2xl p-6 text-center">
          <svg className="w-12 h-12 mx-auto mb-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-neutral-600 font-medium">No results found for "{query}"</p>
          <p className="text-sm text-neutral-500 mt-1">Try different keywords or browse all content</p>
        </div>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  filter: PropTypes.oneOf(['all', 'courses', 'experiences']),
  onSearch: PropTypes.func,
  onSearchToggle: PropTypes.func
}

export default SearchBar