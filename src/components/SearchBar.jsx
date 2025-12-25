import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import { coursesData } from '../data/courses'
import { experiencesData } from '../data/experiences'

const SearchBar = ({ filter = 'all', onSearch }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [fuse, setFuse] = useState(null)

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

  return (
    <div className="relative max-w-2xl mx-auto mb-8 sm:mb-12">
      <div className="relative">
        <input
          type="text"
          placeholder={filter === 'courses' ? 'Search courses by name, code, or topic...' : filter === 'experiences' ? 'Search experiences by company, type, or skills...' : 'Search courses, experiences...'}
          value={query}
          onChange={handleSearch}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 pr-4 text-neutral-900 bg-white/80 backdrop-blur-sm border-2 border-primary-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-blue-500 focus:border-primary-blue-500 transition-all shadow-lg hover:shadow-xl"
          aria-label="Search"
          role="searchbox"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-5">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div 
          className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border-2 border-primary-blue-200 rounded-2xl shadow-2xl overflow-hidden"
          role="listbox"
          aria-label="Search results"
        >
          {results.map((result, index) => {
            const item = result.item
            return (
              <div
                key={index}
                onClick={() => {
                  navigate(item.url)
                  setShowResults(false)
                  setQuery('')
                }}
                className="p-4 hover:bg-primary-blue-50 cursor-pointer transition-colors border-b border-neutral-100 last:border-b-0"
                role="option"
                aria-selected="false"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    navigate(item.url)
                    setShowResults(false)
                    setQuery('')
                  }
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-neutral-900 mb-1">{item.title}</h4>
                    {item.description && (
                      <p className="text-sm text-neutral-600 line-clamp-2">{item.description}</p>
                    )}
                    {item.company && (
                      <p className="text-sm text-neutral-600 mt-1">{item.company} • {item.location}</p>
                    )}
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ml-3 flex-shrink-0 ${getBadgeClass(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}
      
      {showResults && results.length === 0 && query.length >= 2 && (
        <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border-2 border-primary-blue-200 rounded-2xl shadow-2xl p-6 text-center">
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
  onSearch: PropTypes.func
}

export default SearchBar