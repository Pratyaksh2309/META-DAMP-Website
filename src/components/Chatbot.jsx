import { useState } from 'react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I can help you with questions about MEMS D-AMP. Ask me anything!' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const websiteContext = `
    MEMS D-AMP Website - Complete Information:
    
    ABOUT: MEMS D-AMP is a comprehensive blog platform for MEMS students at IIT Bombay, featuring course reviews, internship experiences, academic guidance, and resources with a beautiful glassmorphism design.
    
    COURSES SECTION:
    Available Courses:
    - ME 101 (Engineering Mechanics) - Core, Medium difficulty, 3 credits, 1st Year 1st Sem
    - ME 102 (Engineering Graphics) - Core, Easy difficulty, 3 credits, 1st Year 1st Sem  
    - ME 201 (Thermodynamics) - Core, Hard difficulty, 4 credits, 2nd Year 1st Sem
    - CS 101 (Computer Programming) - Elective, Medium difficulty, 3 credits, 1st Year 2nd Sem
    Course filters: All, Core, Elective, Minor
    Each course has difficulty ratings (Easy/Medium/Hard), credits, semester info, and full reviews
    
    EXPERIENCES SECTION:
    Available Experiences:
    - Google Software Engineering Intern (Software, Summer 2024, Bangalore, CPI 9.2+)
    - Microsoft Research Intern (Research, Summer 2024, Hyderabad, CPI 8.5+)
    - MIT Graduate Studies (Masters, Fall 2024, Boston USA, CPI 9.5+)
    - Robotics Project at IIT Bombay (Research, Spring 2024, Mumbai, CPI 8.0+)
    Categories: Internships, Higher Studies, Projects
    Internship types: Software, Research, Consulting, Finance
    
    TRACKS SECTION:
    Available Tracks:
    - Data Science Minor (Medium difficulty, 4 semesters, courses: CS 101, CS 213, CS 419, CS 725)
    - Core MEMS Track (Hard difficulty, 8 semesters, courses: ME 201, ME 202, ME 301, ME 302)
    - Robotics Specialization (Hard difficulty, 6 semesters, courses: ME 316, EE 224, CS 101, ME 412)
    Each track has prerequisites, duration, key courses, and detailed pathways
    
    EVENTS SECTION:
    Events:
    - MEMS Orientation 2024 (Aug 15, 2024, Orientation, MEMS Department, Completed)
    - Industry Talk: Future of Manufacturing (Sep 20, 2024, Talk, Lecture Hall Complex, Completed)
    - Career Guidance Workshop (Oct 15, 2024, Workshop, MEMS Seminar Hall, Upcoming)
    Event types: Orientation, Talk, Workshop, Seminar
    
    TEAM SECTION:
    Student Team:
    - Arjun Sharma (Team Lead, 4th Year, arjun.sharma@iitb.ac.in, +91 98765 43210, Product Management/Consulting)
    - Priya Patel (Content Manager, 3rd Year, priya.patel@iitb.ac.in, +91 98765 43211, Content Strategy/EdTech)
    - Rahul Kumar (Technical Lead, 4th Year, rahul.kumar@iitb.ac.in, +91 98765 43212, Software Engineering/AI-ML)
    - Sneha Gupta (Outreach Coordinator, 2nd Year, sneha.gupta@iitb.ac.in, +91 98765 43213, Marketing/Event Management)
    
    Faculty Mentors:
    - Prof. Rajesh Khanna (Faculty Mentor, MEMS Department, rkhanna@iitb.ac.in, +91 22 2576 7001)
    - Dr. Sunita Verma (Academic Advisor, MEMS Department, sverma@iitb.ac.in, +91 22 2576 7002)
    
    SUPPORT SECTION:
    FAQs:
    - How to access course reviews: Navigate to Course Reviews section, filter by category/difficulty or search
    - Contributing experiences: Contact team members or use contact form
    - Course difficulty accuracy: Based on multiple student feedback, provides general guidelines
    - Academic guidance: Contact team members or faculty mentors, regular guidance sessions
    
    Contact Form subjects: Course Review Question, Share Experience, Technical Issue, General Inquiry, Feedback
    Office Hours: Mon-Fri 9AM-5PM, Sat 10AM-2PM, Sun Closed
    
    CONTACT INFO:
    - Email: damp.mems@iitb.ac.in
    - Location: MEMS Department, IIT Bombay
    - Website: https://mems.iitb.ac.in
    
    FEATURES:
    - Modern glassmorphism UI with beautiful glass-effect cards
    - Fully responsive mobile-first design
    - Smart search powered by Fuse.js
    - Fast navigation with React Router (SPA)
    - Interactive elements with hover effects and animations
    - Comprehensive content covering all MEMS student needs
    
    TECH STACK: React 19, Vite, Tailwind CSS, React Router DOM, Fuse.js, Liquid Glass React
    
    ANNOUNCEMENTS:
    - New course reviews added for ME 101, ME 102 and electives (2 days ago)
    - Internship experiences from summer 2024 added (1 week ago)
  `

  const getAIResponse = async (message) => {
    const API_KEY = ''
    console.log('Using API Key:', API_KEY)
    
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b:free',
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant for the MEMS D-AMP website. Answer questions based on this context: ${websiteContext}. Keep responses concise and helpful. If asked about something not related to the website, politely redirect to website topics.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      })

      if (!response.ok) throw new Error('API request failed')
      
      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error('AI API Error:', error)
      return "I'm having trouble connecting right now. You can find information about courses, experiences, tracks, events, and team on our website sections, or contact us at damp.mems@iitb.ac.in"
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    const botResponse = await getAIResponse(input)
    setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
    setIsLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) handleSend()
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-blue-500 hover:bg-primary-blue-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-primary-blue-500 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">MEMS D-AMP Assistant</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg text-sm ${
                  msg.type === 'user' 
                    ? 'bg-primary-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue-500 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="px-4 py-2 bg-primary-blue-500 text-white rounded-lg hover:bg-primary-blue-600 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot