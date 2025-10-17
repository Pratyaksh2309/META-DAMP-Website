import { useState } from 'react'

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq')

  const faqs = [
    {
      id: 1,
      question: 'How do I access course reviews?',
      answer: 'Navigate to the Course Reviews section from the main menu. You can filter courses by category, difficulty, or search for specific courses.'
    },
    {
      id: 2,
      question: 'Can I contribute my own experience?',
      answer: 'Yes! We encourage students to share their experiences. Contact us through the form below or reach out to any team member.'
    },
    {
      id: 3,
      question: 'How accurate are the course difficulty ratings?',
      answer: 'Difficulty ratings are based on feedback from multiple students who have taken the courses. They provide a general guideline but individual experiences may vary.'
    },
    {
      id: 4,
      question: 'How do I get academic guidance?',
      answer: 'You can reach out to our team members or faculty mentors listed in the Team section. We also organize regular guidance sessions.'
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-slide-up">Support</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get help, ask questions, or provide feedback. We're here to support your academic journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'faq'
                  ? 'bg-accent text-white'
                  : 'text-gray-700 hover:text-accent'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'contact'
                  ? 'bg-accent text-white'
                  : 'text-gray-700 hover:text-accent'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-md p-8 border border-gray-200 text-center">
              <h2 className="text-xl font-bold text-text-primary mb-4">Still have questions?</h2>
              <p className="text-text-secondary mb-6">
                Can't find what you're looking for? Reach out to us directly and we'll be happy to help.
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}

        {/* Contact Form Section */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-review">Course Review Question</option>
                      <option value="experience-sharing">Share Experience</option>
                      <option value="technical-issue">Technical Issue</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-text-secondary">damp.mems@iitb.ac.in</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-text-secondary">MEMS Department, IIT Bombay</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="https://mems.iitb.ac.in" className="block text-accent hover:text-accent-hover">
                      MEMS Department Website
                    </a>
                    <a href="#" className="block text-accent hover:text-accent-hover">
                      Academic Calendar
                    </a>
                    <a href="#" className="block text-accent hover:text-accent-hover">
                      Course Catalog
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Office Hours</h3>
                  <div className="space-y-2 text-text-secondary">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Support