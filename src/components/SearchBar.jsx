import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'

const SearchBar = ({ filter = 'all' }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [fuse, setFuse] = useState(null)

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

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses, experiences, tracks..."
          value={query}
          onChange={handleSearch}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {results.length === 0 ? (
            <p className="p-4 text-gray-500">No results found</p>
          ) : (
            results.map((result, index) => {
              const item = result.item
              return (
                <div
                  key={index}
                  onClick={() => {
                    navigate(item.url)
                    setShowResults(false)
                    setQuery('')
                  }}
                  className="block p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.category} • {item.type}</p>
                    </div>
                    <span className={getBadgeClass(item.type)}>{item.type}</span>
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