import ProfileCard from "../components/ProfileCard"
import "./Team.css"
import { dampCoordinators, dampMentors } from "../data/team"

const Team = () => {

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-neutral-50 to-primary-blue-50 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow-400/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-blue mb-6 sm:mb-8 animate-slide-up">Meet Our Team</h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4" style={{animationDelay: '0.3s'}}>
            The dedicated MEMS students working together to support your academic journey.
          </p>
        </div>

        {/* DAMP Coordinators */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold gradient-text-blue mb-12 text-center animate-slide-up">DAMP Coordinators</h2>
          <div className="team-grid">
            {dampCoordinators.map((coordinator, index) => (
              <div key={coordinator.id} className="team-card stagger-animation" style={{animationDelay: `${index * 0.1}s`}}>
                <ProfileCard
                  name={coordinator.name}
                  title="DAMP Coordinator"
                  handle={coordinator.year}
                  status=""
                  contactText="Contact"
                  avatarUrl={coordinator.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(coordinator.name)}&background=3b82f6&color=fff&size=300`}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  bio={coordinator.bio}
                  careerInterests={coordinator.careerInterests}
                  email={coordinator.email}
                  phone={coordinator.phone}
                  onContactClick={() => {
                    const contactInfo = `📧 ${coordinator.email}\n📱 ${coordinator.phone}`;
                    alert(contactInfo);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 5th Year DAMP Mentors */}
        {dampMentors.fifthYear.length > 0 && (
          <div className="mb-20">
            <h2 className="text-4xl font-bold gradient-text-blue mb-12 text-center">DAMP Mentors - 5th Year</h2>
            <div className="team-grid">
              {dampMentors.fifthYear.map((mentor, index) => (
                <div key={mentor.id} className="team-card stagger-animation" style={{animationDelay: `${index * 0.1}s`}}>
                  <ProfileCard
                    name={mentor.name}
                    title="DAMP Mentor"
                    handle={mentor.year}
                    status=""
                    contactText="Contact"
                    avatarUrl={mentor.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=3b82f6&color=fff&size=300`}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    bio={mentor.bio}
                    careerInterests={mentor.careerInterests}
                    email={mentor.email}
                    phone={mentor.phone}
                    onContactClick={() => {
                      const contactInfo = `📧 ${mentor.email}\n📱 ${mentor.phone}`;
                      alert(contactInfo);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4th Year DAMP Mentors */}
        {dampMentors.fourthYear.length > 0 && (
          <div className="mb-20">
            <h2 className="text-4xl font-bold gradient-text-blue mb-12 text-center">DAMP Mentors - 4th Year</h2>
            <div className="team-grid">
              {dampMentors.fourthYear.map((mentor, index) => (
                <div key={mentor.id} className="team-card stagger-animation" style={{animationDelay: `${index * 0.1}s`}}>
                  <ProfileCard
                    name={mentor.name}
                    title="DAMP Mentor"
                    handle={mentor.year}
                    status=""
                    contactText="Contact"
                    avatarUrl={mentor.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=3b82f6&color=fff&size=300`}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    bio={mentor.bio}
                    careerInterests={mentor.careerInterests}
                    email={mentor.email}
                    phone={mentor.phone}
                    onContactClick={() => {
                      const contactInfo = `📧 ${mentor.email}\n📱 ${mentor.phone}`;
                      alert(contactInfo);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3rd Year DAMP Mentors */}
        {dampMentors.thirdYear.length > 0 && (
          <div className="mb-20">
            <h2 className="text-4xl font-bold gradient-text-blue mb-12 text-center">DAMP Mentors - 3rd Year</h2>
            <div className="team-grid">
              {dampMentors.thirdYear.map((mentor, index) => (
                <div key={mentor.id} className="team-card stagger-animation" style={{animationDelay: `${index * 0.1}s`}}>
                  <ProfileCard
                    name={mentor.name}
                    title="DAMP Mentor"
                    handle={mentor.year}
                    status=""
                    contactText="Contact"
                    avatarUrl={mentor.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=3b82f6&color=fff&size=300`}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    bio={mentor.bio}
                    careerInterests={mentor.careerInterests}
                    email={mentor.email}
                    phone={mentor.phone}
                    onContactClick={() => {
                      const contactInfo = `📧 ${mentor.email}\n📱 ${mentor.phone}`;
                      alert(contactInfo);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}



        {/* Join Us Section */}
        {/* <div className="glass-card rounded-3xl shadow-xl p-12">
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
        </div> */}
      </div>
    </div>
  )
}

export default Team