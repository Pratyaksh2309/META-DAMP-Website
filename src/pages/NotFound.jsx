import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-blue-50 flex items-center justify-center px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-12 relative">
          <div className="text-[150px] sm:text-[200px] font-bold gradient-text-blue leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary-blue-400/20 rounded-full blur-3xl floating-animation"></div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="button-primary group/btn"
          >
            Go to Homepage
            <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-white text-primary-blue-600 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-blue-200 hover:border-primary-blue-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="glass-card-blue rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/courses" className="text-primary-blue-600 hover:text-primary-blue-700 font-semibold transition-colors">
              Course Reviews
            </Link>
            <Link to="/experiences" className="text-primary-blue-600 hover:text-primary-blue-700 font-semibold transition-colors">
              Experiences
            </Link>
            <Link to="/tracks" className="text-primary-blue-600 hover:text-primary-blue-700 font-semibold transition-colors">
              Course Tracks
            </Link>
            <Link to="/team" className="text-primary-blue-600 hover:text-primary-blue-700 font-semibold transition-colors">
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
