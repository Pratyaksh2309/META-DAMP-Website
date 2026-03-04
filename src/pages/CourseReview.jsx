import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'
import { coursesData } from '../data/courses'

const CourseReview = () => {
  const { courseId } = useParams()
  
  // Find course by ID from the data
  const course = coursesData.find(c => c.id === courseId)
  
  // Fallback to first course if not found
  const displayCourse = course || coursesData[0]
  
  const [activeTab, setActiveTab] = useState('overview')

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
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
        title={`${displayCourse.code} - ${displayCourse.name}`}
        description={`Detailed review of ${displayCourse.code} ${displayCourse.name} at IIT Bombay MEMS. Learn about course content, difficulty, professor, workload, and tips from students.`}
        keywords={`${displayCourse.code}, ${displayCourse.name}, course review, MEMS course, IIT Bombay`}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-blue-600 to-primary-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent-yellow-400/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-blue-400/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center mb-6">
            <Link to="/courses" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-4 py-2 glass-card rounded-full text-sm font-semibold text-white mb-6">
                <div className="w-2 h-2 bg-accent-yellow-400 rounded-full mr-3 pulse-glow-yellow"></div>
                {displayCourse.category.toUpperCase()} COURSE
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {displayCourse.code}
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
                {displayCourse.name}
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                {displayCourse.description}
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  {renderStars(displayCourse.rating)}
                  <span className="ml-2 text-white font-semibold">{displayCourse.rating}</span>
                </div>
                {/* <span className="text-white/80">({displayCourse.totalReviews} reviews)</span> */}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-3xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Professor:</span>
                    <span className="text-white font-semibold text-right text-sm">{displayCourse.professor}</span>
                  </div>
                  {displayCourse.credits && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Credits:</span>
                      <span className="text-white font-semibold">{displayCourse.credits}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Semester:</span>
                    <span className="text-white font-semibold text-right text-sm">{displayCourse.semester}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Difficulty:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(displayCourse.difficulty)}`}>
                      {displayCourse.difficulty}
                    </span>
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
              { id: 'reviews', label: 'Student Reviews' },
              { id: 'tips', label: 'Study Tips' },
              { id: 'resources', label: 'Resources' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 text-white shadow-glow'
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
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Prerequisites</h3>
                  <div className="flex flex-wrap gap-3">
                    {displayCourse.prerequisites && displayCourse.prerequisites.map((prereq, index) => (
                      <span key={index} className="px-4 py-2 bg-primary-blue-100 text-primary-blue-700 rounded-full font-medium">
                        {prereq}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Topics Covered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {displayCourse.topics && displayCourse.topics.map((topic, index) => (
                      <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm">
                        <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-4"></div>
                        <span className="text-neutral-700 font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6 animate-fade-in">
                {displayCourse.reviews && displayCourse.reviews.map((review) => (
                  <div key={review.id} className="glass-card rounded-3xl p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="font-bold text-neutral-900 text-xl">{review.author}</h4>
                        <p className="text-neutral-600">{review.year} • {review.semester}</p>
                      </div>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    {/* Why Take Course */}
                    {review.whyTakeCourse && (
                      <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <h5 className="font-semibold text-blue-900 mb-2">Why take this course?</h5>
                        <p className="text-blue-800 text-sm leading-relaxed">{review.whyTakeCourse}</p>
                      </div>
                    )}

                    {/* Overall Experience */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-neutral-900 mb-2">Overall Experience</h5>
                      <p className="text-neutral-700 leading-relaxed">{review.content}</p>
                    </div>

                    {/* Course Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* Teaching Style */}
                      {review.teachingStyle && (
                        <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                          <h5 className="font-semibold text-purple-900 mb-2">Teaching Style</h5>
                          <p className="text-purple-800 text-sm leading-relaxed">{review.teachingStyle}</p>
                        </div>
                      )}

                      {/* Attendance */}
                      {review.attendance && (
                        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                          <h5 className="font-semibold text-amber-900 mb-2">Attendance Policy</h5>
                          <p className="text-amber-800 text-sm leading-relaxed">{review.attendance}</p>
                        </div>
                      )}

                      {/* Slides Quality */}
                      {review.slidesQuality && (
                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                          <h5 className="font-semibold text-indigo-900 mb-2">Slides Quality</h5>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < review.slidesQuality ? 'text-indigo-500' : 'text-indigo-200'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-indigo-900 font-semibold text-sm">{review.slidesQuality}/5</span>
                          </div>
                        </div>
                      )}

                      {/* Assignments */}
                      {review.assignments && (
                        <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                          <h5 className="font-semibold text-green-900 mb-2">Assignments Structure</h5>
                          <p className="text-green-800 text-sm leading-relaxed">{review.assignments}</p>
                        </div>
                      )}
                    </div>

                    {/* Grading & Exam Pattern */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {review.grading && (
                        <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                          <h5 className="font-semibold text-cyan-900 mb-2">Grading Policy</h5>
                          <p className="text-cyan-800 text-sm leading-relaxed">{review.grading}</p>
                        </div>
                      )}

                      {review.examPattern && (
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                          <h5 className="font-semibold text-rose-900 mb-2">Exam Pattern</h5>
                          <p className="text-rose-800 text-sm leading-relaxed">{review.examPattern}</p>
                        </div>
                      )}
                    </div>

                    {/* Resources */}
                    {review.resources && review.resources.length > 0 && (
                      <div className="mb-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                        <h5 className="font-semibold text-yellow-900 mb-2">Recommended Resources</h5>
                        <ul className="space-y-1">
                          {review.resources.map((resource, index) => (
                            <li key={index} className="text-yellow-800 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></div>
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-emerald-700 mb-3">Pros</h5>
                        <ul className="space-y-2">
                          {review.pros && review.pros.map((pro, index) => (
                            <li key={index} className="text-neutral-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-rose-700 mb-3">Cons</h5>
                        <ul className="space-y-2">
                          {review.cons && review.cons.map((con, index) => (
                            <li key={index} className="text-neutral-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-3"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tips' && (
              <div className="glass-card rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Study Tips from Seniors</h3>
                <div className="space-y-4">
                  {displayCourse.tips && displayCourse.tips.map((tip, index) => (
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

            {activeTab === 'resources' && (
              <div className="glass-card rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Helpful Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayCourse.resources && displayCourse.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.link || '#'}
                      target={resource.link ? '_blank' : '_self'}
                      rel={resource.link ? 'noopener noreferrer' : ''}
                      className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 bg-primary-blue-100 rounded-xl flex items-center justify-center mr-4 text-primary-blue-700 font-bold text-lg">
                        {resource.type === 'book' && 'B'}
                        {resource.type === 'notes' && 'N'}
                        {resource.type === 'pyq' && 'P'}
                        {resource.type === 'video' && 'V'}
                        {resource.type === 'drive' && 'D'}
                        {resource.type === 'slides' && 'S'}
                        {resource.type === 'ai-tool' && 'AI'}
                        {resource.type === 'inspiration' && 'I'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">{resource.name}</h4>
                        <p className="text-neutral-600 text-sm capitalize">{resource.type}</p>
                      </div>
                    </a>
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

export default CourseReview
