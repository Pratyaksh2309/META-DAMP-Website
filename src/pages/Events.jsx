import { Link } from 'react-router-dom'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'MEMS Orientation 2024',
      date: '2024-08-15',
      type: 'orientation',
      description: 'Welcome event for new MEMS students with department overview and senior interactions.',
      location: 'MEMS Department, IIT Bombay',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Industry Talk: Future of Manufacturing',
      date: '2024-09-20',
      type: 'talk',
      description: 'Expert talk on emerging trends in manufacturing and Industry 4.0.',
      location: 'Lecture Hall Complex',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Career Guidance Workshop',
      date: '2024-10-15',
      type: 'workshop',
      description: 'Interactive workshop on career planning and internship preparation.',
      location: 'MEMS Seminar Hall',
      status: 'upcoming'
    }
  ]

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
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
          <div className="inline-flex items-center px-4 py-2 bg-primary-blue-100/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-blue-700 mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-primary-blue-500 rounded-full mr-2 pulse-glow"></div>
            Upcoming & Past Events
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-slide-up">Events</h1>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Stay updated with MEMS D-AMP events, workshops, and activities designed to enhance your academic journey.
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="stagger-animation glass-card rounded-3xl shadow-xl card-hover p-10 group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-500/5 to-accent-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-blue-600 transition-colors duration-300">{event.title}</h3>
                      <span className={`px-4 py-2 text-sm font-bold rounded-2xl border ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      <span className={`px-4 py-2 text-sm font-bold rounded-2xl ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-6 text-lg leading-relaxed">{event.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center p-4 bg-primary-blue-50 rounded-2xl">
                    <div className="w-12 h-12 bg-primary-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Date</p>
                      <p className="text-neutral-600">{formatDate(event.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-accent-yellow-50 rounded-2xl">
                    <div className="w-12 h-12 bg-accent-yellow-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Location</p>
                      <p className="text-neutral-600">{event.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/event/${event.id}`} className="flex-1 button-primary group/btn inline-flex items-center justify-center">
                    View Event Details
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  {event.status === 'completed' && (
                    <button className="px-6 py-3 border-2 border-accent-yellow-400 text-accent-yellow-700 hover:bg-accent-yellow-400 hover:text-white rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Resources
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-16 glass-card rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold gradient-text-blue mb-8 text-center">Stay Connected</h2>
          <div className="text-center">
            <p className="text-neutral-600 mb-8 text-lg">
              Don't miss out on upcoming MEMS D-AMP events and workshops. Follow us for the latest updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="button-primary group inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h5a2 2 0 002-2v-5a2 2 0 00-2-2H4a2 2 0 00-2 2v5a2 2 0 002 2z"></path>
                </svg>
                Subscribe to Updates
              </button>
              <button className="px-8 py-4 border-2 border-accent-yellow-400 text-accent-yellow-700 hover:bg-accent-yellow-400 hover:text-white rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Join WhatsApp Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events