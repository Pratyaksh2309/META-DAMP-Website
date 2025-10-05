import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [fuse, setFuse] = useState(null)

  const searchData = [
    { title: 'ME 101', category: 'course', type: 'core', difficulty: 'medium' },
    { title: 'ME 102', category: 'course', type: 'core', difficulty: 'easy' },
    { title: 'Google Internship', category: 'experience', type: 'internship', domain: 'software' },
    { title: 'Microsoft Internship', category: 'experience', type: 'internship', domain: 'software' },
    { title: 'DS Minor Track', category: 'track', type: 'minor' }
  ]

  useEffect(() => {
    const fuseInstance = new Fuse(searchData, {
      keys: ['title', 'category', 'type', 'domain'],
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
      setResults(searchResults.slice(0, 5))
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