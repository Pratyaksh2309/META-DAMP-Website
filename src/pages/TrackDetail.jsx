import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'
import { getTrackById, tracksData } from '../data/tracks'

const TrackDetail = () => {
  const { trackId } = useParams()
  
  const track = getTrackById(trackId) || tracksData[0]
  const [activeTab, setActiveTab] = useState('overview')

  const normalizeList = (value) => {
    if (!value) {
      return []
    }

    return Array.isArray(value) ? value.filter(Boolean) : [value]
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'medium': return 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200'
      case 'hard': return 'bg-rose-100 text-rose-700 border-rose-200'
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200'
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-accent-yellow-400' : 'text-neutral-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const overviewItems = [
    {
      id: 'softPrerequisites',
      title: 'Soft Prerequisites',
      items: normalizeList(track.softPrerequisites)
    },
    {
      id: 'logistics',
      title: 'Dept / Logistics Notes',
      items: normalizeList(track.logisticsChallenges)
    },
    {
      id: 'utility',
      title: 'Utility and Career Perspective',
      items: normalizeList(track.utility)
    }
  ].filter(section => section.items.length > 0)

  const courseList = normalizeList(track.courses)
  const testimonialList = normalizeList(track.testimonials)
  const tipList = normalizeList(track.tips)

  const tabs = [
    { id: 'overview', label: 'Overview', isVisible: true },
    { id: 'courses', label: 'Courses', isVisible: courseList.length > 0 },
    { id: 'testimonials', label: 'Student Stories', isVisible: testimonialList.length > 0 },
    { id: 'tips', label: 'Tips', isVisible: tipList.length > 0 }
  ].filter(tab => tab.isVisible)

  const activeTabId = tabs.some(tab => tab.id === activeTab) ? activeTab : 'overview'

  const seoDescription =
    track.description ||
    overviewItems[0]?.items[0] ||
    `Student-sourced guide to ${track.title}.`

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-blue-50">
      <SEO 
        title={`${track.title} - Academic Track`}
        description={seoDescription}
        keywords={`${track.title}, MEMS track, academic pathway, course planning, IIT Bombay`}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-blue-600 to-accent-yellow-500 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-yellow-300/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center mb-6">
            <Link to="/tracks" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Tracks
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-4 py-2 glass-card rounded-full text-sm font-semibold text-white mb-6">
                <div className="w-2 h-2 bg-accent-yellow-400 rounded-full mr-3 pulse-glow-yellow"></div>
                ACADEMIC TRACK
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {track.title}
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                {seoDescription}
              </p>
              
              <div className="flex items-center space-x-6">
                {track.rating && (
                  <div className="flex items-center">
                    {renderStars(track.rating)}
                    <span className="ml-2 text-white font-semibold">{track.rating}</span>
                  </div>
                )}
                {testimonialList.length > 0 && (
                  <span className="text-white/80">({testimonialList.length} student responses)</span>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-3xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Track Details</h3>
                <div className="space-y-4">
                  {track.duration && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Duration:</span>
                      <span className="text-white font-semibold">{track.duration}</span>
                    </div>
                  )}
                  {track.prerequisites && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Prerequisites:</span>
                      <span className="text-white font-semibold">{track.prerequisites}</span>
                    </div>
                  )}
                  {track.difficulty && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Difficulty:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(track.difficulty)}`}>
                        {track.difficulty}
                      </span>
                    </div>
                  )}
                  {courseList.length > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Total Courses:</span>
                      <span className="text-white font-semibold">{courseList.length}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTabId === tab.id
                    ? 'bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 text-white shadow-glow'
                    : 'bg-white text-neutral-700 hover:bg-primary-blue-50 hover:text-primary-blue-600 shadow-md'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTabId === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                {overviewItems.map((section, sectionIndex) => (
                  <div key={section.id} className={`rounded-3xl p-8 ${sectionIndex % 2 === 0 ? 'glass-card-blue' : 'glass-card-yellow'}`}>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">{section.title}</h3>
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start p-4 bg-white rounded-2xl shadow-sm">
                          <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-4 mt-2"></div>
                          <p className="text-neutral-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTabId === 'courses' && (
              <div className="space-y-8 animate-fade-in">
                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-8">Courses Mentioned by Students</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courseList.map((course, index) => (
                      <div key={index} className="bg-white rounded-2xl border border-primary-blue-100 p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-neutral-900">{course.code || course.name}</h4>
                            {course.name && (
                              <p className="text-sm text-neutral-600">{course.name}</p>
                            )}
                          </div>
                          <div className="text-xs text-primary-blue-600 font-semibold">{index + 1}</div>
                        </div>
                        <div className="space-y-2 text-sm text-neutral-600">
                          {course.difficulty && (
                            <div>Difficulty: {course.difficulty}</div>
                          )}
                          {course.semester && (
                            <div>Semester: {course.semester}</div>
                          )}
                          {course.credits && (
                            <div>Credits: {course.credits}</div>
                          )}
                        </div>
                        {course.notes && (
                          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                            {normalizeList(course.notes).map((note, noteIndex) => (
                              <li key={noteIndex} className="flex items-start">
                                <span className="w-2 h-2 bg-primary-blue-400 rounded-full mr-3 mt-2"></span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTabId === 'testimonials' && (
              <div className="space-y-6 animate-fade-in">
                {testimonialList.map((testimonial) => (
                  <div key={testimonial.id} className="glass-card rounded-3xl p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {testimonial.author && (
                          <h4 className="font-bold text-neutral-900">{testimonial.author}</h4>
                        )}
                        {testimonial.rollNumber && (
                          <p className="text-neutral-600">{testimonial.rollNumber}</p>
                        )}
                        {testimonial.year && (
                          <p className="text-neutral-600">Class of {testimonial.year}</p>
                        )}
                        {(testimonial.role || testimonial.company) && (
                          <p className="text-primary-blue-600 font-medium">
                            {[testimonial.role, testimonial.company].filter(Boolean).join(' at ')}
                          </p>
                        )}
                      </div>
                      {testimonial.rating && (
                        <div className="flex items-center">
                          {renderStars(testimonial.rating)}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-neutral-700 leading-relaxed italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            )}

            {activeTabId === 'tips' && (
              <div className="glass-card rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Success Tips from Alumni</h3>
                <div className="space-y-4">
                  {tipList.map((tip, index) => (
                    <div key={index} className="flex items-start p-4 bg-accent-yellow-50 rounded-2xl border border-accent-yellow-200">
                      <div className="w-6 h-6 bg-accent-yellow-400 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrackDetail