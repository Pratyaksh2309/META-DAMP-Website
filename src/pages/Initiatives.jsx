import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { initiatives } from '../data/initiatives'

const Initiatives = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-neutral-50 to-primary-blue-50 min-h-screen relative overflow-hidden">
      <SEO 
        title="MEMS D-AMP Initiatives"
        description="Explore the various initiatives by MEMS D-AMP at IIT Bombay. From mentorship programs to skill development, discover how we're building a stronger MEMS community."
        keywords="MEMS initiatives, student programs, mentorship, skill development, IIT Bombay, academic support, peer learning"
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow-400/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-blue mb-6 sm:mb-8 animate-slide-up">Our Initiatives</h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4" style={{animationDelay: '0.3s'}}>
            Discover the programs and initiatives that make MEMS D-AMP a thriving community. 
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={initiative.id} className="stagger-animation glass-card rounded-3xl shadow-xl card-hover group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-500/5 to-accent-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Initiative Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img 
                  src={initiative.photo} 
                  alt={initiative.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-blue-600 transition-colors duration-300 mb-3">
                  {initiative.name}
                </h3>
                
                {/* Subgroups Involved */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {initiative.subgroups.map((subgroup, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-primary-blue-100 text-primary-blue-700 rounded-full border border-primary-blue-200"
                    >
                      {subgroup}
                    </span>
                  ))}
                </div>
                
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {initiative.description}
                </p>
                
                {/* Action Button */}
                {initiative.link && (
                  <a
                    href={initiative.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue-600 text-white font-bold rounded-xl hover:bg-primary-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Visit
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 glass-card rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Have an Initiative Idea?</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            We're always looking for new ways to support the MEMS community. If you have an idea for an initiative, we'd love to hear from you!
          </p>
          <Link
            to="/support"
            className="inline-block px-8 py-4 bg-primary-blue-600 text-white font-bold rounded-xl hover:bg-primary-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Initiatives
