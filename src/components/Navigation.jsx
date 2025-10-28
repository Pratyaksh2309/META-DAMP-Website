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
            <Link to="/" className="flex items-center space-x-1 group">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-200">
                <img
                  src="/Final DAMP logo (Without text).png"
                  alt="MEMS D-AMP Logo"
                  className="w-11 h-11 object-contain"
                />
              </div>
              <span className="text-2xl font-bold gradient-text-blue">MEMS D-AMP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-7">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      relative text-md font-semibold
                      transition-all duration-300 group
                      ${isActive ? 'text-primary-blue-600' : 'text-neutral-700 hover:text-primary-blue-600'}
                    `}
                  >
                    {item.label}

                    {/* Gradient underline for active link */}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#cde4ff] to-[#4da3ff] rounded-full"></span>
                    )}

                    {/* Hover underline animation */}
                    {!isActive && (
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#cde4ff] to-[#4da3ff] rounded-full transition-all duration-300 group-hover:w-full"></span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl text-neutral-700 hover:text-primary-blue-600 focus:outline-none transition-all duration-300"
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
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-4 text-base font-semibold relative transition-all duration-300 ${
                    isActive
                      ? 'text-primary-blue-600'
                      : 'text-neutral-700 hover:text-primary-blue-600'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
