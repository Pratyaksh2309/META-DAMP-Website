import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const Experiences = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [internshipFilter, setInternshipFilter] = useState('all')

  const experiences = [
    { id: 1, title: 'Google Software Engineering Intern', category: 'internship', type: 'software', company: 'Google', duration: 'Summer 2024', location: 'Bangalore', cpi: '9.2+' },
    { id: 2, title: 'Microsoft Research Intern', category: 'internship', type: 'research', company: 'Microsoft', duration: 'Summer 2024', location: 'Hyderabad', cpi: '8.5+' },
    { id: 3, title: 'MIT Graduate Studies', category: 'higher-studies', type: 'masters', company: 'MIT', duration: 'Fall 2024', location: 'Boston, USA', cpi: '9.5+' },
    { id: 4, title: 'Robotics Project at IIT Bombay', category: 'projects', type: 'research', company: 'IIT Bombay', duration: 'Spring 2024', location: 'Mumbai', cpi: '8.0+' }
  ]

  const getFilteredExperiences = () => {
    let filtered = experiences
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(exp => exp.category === activeFilter)
    }
    
    if (activeFilter === 'internship' && internshipFilter !== 'all') {
      filtered = filtered.filter(exp => exp.type === internshipFilter)
    }
    
    return filtered
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'software': return 'bg-primary-blue-100 text-primary-blue-700 border-primary-blue-200'
      case 'research': return 'bg-neutral-100 text-neutral-700 border-neutral-200'
      case 'masters': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'consulting': return 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200'
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200'
    }
  }

  return (
    <div className="py-24 bg-gradient-to-br from-neutral-50 to-primary-blue-50 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow-400/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text-blue mb-8 animate-slide-up">Experiences</h1>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Real stories from MEMS students about their internships, higher studies, and project experiences.
          </p>
        </div>

        <SearchBar filter="experiences" />

        {/* Main Filters */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          {['all', 'internship', 'higher-studies', 'projects'].map((filter, index) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter)
                setInternshipFilter('all')
              }}
              className={`stagger-animation px-8 py-4 rounded-2xl font-bold transition-all duration-500 relative overflow-hidden group ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-blue-600 to-primary-blue-700 text-white shadow-xl scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-neutral-700 hover:text-primary-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-neutral-200/50'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <span className="relative z-10">
                {filter === 'all' ? 'All Experiences' : 
                 filter === 'higher-studies' ? 'Higher Studies' :
                 filter.charAt(0).toUpperCase() + filter.slice(1)}
              </span>
              {activeFilter !== filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Internship Sub-filters */}
        {activeFilter === 'internship' && (
          <div className="flex flex-wrap gap-3 mb-12 justify-center animate-fade-in">
            {['all', 'software', 'research', 'consulting', 'finance'].map((filter, index) => (
              <button
                key={filter}
                onClick={() => setInternshipFilter(filter)}
                className={`stagger-animation px-6 py-2 rounded-2xl font-semibold transition-all duration-300 ${
                  internshipFilter === filter
                    ? 'bg-gradient-to-r from-accent-yellow-500 to-accent-yellow-600 text-white shadow-glow-yellow'
                    : 'bg-white text-neutral-700 hover:bg-accent-yellow-50 hover:text-accent-yellow-700 shadow-md'
                }`}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {filter === 'all' ? 'All Internships' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredExperiences().map((experience, index) => (
            <div key={experience.id} className="stagger-animation glass-card-blue rounded-3xl shadow-xl card-hover p-10 group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-500/5 to-accent-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-blue-600 transition-colors duration-300 mb-2">{experience.title}</h3>
                    <p className="text-primary-blue-600 font-semibold">{experience.company}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm font-bold rounded-2xl shadow-sm border ${getTypeColor(experience.type)}`}>
                    {experience.type}
                  </span>
                </div>
                
                <div className="space-y-4 text-neutral-600 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-3"></div>
                    <span className="font-semibold text-neutral-800">Duration:</span>
                    <span className="ml-2">{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-yellow-500 rounded-full mr-3"></div>
                    <span className="font-semibold text-neutral-800">Location:</span>
                    <span className="ml-2">{experience.location}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></div>
                    <span className="font-semibold text-neutral-800">CPI Required:</span>
                    <span className="ml-2">{experience.cpi}</span>
                  </div>
                </div>

                <Link to={`/experience/${experience.id}`} className="w-full button-primary group/btn inline-flex items-center justify-center">
                  Read Full Experience
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {getFilteredExperiences().length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">No experiences found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experiences