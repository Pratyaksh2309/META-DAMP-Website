const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Arjun Sharma',
      role: 'Team Lead',
      year: '4th Year',
      email: 'arjun.sharma@iitb.ac.in',
      phone: '+91 98765 43210',
      linkedin: '#',
      image: '/api/placeholder/150/150',
      bio: 'Leading the D-AMP initiative to help MEMS students with academic guidance and career planning. Passionate about creating impactful solutions for student success.'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Content Manager',
      year: '3rd Year',
      email: 'priya.patel@iitb.ac.in',
      phone: '+91 98765 43211',
      linkedin: '#',
      image: '/api/placeholder/150/150',
      bio: 'Managing course reviews and experience sharing content for the MEMS community. Dedicated to helping students make informed academic decisions.'
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      role: 'Technical Lead',
      year: '4th Year',
      email: 'rahul.kumar@iitb.ac.in',
      phone: '+91 98765 43212',
      linkedin: '#',
      image: '/api/placeholder/150/150',
      bio: 'Developing and maintaining the D-AMP platform and technical infrastructure. Focused on creating seamless user experiences for students.'
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      role: 'Outreach Coordinator',
      year: '2nd Year',
      email: 'sneha.gupta@iitb.ac.in',
      phone: '+91 98765 43213',
      linkedin: '#',
      image: '/api/placeholder/150/150',
      bio: 'Coordinating with students and organizing events for the MEMS community. Building bridges between students and opportunities.'
    }
  ]

  const mentors = [
    {
      id: 1,
      name: 'Prof. Rajesh Khanna',
      role: 'Faculty Mentor',
      department: 'MEMS Department',
      email: 'rkhanna@iitb.ac.in',
      phone: '+91 22 2576 7001',
      image: '/api/placeholder/150/150',
      bio: 'Guiding the D-AMP initiative with 15+ years of experience in mechanical engineering education and research.'
    },
    {
      id: 2,
      name: 'Dr. Sunita Verma',
      role: 'Academic Advisor',
      department: 'MEMS Department',
      email: 'sverma@iitb.ac.in',
      phone: '+91 22 2576 7002',
      image: '/api/placeholder/150/150',
      bio: 'Supporting student academic growth with expertise in curriculum development and career guidance.'
    }
  ]

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
            Our Amazing Team
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-slide-up">Meet Our Team</h1>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            The dedicated MEMS students and faculty working together to support your academic journey.
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold gradient-text-blue mb-12 text-center">Student Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="stagger-animation" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="glass-card-blue rounded-3xl shadow-xl p-6 h-[420px] flex flex-col card-hover">
                  {/* Header with Avatar */}
                  <div className="flex flex-col items-center mb-6">
                    {/* Flippable Avatar */}
                    <div className="relative w-20 h-20 mb-4 flip-container group">
                      <div className="flip-inner">
                        {/* Front - Avatar */}
                        <div className="flip-front">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary-blue-500 to-primary-blue-600 rounded-full flex items-center justify-center shadow-glow cursor-pointer">
                            <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                          </div>
                        </div>
                        
                        {/* Back - Contact Info */}
                        <div className="flip-back">
                          <div className="w-20 h-20 bg-gradient-to-br from-accent-yellow-500 to-accent-yellow-600 rounded-full flex items-center justify-center shadow-glow-yellow cursor-pointer">
                            <div className="flex space-x-2">
                              <a href={`mailto:${member.email}`} className="text-white hover:text-yellow-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                              </a>
                              <a href={`tel:${member.phone}`} className="text-white hover:text-yellow-200 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name and Role */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
                      <p className="text-primary-blue-600 font-semibold text-sm mb-1">{member.role}</p>
                      <p className="text-neutral-500 text-xs">{member.year}</p>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="flex-1 mb-4">
                    <p className="text-neutral-600 text-sm leading-relaxed text-center">{member.bio}</p>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="mt-auto">
                    <div className="text-xs text-neutral-500 bg-neutral-100 rounded-xl p-3 space-y-2">
                      <div className="flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent-yellow-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Mentors */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold gradient-text-blue mb-12 text-center">Faculty Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {mentors.map((mentor, index) => (
              <div key={mentor.id} className="stagger-animation" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="glass-card rounded-3xl shadow-xl p-8 h-[480px] flex flex-col card-hover">
                  {/* Header with Avatar */}
                  <div className="flex flex-col items-center mb-6">
                    {/* Flippable Avatar */}
                    <div className="relative w-28 h-28 mb-4 flip-container group">
                      <div className="flip-inner">
                        {/* Front - Avatar */}
                        <div className="flip-front">
                          <div className="w-28 h-28 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                            <span className="text-3xl font-bold text-white">{mentor.name.split(' ')[1].charAt(0)}</span>
                          </div>
                        </div>
                        
                        {/* Back - Contact Info */}
                        <div className="flip-back">
                          <div className="w-28 h-28 bg-gradient-to-br from-accent-yellow-500 to-accent-yellow-600 rounded-full flex items-center justify-center shadow-glow-yellow cursor-pointer">
                            <div className="flex space-x-3">
                              <a href={`mailto:${mentor.email}`} className="text-white hover:text-yellow-200 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                              </a>
                              <a href={`tel:${mentor.phone}`} className="text-white hover:text-yellow-200 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name and Role */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{mentor.name}</h3>
                      <p className="text-primary-blue-600 font-semibold mb-1">{mentor.role}</p>
                      <p className="text-neutral-500 text-sm">{mentor.department}</p>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="flex-1 mb-6">
                    <p className="text-neutral-600 leading-relaxed text-center">{mentor.bio}</p>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="mt-auto">
                    <div className="text-sm text-neutral-500 bg-neutral-100 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="truncate">{mentor.email}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent-yellow-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>{mentor.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="glass-card rounded-3xl shadow-xl p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text-blue mb-6">Join Our Team</h2>
            <p className="text-neutral-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Interested in contributing to the MEMS D-AMP community? We're always looking for passionate students to help their peers succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="button-primary group inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                Apply to Join
              </button>
              <button className="px-8 py-4 border-2 border-accent-yellow-400 text-accent-yellow-700 hover:bg-accent-yellow-400 hover:text-white rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team