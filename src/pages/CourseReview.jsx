import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const CourseReview = () => {
  const { courseId } = useParams()
  
  // Sample course data - in real app, this would come from API/database
  const courseData = {
    1: {
      code: 'ME 101',
      name: 'Engineering Mechanics',
      category: 'core',
      difficulty: 'medium',
      credits: 3,
      semester: '1st Year, 1st Sem',
      professor: 'Prof. Rajesh Kumar',
      rating: 4.2,
      totalReviews: 156,
      description: 'Engineering Mechanics is a fundamental course that introduces students to the principles of statics and dynamics. This course forms the foundation for all mechanical engineering subjects.',
      prerequisites: ['Basic Physics', 'Mathematics I'],
      topics: [
        'Force Systems and Equilibrium',
        'Trusses and Frames',
        'Friction and Applications',
        'Kinematics of Particles',
        'Kinetics of Particles',
        'Work-Energy Methods'
      ],
      reviews: [
        {
          id: 1,
          author: 'Anonymous Student',
          year: '2023',
          rating: 4,
          content: 'Great foundational course! Prof. Kumar explains concepts very clearly. The assignments are challenging but help in understanding. Make sure to practice problems regularly.',
          pros: ['Clear explanations', 'Good problem sets', 'Helpful TAs'],
          cons: ['Heavy workload', 'Difficult exams']
        },
        {
          id: 2,
          author: 'MEMS Senior',
          year: '2022',
          rating: 5,
          content: 'Absolutely loved this course. It really builds your problem-solving skills. The professor is very approachable during office hours.',
          pros: ['Excellent professor', 'Practical applications', 'Good lab sessions'],
          cons: ['Fast-paced lectures']
        }
      ],
      tips: [
        'Attend all lectures - the professor explains concepts that aren\'t in the textbook',
        'Form study groups for problem-solving sessions',
        'Start assignments early, they take longer than expected',
        'Use office hours - the professor is very helpful',
        'Practice previous year papers for exam preparation'
      ],
      resources: [
        { name: 'Course Textbook', link: '#', type: 'book' },
        { name: 'Lecture Notes', link: '#', type: 'notes' },
        { name: 'Problem Sets', link: '#', type: 'problems' },
        { name: 'Video Lectures', link: '#', type: 'video' }
      ]
    }
  }

  const course = courseData[courseId] || courseData[1]
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
                {course.category.toUpperCase()} COURSE
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {course.code}
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
                {course.name}
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                {course.description}
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  {renderStars(course.rating)}
                  <span className="ml-2 text-white font-semibold">{course.rating}</span>
                </div>
                <span className="text-white/80">({course.totalReviews} reviews)</span>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-3xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Professor:</span>
                    <span className="text-white font-semibold">{course.professor}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Credits:</span>
                    <span className="text-white font-semibold">{course.credits}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Semester:</span>
                    <span className="text-white font-semibold">{course.semester}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Difficulty:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
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
                    {course.prerequisites.map((prereq, index) => (
                      <span key={index} className="px-4 py-2 bg-primary-blue-100 text-primary-blue-700 rounded-full font-medium">
                        {prereq}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Topics Covered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.topics.map((topic, index) => (
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
                {course.reviews.map((review) => (
                  <div key={review.id} className="glass-card rounded-3xl p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-neutral-900">{review.author}</h4>
                        <p className="text-neutral-600">Class of {review.year}</p>
                      </div>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 mb-6 leading-relaxed">{review.content}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-emerald-700 mb-3">👍 Pros</h5>
                        <ul className="space-y-2">
                          {review.pros.map((pro, index) => (
                            <li key={index} className="text-neutral-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-rose-700 mb-3">👎 Cons</h5>
                        <ul className="space-y-2">
                          {review.cons.map((con, index) => (
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
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">💡 Study Tips from Seniors</h3>
                <div className="space-y-4">
                  {course.tips.map((tip, index) => (
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
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">📚 Helpful Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.link}
                      className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 bg-primary-blue-100 rounded-xl flex items-center justify-center mr-4">
                        {resource.type === 'book' && <span className="text-lg">📖</span>}
                        {resource.type === 'notes' && <span className="text-lg">📝</span>}
                        {resource.type === 'problems' && <span className="text-lg">🧮</span>}
                        {resource.type === 'video' && <span className="text-lg">🎥</span>}
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