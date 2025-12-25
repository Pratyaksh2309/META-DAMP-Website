import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const TrackDetail = () => {
  const { trackId } = useParams()
  
  const trackData = {
    1: {
      id: 1,
      title: 'Data Science Minor',
      description: 'Complete pathway for pursuing Data Science minor with MEMS core courses',
      difficulty: 'Medium',
      duration: '4 semesters',
      prerequisites: 'Basic programming knowledge',
      rating: 4.5,
      totalStudents: 89,
      detailedDescription: 'The Data Science Minor is designed for MEMS students who want to combine their mechanical engineering background with data analytics and machine learning skills. This track prepares you for the modern industry where data-driven decision making is crucial.',
      courses: [
        { code: 'CS 101', name: 'Computer Programming', semester: 'Sem 1', credits: 3, type: 'core' },
        { code: 'CS 213', name: 'Data Structures', semester: 'Sem 2', credits: 4, type: 'core' },
        { code: 'CS 419', name: 'Machine Learning', semester: 'Sem 3', credits: 4, type: 'elective' },
        { code: 'CS 725', name: 'Data Mining', semester: 'Sem 4', credits: 3, type: 'elective' }
      ],
      careerPaths: [
        'Data Scientist at Tech Companies',
        'Machine Learning Engineer',
        'Business Intelligence Analyst',
        'Research Scientist',
        'Product Manager (Technical)'
      ],
      skills: [
        'Python Programming',
        'Statistical Analysis',
        'Machine Learning',
        'Data Visualization',
        'Database Management',
        'Big Data Technologies'
      ],
      timeline: [
        { semester: 'Semester 1', courses: ['CS 101'], focus: 'Programming Fundamentals' },
        { semester: 'Semester 2', courses: ['CS 213'], focus: 'Data Structures & Algorithms' },
        { semester: 'Semester 3', courses: ['CS 419'], focus: 'Machine Learning Concepts' },
        { semester: 'Semester 4', courses: ['CS 725'], focus: 'Advanced Data Mining' }
      ],
      testimonials: [
        {
          id: 1,
          author: 'Priya Sharma',
          year: '2023',
          company: 'Google',
          role: 'Data Scientist',
          content: 'The Data Science minor gave me the perfect foundation to transition into tech. The combination of MEMS problem-solving skills with data science is incredibly powerful.',
          rating: 5
        },
        {
          id: 2,
          author: 'Rahul Kumar',
          year: '2022',
          company: 'Microsoft',
          role: 'ML Engineer',
          content: 'This track opened up so many opportunities. The coursework is challenging but very rewarding. Highly recommend for anyone interested in the intersection of engineering and data.',
          rating: 4
        }
      ],
      tips: [
        'Start with CS 101 early - it builds the foundation for everything else',
        'Practice coding regularly, not just during assignments',
        'Join data science competitions like Kaggle to gain practical experience',
        'Network with seniors who have completed this track',
        'Consider internships at data-driven companies'
      ]
    }
  }

  const track = trackData[trackId] || trackData[1]
  const [activeTab, setActiveTab] = useState('overview')

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-blue-50">
      <SEO 
        title={`${track.title} - Academic Track`}
        description={`Complete guide to ${track.title} for MEMS students. ${track.description} Includes course list, prerequisites, and semester planning.`}
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
                {track.detailedDescription}
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  {renderStars(track.rating)}
                  <span className="ml-2 text-white font-semibold">{track.rating}</span>
                </div>
                <span className="text-white/80">({track.totalStudents} students completed)</span>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-3xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Track Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Duration:</span>
                    <span className="text-white font-semibold">{track.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Prerequisites:</span>
                    <span className="text-white font-semibold">{track.prerequisites}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Difficulty:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(track.difficulty)}`}>
                      {track.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Total Courses:</span>
                    <span className="text-white font-semibold">{track.courses.length}</span>
                  </div>
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
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'courses', label: 'Course Timeline' },
              { id: 'careers', label: 'Career Paths' },
              { id: 'testimonials', label: 'Student Stories' },
              { id: 'tips', label: 'Success Tips' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
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
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div className="glass-card-blue rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Skills You'll Develop</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {track.skills.map((skill, index) => (
                      <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm">
                        <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-4"></div>
                        <span className="text-neutral-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card-yellow rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Why Choose This Track?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-accent-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                          <span className="text-white text-sm">🚀</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">High Demand</h4>
                          <p className="text-neutral-600">Data science roles are among the fastest growing in tech industry</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-accent-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                          <span className="text-white text-sm">💰</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Excellent Salary</h4>
                          <p className="text-neutral-600">Data scientists command premium salaries across industries</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-accent-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                          <span className="text-white text-sm">🔬</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Research Opportunities</h4>
                          <p className="text-neutral-600">Perfect for students interested in research and innovation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-accent-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                          <span className="text-white text-sm">🌐</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Versatile Skills</h4>
                          <p className="text-neutral-600">Applicable across multiple industries and domains</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-8 animate-fade-in">
                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-8">Course Timeline</h3>
                  <div className="space-y-6">
                    {track.timeline.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full flex items-center justify-center mr-6">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-neutral-900 mb-2">{item.semester}</h4>
                            <p className="text-neutral-600 mb-4">{item.focus}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.courses.map((courseCode, courseIndex) => {
                                const courseDetail = track.courses.find(c => c.code === courseCode)
                                return (
                                  <div key={courseIndex} className="bg-primary-blue-50 border border-primary-blue-200 rounded-xl p-4">
                                    <div className="font-semibold text-primary-blue-700">{courseDetail?.code}</div>
                                    <div className="text-sm text-primary-blue-600">{courseDetail?.name}</div>
                                    <div className="text-xs text-primary-blue-500">{courseDetail?.credits} credits</div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                        {index < track.timeline.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-blue-300 to-accent-yellow-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'careers' && (
              <div className="glass-card rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">🎯 Career Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {track.careerPaths.map((career, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-to-r from-primary-blue-50 to-accent-yellow-50 rounded-2xl border border-primary-blue-100">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <span className="text-neutral-700 font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-6 animate-fade-in">
                {track.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="glass-card rounded-3xl p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-neutral-900">{testimonial.author}</h4>
                        <p className="text-neutral-600">Class of {testimonial.year}</p>
                        <p className="text-primary-blue-600 font-medium">{testimonial.role} at {testimonial.company}</p>
                      </div>
                      <div className="flex items-center">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 leading-relaxed italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tips' && (
              <div className="glass-card rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">💡 Success Tips from Alumni</h3>
                <div className="space-y-4">
                  {track.tips.map((tip, index) => (
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