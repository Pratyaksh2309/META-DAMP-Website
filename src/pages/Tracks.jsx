import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'
import { tracksData } from '../data/tracks'

const Tracks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tracks = tracksData

  const getPrerequisitesPreview = (track) => {
    if (track.prerequisites) {
      return track.prerequisites
    }

    if (Array.isArray(track.softPrerequisites)) {
      return track.softPrerequisites[0]
    }

    return track.softPrerequisites
  }

  const getCoursePreview = (track) => {
    if (!track.courses?.length) {
      return []
    }

    return track.courses
      .map(course => course.code || course.name)
      .filter(Boolean)
      .slice(0, 6)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'medium': return 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200'
      case 'hard': return 'bg-rose-100 text-rose-700 border-rose-200'
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200'
    }
  }

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-neutral-50 to-primary-blue-50 min-h-screen relative overflow-hidden">
      <SEO 
        title="Academic Tracks & Pathways"
        description="Explore curated academic tracks for MEMS students including minors, dual degrees, and specializations. Get course recommendations and semester-wise planning guides."
        keywords="MEMS tracks, academic pathways, minor programs, dual degree, specializations, course planning, MEMS roadmap"
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow-400/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-blue mb-6 sm:mb-8 animate-slide-up">Course Tracks</h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4" style={{animationDelay: '0.3s'}}>
            Visual guides for popular course combinations and academic pathways to help you plan your MEMS journey.
          </p>
        </div>

        {/* Additional Info Section - Dropdown */}
        <div className="mt-16 glass-card rounded-3xl shadow-xl overflow-hidden mb-16">
          {/* Dropdown Header */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between p-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 group relative overflow-hidden">
            <h2 className="text-3xl font-bold text-slate-900">How to Use Course Tracks</h2>
            <svg
              className={`w-8 h-8 text-slate-600 transition-transform duration-300 flex-shrink-0 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {/* Dropdown Content with smooth height transition */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="p-12 bg-white/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center stagger-animation" style={{animationDelay: '0.1s'}}>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-3 text-lg">Choose Your Track</h3>
                  <p className="text-neutral-600">Select a track that aligns with your career goals and interests.</p>
                </div>
                <div className="text-center stagger-animation" style={{animationDelay: '0.2s'}}>
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-yellow-500 to-accent-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-yellow">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-3 text-lg">Plan Your Semesters</h3>
                  <p className="text-neutral-600">Use the course sequence to plan your academic timeline.</p>
                </div>
                <div className="text-center stagger-animation" style={{animationDelay: '0.3s'}}>
                  <div className="w-16 h-16 bg-gradient-to-r from-neutral-600 to-neutral-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-3 text-lg">Get Guidance</h3>
                  <p className="text-neutral-600">Consult with seniors and faculty for personalized advice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Track Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const coursePreview = getCoursePreview(track)
            const prerequisitesPreview = getPrerequisitesPreview(track)

            return (
            <div key={track.id} className="stagger-animation bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl card-hover p-10 border border-white/50 group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-500/5 to-accent-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-blue-600 transition-colors duration-300 mb-2">{track.title}</h3>
                    <p className="text-neutral-600">{track.description}</p>
                  </div>
                  {track.difficulty && (
                    <span className={`px-4 py-2 text-sm font-bold rounded-2xl shadow-sm border ${getDifficultyColor(track.difficulty)}`}>
                      {track.difficulty}
                    </span>
                  )}
                </div>

              {/* Track Details */}
                <div className="space-y-6 mb-8">
                  {coursePreview.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-3">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coursePreview.map((course, courseIndex) => (
                          <span key={courseIndex} className="px-4 py-2 bg-primary-blue-100 text-primary-blue-700 rounded-full text-sm font-medium">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {(track.duration || prerequisitesPreview) && (
                    <div className="space-y-4 text-neutral-600">
                      {track.duration && (
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-3"></div>
                          <span className="font-semibold text-neutral-800">Duration:</span>
                          <span className="ml-2">{track.duration}</span>
                        </div>
                      )}
                      {prerequisitesPreview && (
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-accent-yellow-500 rounded-full mr-3"></div>
                          <span className="font-semibold text-neutral-800">Prerequisites:</span>
                          <span className="ml-2">{prerequisitesPreview}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link to={`/track/${track.id}`} className="flex-1 button-primary group/btn inline-flex items-center justify-center">
                    View Detailed Track
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <button className="px-4 py-2 border-2 border-accent-yellow-400 text-accent-yellow-700 hover:bg-accent-yellow-400 hover:text-white rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </button>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tracks