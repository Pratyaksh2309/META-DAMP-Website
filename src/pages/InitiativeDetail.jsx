import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { initiatives } from '../data/initiatives'

const InitiativeDetail = () => {
  const { initiativeId } = useParams()
  const initiative = initiatives.find(i => i.id === parseInt(initiativeId)) || initiatives[0]

  return (
    <div className="py-24 bg-gradient-to-br from-neutral-50 to-primary-blue-50 min-h-screen relative overflow-hidden">
      <SEO 
        title={`${initiative.name} - MEMS D-AMP Initiative`}
        description={initiative.description}
        keywords={`${initiative.name}, MEMS initiatives, ${initiative.subgroups.join(', ')}`}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow-400/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Button */}
        <Link 
          to="/initiatives"
          className="inline-flex items-center gap-2 text-primary-blue-600 hover:text-primary-blue-700 font-semibold mb-8 group animate-slide-up"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Initiatives
        </Link>

        {/* Main Card */}
        <div className="glass-card rounded-3xl shadow-2xl overflow-hidden animate-slide-up" style={{animationDelay: '0.1s'}}>
          {/* Initiative Image */}
          <div className="relative h-96 overflow-hidden">
            <img 
              src={initiative.photo} 
              alt={initiative.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{initiative.name}</h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-10">
            {/* Subgroups Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                <svg className="w-7 h-7 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Subgroups Involved
              </h2>
              <div className="flex flex-wrap gap-3">
                {initiative.subgroups.map((subgroup, idx) => (
                  <div 
                    key={idx}
                    className="px-6 py-3 bg-gradient-to-br from-primary-blue-500 to-primary-blue-600 text-white rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {subgroup}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                <svg className="w-7 h-7 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About This Initiative
              </h2>
              <p className="text-neutral-700 leading-relaxed text-lg">
                {initiative.description}
              </p>
            </div>

            {/* External Link */}
            {initiative.link && (
              <div className="mt-10 pt-8 border-t border-neutral-200">
                <a
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary-blue-600 text-white font-bold rounded-xl hover:bg-primary-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Visit Official Page
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitiativeDetail
