import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'

const SearchBar = ({ filter = 'all' }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [fuse, setFuse] = useState(null)
  const searchContainerRef = useRef(null)

  const navigate = useNavigate()

  const navigate = useNavigate()

  const searchData = [
    // Courses from Courses.jsx
    { id: 1, title: 'ME 101 - Engineering Mechanics', category: 'course', type: 'core', difficulty: 'medium', credits: 3, semester: '1st Year, 1st Sem', url: '/course/1' },
    { id: 2, title: 'ME 102 - Engineering Graphics', category: 'course', type: 'core', difficulty: 'easy', credits: 3, semester: '1st Year, 1st Sem', url: '/course/2' },
    { id: 3, title: 'ME 201 - Thermodynamics', category: 'course', type: 'core', difficulty: 'hard', credits: 4, semester: '2nd Year, 1st Sem', url: '/course/3' },
    { id: 4, title: 'CS 101 - Computer Programming', category: 'course', type: 'elective', difficulty: 'medium', credits: 3, semester: '1st Year, 2nd Sem', url: '/course/4' },
    
    // Experiences from Experiences.jsx
    { id: 1, title: 'Google Software Engineering Intern', category: 'experience', type: 'software', company: 'Google', duration: 'Summer 2024', location: 'Bangalore', cpi: '9.2+', url: '/experience/1' },
    { id: 2, title: 'Microsoft Research Intern', category: 'experience', type: 'research', company: 'Microsoft', duration: 'Summer 2024', location: 'Hyderabad', cpi: '8.5+', url: '/experience/2' },
    { id: 3, title: 'MIT Graduate Studies', category: 'experience', type: 'masters', company: 'MIT', duration: 'Fall 2024', location: 'Boston, USA', cpi: '9.5+', url: '/experience/3' },
    { id: 4, title: 'Robotics Project at IIT Bombay', category: 'experience', type: 'research', company: 'IIT Bombay', duration: 'Spring 2024', location: 'Mumbai', cpi: '8.0+', url: '/experience/4' }
  ]

  useEffect(() => {
    const fuseInstance = new Fuse(searchData, {
      keys: ['title', 'category', 'type', 'company', 'location', 'difficulty', 'semester', 'duration'],
      threshold: 0.3,
      includeScore: true
    })
    setFuse(fuseInstance)
  }, [])

  const handleSearch = (e) => {
    const searchQuery = e.target.value
    setQuery(searchQuery)

    if (searchQuery.length < 2) {
      setShowResults(false)
      return
    }

    if (fuse) {
      const searchResults = fuse.search(searchQuery)
      let filteredResults = searchResults
      
      if (filter === 'courses') {
        filteredResults = searchResults.filter(result => result.item.category === 'course')
      } else if (filter === 'experiences') {
        filteredResults = searchResults.filter(result => result.item.category === 'experience')
      }
      
      setResults(filteredResults.slice(0, 5))
      setShowResults(true)
    }
  }

  const getBadgeClass = (type) => {
    switch (type) {
      case 'core': return 'badge badge-core'
      case 'elective': return 'badge badge-elective'
      case 'minor': return 'badge badge-minor'
      default: return 'badge'
    }
  }

  const handleIconClick = () => {
    setIsExpanded(!isExpanded)
    onSearchToggle(isExpanded)
    if (!isExpanded) {
      setTimeout(() => {
        const input = searchContainerRef.current?.querySelector('input')
        input?.focus()
      }, 100)
    } else {
      setQuery('')
      setShowResults(false)
    }
  }

  const handleResultClick = (url) => {
    navigate(url)
    setShowResults(false)
    setQuery('')
    setIsExpanded(false)
  }

  return (
    <div
      ref={searchContainerRef}
      className={`relative transition-all duration-500 ease-in-out stagger-animation group overflow-hidden ${
        isExpanded ? 'w-full max-w-2xl' : 'w-auto'
      }`}
    >
      <div className={`relative px-8 py-4 rounded-2xl transition-all duration-500 ${
        isExpanded 
          ? 'bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl'
      }`}>
        {isExpanded ? (
          <input
            type="text"
            placeholder="Search courses, experiences, tracks..."
            value={query}
            onChange={handleSearch}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
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
      {showResults && isExpanded && (
        <div className="absolute z-10 w-full mt-2 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-lg max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <p className="p-4 text-slate-500 text-center">No results found</p>
          ) : (
            results.map((result, index) => {
              const item = result.item
              return (
                <div
                  key={index}
                  onClick={() => handleResultClick(item.url)}
                  className="block p-3 hover:bg-blue-50 border-b border-slate-100 last:border-b-0 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.category} • {item.type}</p>
                    </div>
                    <span className={`ml-4 flex-shrink-0 ${getBadgeClass(item.type)}`}>{item.type}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar