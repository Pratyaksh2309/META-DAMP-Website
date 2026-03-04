import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-50 to-primary-blue-50 border-t border-primary-blue-200/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #eab308 0%, transparent 50%)'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row lg:justify-between">
        {/* Brand */}
          <div className="space-y-3 w-full lg:w-[40%] mb-10 lg:mb-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12  rounded-2xl flex items-center justify-center shadow-glow">
                <img src="/Final DAMP logo (Without text).png" alt="MEMS D-AMP Logo" className="w-6 h-6 object-contain"/>
              </div>
              <span className="text-2xl font-bold gradient-text-blue">MEMS D-AMP</span>
            </div>
            <p className="text-neutral-600 text-base leading-relaxed">
              Supporting MEMS students with course reviews, internship experiences, and academic guidance at IIT Bombay.
            </p>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-neutral-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-neutral-600 hover:text-primary-blue-600 transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block">Course Reviews</Link></li>
              <li><Link to="/experiences" className="text-neutral-600 hover:text-accent-yellow-600 transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block">Experiences</Link></li>
              <li><Link to="/tracks" className="text-neutral-600 hover:text-primary-blue-600 transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block">Course Tracks</Link></li>
              <li><Link to="/team" className="text-neutral-600 hover:text-accent-yellow-600 transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block">Meet the Team</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-neutral-900">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                
                <span className="text-neutral-600 font-medium">memsdampc2025@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                
                <span className="text-neutral-600 font-medium">IIT Bombay, Mumbai</span>
              </div>
              <div className="flex items-center space-x-3">
                
                <a href="https://www.iitb.ac.in/mems/en" target='_blank' className="text-neutral-600 hover:text-primary-blue-600 transition-colors font-medium">MEMS Department</a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div className="px-5 py-2 border-t border-primary-blue-200/30 relative z-10">
          <div className="flex flex-col justify-center items-center md:gap-2">
            <p className="text-neutral-600 font-medium md:text-base text-sm">
              © 2025-56 MEMS D-AMP. Built with <span className="text-red-500 animate-bounce-gentle">❤️</span> for MEMS students.
            </p>
            <div className="flex space-x-4 mt-6 md:mt-0 relative z-10">
              <a href="https://www.instagram.com/mems_damp.iitb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-blue-100 hover:bg-primary-blue-200 rounded-xl flex items-center justify-center text-primary-blue-600 hover:text-primary-blue-700 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.iitb.ac.in/mems/en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent-yellow-100 hover:bg-accent-yellow-200 rounded-xl flex items-center justify-center text-accent-yellow-600 hover:text-accent-yellow-700 transition-all duration-300 hover:scale-110">
                <span className="sr-only">MEMS Website</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer