import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const EventDetail = () => {
  const { eventId } = useParams()
  
  const eventData = {
    1: {
      id: 1,
      title: 'MEMS Orientation 2024',
      date: '2024-08-15',
      time: '10:00 AM - 4:00 PM',
      type: 'orientation',
      description: 'Welcome event for new MEMS students with department overview and senior interactions.',
      location: 'MEMS Department, IIT Bombay',
      venue: 'Main Auditorium, MEMS Building',
      status: 'completed',
      attendees: 150,
      organizers: ['MEMS D-AMP Team', 'Department Faculty'],
      detailedDescription: 'The MEMS Orientation 2024 was a comprehensive welcome event designed to introduce new students to the department, its culture, and opportunities. The event featured interactive sessions, department tours, and networking opportunities with seniors and faculty.',
      highlights: [
        'Department Overview by HOD',
        'Interactive Session with Seniors',
        'Campus Tour',
        'Research Lab Visits',
        'Q&A with Faculty',
        'Networking Lunch'
      ],
      schedule: [
        { time: '10:00 AM', activity: 'Registration & Welcome Coffee', speaker: 'D-AMP Team' },
        { time: '10:30 AM', activity: 'Welcome Address', speaker: 'Prof. Rajesh Kumar (HOD)' },
        { time: '11:15 AM', activity: 'Department Overview', speaker: 'Faculty Panel' },
        { time: '12:00 PM', activity: 'Interactive Session with Seniors', speaker: 'Senior Students' },
        { time: '1:00 PM', activity: 'Networking Lunch', speaker: 'All Participants' },
        { time: '2:00 PM', activity: 'Campus & Lab Tours', speaker: 'Student Volunteers' },
        { time: '3:30 PM', activity: 'Q&A Session', speaker: 'Faculty & Seniors' },
        { time: '4:00 PM', activity: 'Closing & Group Photo', speaker: 'D-AMP Team' }
      ],
      speakers: [
        {
          name: 'Prof. Rajesh Kumar',
          role: 'Head of Department',
          topic: 'Welcome Address & Department Vision',
          bio: 'Prof. Kumar has been leading the MEMS department for 5 years, focusing on innovation and student development.'
        },
        {
          name: 'Arjun Patel',
          role: 'Final Year Student',
          topic: 'Student Life & Opportunities',
          bio: 'Google intern and D-AMP team lead, sharing insights about academic and career opportunities.'
        }
      ],
      gallery: [
        { id: 1, caption: 'Welcome ceremony in the main auditorium' },
        { id: 2, caption: 'Students interacting with faculty during Q&A' },
        { id: 3, caption: 'Lab tour showcasing research facilities' },
        { id: 4, caption: 'Group photo of all participants' }
      ],
      resources: [
        { name: 'Welcome Presentation', type: 'pdf', link: '#' },
        { name: 'Department Handbook', type: 'pdf', link: '#' },
        { name: 'Course Catalog', type: 'pdf', link: '#' },
        { name: 'Event Photos', type: 'gallery', link: '#' }
      ],
      feedback: [
        {
          author: 'Priya Sharma',
          year: '1st Year',
          rating: 5,
          comment: 'Amazing orientation! Really helped me understand what MEMS is all about. The senior interactions were super helpful.'
        },
        {
          author: 'Rahul Kumar',
          year: '1st Year', 
          rating: 4,
          comment: 'Great event overall. The lab tours were fascinating. Would have loved more time for networking.'
        }
      ]
    }
  }

  const event = eventData[eventId] || eventData[1]
  const [activeSection, setActiveSection] = useState('overview')

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'orientation': return 'bg-primary-blue-100 text-primary-blue-700 border-primary-blue-200'
      case 'talk': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'workshop': return 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200'
      case 'seminar': return 'bg-neutral-100 text-neutral-700 border-neutral-200'
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-emerald-500 text-white'
      case 'completed': return 'bg-neutral-500 text-white'
      case 'ongoing': return 'bg-primary-blue-500 text-white'
      default: return 'bg-neutral-500 text-white'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-accent-yellow-400' : 'text-neutral-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-blue-50">
      {/* Hero Banner */}
      <section className="relative py-16 bg-gradient-to-r from-neutral-900 via-primary-blue-900 to-accent-yellow-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent-yellow-400/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-blue-400/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center mb-6">
            <Link to="/events" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Events
            </Link>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getEventTypeColor(event.type)}`}>
                {event.type.toUpperCase()}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(event.status)}`}>
                {event.status.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              {event.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              {event.detailedDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-accent-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-white font-semibold">Date & Time</span>
                </div>
                <p className="text-white/80">{formatDate(event.date)}</p>
                <p className="text-white/80">{event.time}</p>
              </div>
              
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-accent-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-white font-semibold">Location</span>
                </div>
                <p className="text-white/80">{event.venue}</p>
                <p className="text-white/80 text-sm">{event.location}</p>
              </div>
              
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-accent-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span className="text-white font-semibold">Attendees</span>
                </div>
                <p className="text-white/80 text-2xl font-bold">{event.attendees}</p>
                <p className="text-white/80 text-sm">Participants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Pills */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'overview', label: 'Overview', icon: '📋' },
              { id: 'schedule', label: 'Schedule', icon: '⏰' },
              { id: 'speakers', label: 'Speakers', icon: '🎤' },
              { id: 'gallery', label: 'Gallery', icon: '📸' },
              { id: 'resources', label: 'Resources', icon: '📚' },
              { id: 'feedback', label: 'Feedback', icon: '💬' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 text-white shadow-lg scale-105'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50 shadow-md hover:shadow-lg'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeSection === 'overview' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="glass-card-blue rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🎯</span>
                      Event Highlights
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm">
                          <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-4"></div>
                          <span className="text-neutral-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="glass-card-yellow rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">👥</span>
                      Organizers
                    </h3>
                    <div className="space-y-4">
                      {event.organizers.map((organizer, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm">
                          <div className="w-12 h-12 bg-gradient-to-r from-accent-yellow-400 to-accent-yellow-500 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold">{organizer.charAt(0)}</span>
                          </div>
                          <span className="text-neutral-700 font-semibold">{organizer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'schedule' && (
            <div className="animate-fade-in">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center flex items-center justify-center">
                  <span className="text-3xl mr-3">⏰</span>
                  Event Schedule
                </h3>
                <div className="space-y-6">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-20 text-right mr-8">
                          <span className="text-primary-blue-600 font-bold text-lg">{item.time}</span>
                        </div>
                        <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full mt-2 mr-6 relative z-10"></div>
                        <div className="flex-1 pb-8">
                          <h4 className="text-xl font-bold text-neutral-900 mb-2">{item.activity}</h4>
                          <p className="text-neutral-600 mb-2">{item.speaker}</p>
                        </div>
                      </div>
                      {index < event.schedule.length - 1 && (
                        <div className="absolute left-28 top-6 w-0.5 h-16 bg-gradient-to-b from-primary-blue-300 to-accent-yellow-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'speakers' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="glass-card rounded-3xl p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-2xl font-bold">{speaker.name.charAt(0)}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-neutral-900 mb-2">{speaker.name}</h4>
                    <p className="text-primary-blue-600 font-semibold mb-4">{speaker.role}</p>
                    <p className="text-accent-yellow-700 font-medium mb-4">"{speaker.topic}"</p>
                    <p className="text-neutral-600 leading-relaxed">{speaker.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'gallery' && (
            <div className="animate-fade-in">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center flex items-center justify-center">
                  <span className="text-3xl mr-3">📸</span>
                  Event Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.gallery.map((photo) => (
                    <div key={photo.id} className="bg-neutral-200 rounded-2xl aspect-video flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📷</div>
                        <p className="text-neutral-600 font-medium px-4">{photo.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'resources' && (
            <div className="animate-fade-in">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center flex items-center justify-center">
                  <span className="text-3xl mr-3">📚</span>
                  Event Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.link}
                      className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-primary-blue-100 rounded-xl flex items-center justify-center mr-4">
                        {resource.type === 'pdf' && <span className="text-2xl">📄</span>}
                        {resource.type === 'gallery' && <span className="text-2xl">🖼️</span>}
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900">{resource.name}</h4>
                        <p className="text-neutral-600 text-sm capitalize">{resource.type}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'feedback' && (
            <div className="animate-fade-in">
              <div className="space-y-6">
                {event.feedback.map((feedback, index) => (
                  <div key={index} className="glass-card rounded-3xl p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-neutral-900">{feedback.author}</h4>
                        <p className="text-neutral-600">{feedback.year}</p>
                      </div>
                      <div className="flex items-center">
                        {renderStars(feedback.rating)}
                      </div>
                    </div>
                    <p className="text-neutral-700 leading-relaxed italic">"{feedback.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default EventDetail