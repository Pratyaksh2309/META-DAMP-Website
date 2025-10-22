import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const courses = [
    { id: 1, code: 'ME 101', name: 'Engineering Mechanics', category: 'core', difficulty: 'medium', credits: 3, semester: '1st Year, 1st Sem' },
    { id: 2, code: 'ME 102', name: 'Engineering Graphics', category: 'core', difficulty: 'easy', credits: 3, semester: '1st Year, 1st Sem' },
    { id: 3, code: 'ME 201', name: 'Thermodynamics', category: 'core', difficulty: 'hard', credits: 4, semester: '2nd Year, 1st Sem' },
    { id: 4, code: 'CS 101', name: 'Computer Programming', category: 'elective', difficulty: 'medium', credits: 3, semester: '1st Year, 2nd Sem' }
  ]

  const filteredCourses = activeFilter === 'all' ? courses : courses.filter(course => course.category === activeFilter)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-emerald-100 text-emerald-700'
      case 'medium': return 'bg-amber-100 text-amber-700'
      case 'hard': return 'bg-rose-100 text-rose-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-700 mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 pulse-glow"></div>
            Course Database
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 animate-slide-up">Course Reviews</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Comprehensive reviews of MEMS courses with difficulty ratings, professor insights, and prerequisites from your seniors.
          </p>
        </div>

        <SearchBar filter="courses" />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          {['all', 'core', 'elective', 'minor'].map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`stagger-animation px-8 py-4 rounded-2xl font-bold transition-all duration-500 relative overflow-hidden group ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:text-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-slate-200/50'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <span className="relative z-10">{filter.charAt(0).toUpperCase() + filter.slice(1)} Courses</span>
              {activeFilter !== filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={course.id} className="stagger-animation bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl card-hover p-10 border border-white/50 group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{course.code}</h3>
                    <p className="text-slate-600 mt-2 text-lg">{course.name}</p>
                  </div>
                  <span className={`px-4 py-2 text-sm font-bold rounded-2xl shadow-sm ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
                
                <div className="space-y-4 text-slate-600 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-semibold text-slate-800">Credits:</span>
                    <span className="ml-2">{course.credits}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="font-semibold text-slate-800">Semester:</span>
                    <span className="ml-2">{course.semester}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="font-semibold text-slate-800">Category:</span>
                    <span className="ml-2 capitalize">{course.category}</span>
                  </div>
                </div>

                <Link to={`/course/${course.id}`} className="w-full button-primary group/btn inline-flex items-center justify-center">
                  Read Full Review
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">No courses found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses