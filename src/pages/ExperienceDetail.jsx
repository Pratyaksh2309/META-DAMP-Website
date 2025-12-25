import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const ExperienceDetail = () => {
  const { experienceId } = useParams()
  
  const experienceData = {
    1: {
      id: 1,
      title: 'Google Software Engineering Intern',
      category: 'internship',
      type: 'software',
      company: 'Google',
      duration: 'Summer 2024',
      location: 'Bangalore',
      cpi: '9.2+',
      author: 'Arjun Patel',
      year: '2024',
      rating: 5,
      salary: '₹1,20,000/month',
      team: 'Google Search',
      description: 'An incredible 10-week journey at Google Bangalore working on search algorithms and machine learning systems. This internship completely transformed my understanding of large-scale software development.',
      applicationProcess: {
        timeline: 'Applied in August, interviewed in September, offer in October',
        rounds: [
          { name: 'Online Assessment', description: 'Coding problems on HackerEarth platform' },
          { name: 'Technical Round 1', description: 'Data structures and algorithms focus' },
          { name: 'Technical Round 2', description: 'System design and problem solving' },
          { name: 'HR Round', description: 'Cultural fit and motivation discussion' }
        ]
      },
      preparation: [
        'Solved 300+ problems on LeetCode focusing on medium-hard difficulty',
        'Practiced system design using Grokking the System Design course',
        'Built 3 full-stack projects showcasing different technologies',
        'Participated in competitive programming contests regularly',
        'Mock interviews with seniors and friends'
      ],
      workExperience: {
        project: 'Search Query Understanding',
        technologies: ['Python', 'TensorFlow', 'C++', 'BigQuery', 'Kubernetes'],
        responsibilities: [
          'Developed ML models to improve search query understanding',
          'Optimized existing algorithms reducing latency by 15%',
          'Collaborated with cross-functional teams across 3 time zones',
          'Presented findings to senior engineers and product managers'
        ],
        learnings: [
          'Large-scale distributed systems architecture',
          'Machine learning in production environments',
          'Code review processes and engineering best practices',
          'Working in diverse, global teams'
        ]
      },
      tips: [
        'Start preparing at least 6 months before application deadlines',
        'Focus on fundamentals - data structures and algorithms are crucial',
        'Build projects that demonstrate your passion for technology',
        'Practice explaining your thought process during problem solving',
        'Network with current employees through LinkedIn and referrals'
      ],
      pros: [
        'Excellent learning opportunities',
        'World-class mentorship',
        'Great work-life balance',
        'Amazing office facilities',
        'Strong brand value for future opportunities'
      ],
      cons: [
        'Highly competitive selection process',
        'High performance expectations',
        'Fast-paced environment can be overwhelming initially'
      ],
      advice: 'Google internship is life-changing but requires serious preparation. Start early, be consistent, and don\'t give up. The experience is worth every effort you put in.'
    }
  }

  const experience = experienceData[experienceId] || experienceData[1]
  const [activeTab, setActiveTab] = useState('overview')

  const getTypeColor = (type) => {
    switch (type) {
      case 'software': return 'bg-primary-blue-100 text-primary-blue-700 border-primary-blue-200'
      case 'research': return 'bg-neutral-100 text-neutral-700 border-neutral-200'
      case 'masters': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'consulting': return 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200'
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
                {experience.company} • {experience.location}
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                {experience.description}
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  {renderStars(experience.rating)}
                  <span className="ml-2 text-white font-semibold">{experience.rating}/5</span>
                </div>
                <span className="text-white/80">Overall Experience</span>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-3xl p-8 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Experience Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Author:</span>
                    <span className="text-white font-semibold">{experience.author}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Year:</span>
                    <span className="text-white font-semibold">{experience.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Duration:</span>
                    <span className="text-white font-semibold">{experience.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">CPI Required:</span>
                    <span className="text-white font-semibold">{experience.cpi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Type:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getTypeColor(experience.type)}`}>
                      {experience.type}
                    </span>
                  </div>
                  {experience.salary && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Stipend:</span>
                      <span className="text-white font-semibold">{experience.salary}</span>
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
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'application', label: 'Application Process' },
              { id: 'work', label: 'Work Experience' },
              { id: 'preparation', label: 'Preparation' },
              { id: 'advice', label: 'Tips & Advice' }
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
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">What I Worked On</h3>
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-2">Project: {experience.workExperience.project}</h4>
                    <p className="text-neutral-600 mb-4">Team: {experience.team}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.workExperience.technologies.map((tech, index) => (
                        <span key={index} className="px-4 py-2 bg-primary-blue-100 text-primary-blue-700 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card rounded-3xl p-6">
                    <h4 className="font-bold text-emerald-700 mb-4 flex items-center">
                      <span className="text-lg mr-2">👍</span> Pros
                    </h4>
                    <ul className="space-y-3">
                      {experience.pros.map((pro, index) => (
                        <li key={index} className="text-neutral-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card rounded-3xl p-6">
                    <h4 className="font-bold text-rose-700 mb-4 flex items-center">
                      <span className="text-lg mr-2">👎</span> Cons
                    </h4>
                    <ul className="space-y-3">
                      {experience.cons.map((con, index) => (
                        <li key={index} className="text-neutral-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'application' && (
              <div className="space-y-8 animate-fade-in">
                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Application Timeline</h3>
                  <p className="text-neutral-600 mb-8 text-lg">{experience.applicationProcess.timeline}</p>
                  
                  <div className="space-y-6">
                    {experience.applicationProcess.rounds.map((round, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full flex items-center justify-center mr-6">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-neutral-900 mb-2">{round.name}</h4>
                            <p className="text-neutral-600">{round.description}</p>
                          </div>
                        </div>
                        {index < experience.applicationProcess.rounds.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-blue-300 to-accent-yellow-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'work' && (
              <div className="space-y-8 animate-fade-in">
                <div className="glass-card-yellow rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Responsibilities</h3>
                  <div className="space-y-4">
                    {experience.workExperience.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start p-4 bg-white rounded-2xl shadow-sm">
                        <div className="w-6 h-6 bg-accent-yellow-400 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-neutral-700">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Learnings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.workExperience.learnings.map((learning, index) => (
                      <div key={index} className="flex items-start p-4 bg-primary-blue-50 rounded-2xl border border-primary-blue-100">
                        <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-4 mt-2"></div>
                        <span className="text-neutral-700 font-medium">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preparation' && (
              <div className="glass-card rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">🎯 How I Prepared</h3>
                <div className="space-y-4">
                  {experience.preparation.map((step, index) => (
                    <div key={index} className="flex items-start p-4 bg-accent-yellow-50 rounded-2xl border border-accent-yellow-200">
                      <div className="w-6 h-6 bg-accent-yellow-400 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'advice' && (
              <div className="space-y-8 animate-fade-in">
                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">💡 Tips for Success</h3>
                  <div className="space-y-4">
                    {experience.tips.map((tip, index) => (
                      <div key={index} className="flex items-start p-4 bg-primary-blue-50 rounded-2xl border border-primary-blue-200">
                        <div className="w-6 h-6 bg-primary-blue-400 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card-yellow rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Final Advice</h3>
                  <p className="text-neutral-700 text-lg leading-relaxed italic">"{experience.advice}"</p>
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{experience.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{experience.author}</p>
                      <p className="text-neutral-600">Class of {experience.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperienceDetail