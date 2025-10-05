import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Course Reviews' },
    { path: '/tracks', label: 'Course Tracks' },
    { path: '/experiences', label: 'Experiences' },
    { path: '/events', label: 'Events' },
    { path: '/team', label: 'Team' },
    { path: '/support', label: 'Support' }
  ]

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-blue-600 to-primary-blue-700 flex items-center justify-center shadow-glow group-hover:scale-105 group-hover:shadow-glow-yellow transition-all duration-300">
                <img src="/Final DAMP logo (Without text).png" alt="MEMS D-AMP Logo" className="w-7 h-7 object-contain"/>
              </div>
              <span className="text-2xl font-bold gradient-text-blue">MEMS D-AMP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 text-white shadow-glow'
                      : 'text-neutral-700 hover:text-primary-blue-600 hover:bg-primary-blue-50/80'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname !== item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-500 to-accent-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl text-neutral-700 hover:text-primary-blue-600 hover:bg-primary-blue-50 focus:outline-none transition-all duration-300"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {!mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-6 pt-6 pb-8 space-y-3 glass-nav border-t border-primary-blue-200/50 shadow-2xl">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 stagger-animation ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-primary-blue-500 to-primary-blue-600 text-white shadow-glow'
                    : 'text-neutral-700 hover:bg-primary-blue-50 hover:text-primary-blue-600'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation