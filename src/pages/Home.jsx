import { Link } from 'react-router-dom'
// import LiquidGlass from 'liquid-glass-react'
import LandingPage from '../components/LandingPage'


const Home = () => {
  return (
    <>
      {/* Hero Section */}

      <LandingPage />

      {/* Featured Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-primary-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text-blue mb-6">Featured Content</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Discover comprehensive resources tailored for MEMS students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Course Review */}
            <div className="stagger-animation glass-card-blue rounded-3xl shadow-xl card-hover p-10 group" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-500 to-primary-blue-600 rounded-3xl flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:shadow-glow-yellow transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-5 text-neutral-900">Course Reviews</h3>
              </div>
              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">Comprehensive reviews of MEMS courses with difficulty ratings, professor insights, and prerequisites.</p>
              <Link to="/courses" className="inline-flex items-center text-primary-blue-600 hover:text-primary-blue-700 font-bold text-lg group/link">
                Explore Courses 
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Internship Experiences */}
            <div className="stagger-animation glass-card-yellow rounded-3xl shadow-xl card-hover p-10 group" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-yellow-500 to-accent-yellow-600 rounded-3xl flex items-center justify-center shadow-glow-yellow group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-5 text-neutral-900">Internship Experiences</h3>
              </div>
              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">Real stories from MEMS students about their internship experiences across different domains.</p>
              <Link to="/experiences" className="inline-flex items-center text-accent-yellow-700 hover:text-accent-yellow-800 font-bold text-lg group/link">
                Read Experiences 
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Course Tracks */}
            <div className="stagger-animation glass-card rounded-3xl shadow-xl card-hover p-10 group" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-5 text-neutral-900">Course Tracks</h3>
              </div>
              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">Visual guides for popular course combinations like DS minor, core tracks, and more.</p>
              <Link to="/tracks" className="inline-flex items-center text-neutral-700 hover:text-neutral-800 font-bold text-lg group/link">
                View Tracks 
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text-blue mb-6">Quick Access</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Navigate to your desired section with ease</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Link to="/courses" className="stagger-animation group relative" style={{animationDelay: '0.1s'}}>
              <div className="glass-card-blue rounded-3xl p-10 text-center card-hover">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue-500 to-primary-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow group-hover:shadow-glow-yellow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-neutral-900 text-xl">Courses</h3>
              </div>
            </Link>

            <Link to="/experiences" className="stagger-animation group relative" style={{animationDelay: '0.2s'}}>
              <div className="glass-card-yellow rounded-3xl p-10 text-center card-hover">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-yellow-500 to-accent-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow-yellow group-hover:shadow-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-neutral-900 text-xl">Experiences</h3>
              </div>
            </Link>

            <Link to="/tracks" className="stagger-animation group relative" style={{animationDelay: '0.3s'}}>
              <div className="glass-card rounded-3xl p-10 text-center card-hover">
                <div className="w-20 h-20 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-neutral-900 text-xl">Tracks</h3>
              </div>
            </Link>

            <Link to="/team" className="stagger-animation group relative" style={{animationDelay: '0.4s'}}>
              <div className="glass-card rounded-3xl p-10 text-center card-hover">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue-400 to-accent-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-glow-yellow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-neutral-900 text-xl">Team</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary-blue-500 rounded-full blur-3xl floating-animation"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-yellow-500 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Latest Announcements</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Stay updated with the latest news and updates</p>
          </div>
          
          <div className="space-y-8">
            <div className="stagger-animation glass-card rounded-3xl shadow-2xl p-10 card-hover group" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-500 to-primary-blue-600 rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:shadow-glow-yellow transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-white mb-3">New Course Reviews Added</h3>
                  <p className="text-white/80 mb-4 leading-relaxed text-lg">We've added comprehensive reviews for ME 101, ME 102, and several elective courses. Check them out!</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue-400 rounded-full mr-3 pulse-glow"></div>
                    <p className="text-sm text-primary-blue-400 font-semibold">Posted 2 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="stagger-animation glass-card rounded-3xl shadow-2xl p-10 card-hover group" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-yellow-500 to-accent-yellow-600 rounded-2xl flex items-center justify-center shadow-glow-yellow group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Internship Season Updates</h3>
                  <p className="text-white/80 mb-4 leading-relaxed text-lg">New internship experiences from summer 2024 have been added. Learn from your seniors' experiences!</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-yellow-400 rounded-full mr-3 pulse-glow-yellow"></div>
                    <p className="text-sm text-accent-yellow-400 font-semibold">Posted 1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home