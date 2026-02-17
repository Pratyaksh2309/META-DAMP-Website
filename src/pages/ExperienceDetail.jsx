import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'
import { experiencesData } from '../data/experiences'

const ExperienceDetail = () => {
  const { experienceId } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  
  // Find experience from data
  const experience = experiencesData.find(exp => exp.id === parseInt(experienceId))
  
  // If experience not found, redirect to experiences page
  if (!experience) {
    return <Navigate to="/experiences" replace />
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'software': return 'bg-primary-blue-100 text-primary-blue-700 border-primary-blue-200'
      case 'research': return 'bg-neutral-100 text-neutral-700 border-neutral-200'
      case 'masters': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'consulting': return 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200'
      case 'finance': return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'exchange': return 'bg-teal-100 text-teal-700 border-teal-200'
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200'
    }
  }

  // Get tabs based on experience category
  const getTabs = () => {
    if (experience.category === 'internship') {
      return [
        { id: 'overview', label: 'Overview' },
        { id: 'selection', label: 'Selection Process' },
        { id: 'work', label: 'Work Experience' },
        { id: 'preparation', label: 'Preparation' },
        { id: 'tips', label: 'Tips & Advice' }
      ]
    } else if (experience.category === 'research') {
      return [
        { id: 'overview', label: 'Overview' },
        { id: 'work', label: 'Research Work' },
        { id: 'selection', label: 'Selection Process' },
        { id: 'tips', label: 'Tips & Advice' }
      ]
    } else if (experience.category === 'semester-exchange') {
      return [
        { id: 'overview', label: 'Overview' },
        { id: 'enrollment', label: 'Enrollment Process' },
        { id: 'experience', label: 'Experience' },
        { id: 'courses', label: 'Course Mapping' },
        { id: 'tips', label: 'Tips & Advice' }
      ]
    }
    return [{ id: 'overview', label: 'Overview' }]
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
        title={`${experience.title} - ${experience.company}`}
        description={`Read about ${experience.title} experience at ${experience.company}. Learn about the selection process, work culture, interview tips, and advice for MEMS students.`}
        keywords={`${experience.company}, internship, ${experience.type}, student experience, IIT Bombay`}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-blue-600 to-accent-yellow-500 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-yellow-300/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center mb-6">
            <Link to="/experiences" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Experiences
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-4 py-2 glass-card rounded-full text-sm font-semibold text-white mb-6">
                <div className="w-2 h-2 bg-accent-yellow-400 rounded-full mr-3 pulse-glow-yellow"></div>
                {experience.category.toUpperCase()} EXPERIENCE
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {experience.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
                {experience.company} {experience.location && `• ${experience.location}`}
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                {experience.description}
              </p>
              
              {experience.rating && (
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    {renderStars(experience.rating)}
                    <span className="ml-2 text-white font-semibold">{experience.rating}/5</span>
                  </div>
                  <span className="text-white/80">Overall Experience</span>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-3xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Experience Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Student:</span>
                    <span className="text-white font-semibold">{experience.studentName}</span>
                  </div>
                  {experience.rollNumber && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Roll Number:</span>
                      <span className="text-white font-semibold">{experience.rollNumber}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Year:</span>
                    <span className="text-white font-semibold">{experience.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Duration:</span>
                    <span className="text-white font-semibold">{experience.duration}</span>
                  </div>
                  {experience.role && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Role:</span>
                      <span className="text-white font-semibold">{experience.role}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Type:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getTypeColor(experience.type)}`}>
                      {experience.type}
                    </span>
                  </div>
                  {experience.rating && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Rating:</span>
                      <span className="text-white font-semibold">{experience.rating}/5</span>
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
            {getTabs().map((tab) => (
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
            {/* INTERNSHIP EXPERIENCE TABS */}
            {experience.category === 'internship' && (
              <>
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card-blue rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">What I Worked On</h3>
                      <p className="text-neutral-600 mb-6 text-lg">{experience.workDescription}</p>
                      
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                              <span key={index} className="px-4 py-2 bg-primary-blue-100 text-primary-blue-700 rounded-full font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {experience.pros && (
                        <div className="glass-card rounded-3xl p-6">
                          <h4 className="font-bold text-emerald-700 mb-4 flex items-center">
                            Pros
                          </h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.pros}</p>
                        </div>
                      )}
                      {experience.cons && (
                        <div className="glass-card rounded-3xl p-6">
                          <h4 className="font-bold text-rose-700 mb-4 flex items-center">
                            Cons
                          </h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.cons}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'selection' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Selection Process</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.selectionProcess}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'work' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card-yellow rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Work Experience</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.workExperience}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'preparation' && (
                  <div className="glass-card rounded-3xl p-8 animate-fade-in">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">How to Prepare</h3>
                    <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.preparation}</p>
                  </div>
                )}

                {activeTab === 'tips' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Tips for Success</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.tips}</p>
                    </div>

                    <div className="glass-card-yellow rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4">About the Author</h3>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-xl">{experience.studentName.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900">{experience.studentName}</p>
                          <p className="text-neutral-600">{experience.rollNumber} • Class of {experience.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* RESEARCH EXPERIENCE TABS */}
            {experience.category === 'research' && (
              <>
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card-blue rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Project Overview</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-2">Project Name:</h4>
                          <p className="text-neutral-600">{experience.projectName}</p>
                        </div>
                        {experience.guide && (
                          <div>
                            <h4 className="font-semibold text-neutral-800 mb-2">Guide:</h4>
                            <p className="text-neutral-600">{experience.guide}</p>
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-2">Description:</h4>
                          <p className="text-neutral-600">{experience.description}</p>
                        </div>
                      </div>
                      
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-neutral-800 mb-3">Technologies/Software Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                              <span key={index} className="px-4 py-2 bg-primary-blue-100 text-primary-blue-700 rounded-full font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {experience.pros && (
                        <div className="glass-card rounded-3xl p-6">
                          <h4 className="font-bold text-emerald-700 mb-4 flex items-center">
                            Pros
                          </h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.pros}</p>
                        </div>
                      )}
                      {experience.cons && (
                        <div className="glass-card rounded-3xl p-6">
                          <h4 className="font-bold text-rose-700 mb-4 flex items-center">
                            Cons
                          </h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.cons}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'work' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card-yellow rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Research Work</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.workDescription}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'selection' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Selection Process</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.selectionProcess}</p>
                      
                      {experience.preparation && experience.preparation !== 'NA' && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-neutral-800 mb-3">Preparation:</h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.preparation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'tips' && (
                  <div className="space-y-8 animate-fade-in">
                    {experience.tips && experience.tips !== 'NA' && (
                      <div className="glass-card rounded-3xl p-8">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Tips & Advice</h3>
                        <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.tips}</p>
                      </div>
                    )}

                    <div className="glass-card-yellow rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4">About the Researcher</h3>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-xl">{experience.studentName.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900">{experience.studentName}</p>
                          <p className="text-neutral-600">{experience.rollNumber} • {experience.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* SEMESTER EXCHANGE TABS */}
            {experience.category === 'semester-exchange' && (
              <>
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card-blue rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Exchange Program Overview</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-2">University:</h4>
                          <p className="text-neutral-600">{experience.company}</p>
                        </div>
                        {experience.semester && (
                          <div>
                            <h4 className="font-semibold text-neutral-800 mb-2">Semester:</h4>
                            <p className="text-neutral-600">Semester {experience.semester}</p>
                          </div>
                        )}
                        {experience.scholarships && (
                          <div>
                            <h4 className="font-semibold text-neutral-800 mb-2">Scholarships:</h4>
                            <p className="text-neutral-600">{experience.scholarships}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'enrollment' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Enrollment Process</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.enrollmentProcess}</p>
                      
                      {experience.bottlenecks && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-neutral-800 mb-3">Bottlenecks:</h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.bottlenecks}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {experience.thingsLiked && (
                        <div className="glass-card rounded-3xl p-6">
                          <h4 className="font-bold text-emerald-700 mb-4 flex items-center">
                            Things I Liked
                          </h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.thingsLiked}</p>
                        </div>
                      )}
                      {experience.challenges && (
                        <div className="glass-card rounded-3xl p-6">
                          <h4 className="font-bold text-rose-700 mb-4 flex items-center">
                            Challenges
                          </h4>
                          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{experience.challenges}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card-yellow rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Course Mapping</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.courseMapping}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'tips' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="glass-card rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Tips for Future Applicants</h3>
                      <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">{experience.tips}</p>
                    </div>

                    <div className="glass-card-yellow rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4">About the Student</h3>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-xl">{experience.studentName.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900">{experience.studentName}</p>
                          <p className="text-neutral-600">{experience.rollNumber} • {experience.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperienceDetail