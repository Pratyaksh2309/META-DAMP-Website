export const experiencesData = [
  {
    id: 1,
    title: 'Google Software Engineering Intern',
    category: 'internship',
    type: 'software',
    company: 'Google',
    duration: 'Summer 2024',
    location: 'Bangalore',
    cpi: '9.2+',
    studentName: 'Rahul Kumar',
    year: '3rd Year',
    description: 'Worked on backend infrastructure for Google Cloud Platform.',
    skills: ['Python', 'Go', 'Cloud Computing', 'Microservices'],
    learnings: 'Learned about large-scale distributed systems and gained experience with production-level code.',
    tips: 'Focus on DSA and system design. Build projects that solve real problems.',
    tags: ['software', 'tech', 'google']
  },
  {
    id: 2,
    title: 'Microsoft Research Intern',
    category: 'internship',
    type: 'research',
    company: 'Microsoft',
    duration: 'Summer 2024',
    location: 'Hyderabad',
    cpi: '8.5+',
    studentName: 'Priya Sharma',
    year: '4th Year',
    description: 'Research on AI/ML applications in cloud services.',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Research'],
    learnings: 'Gained experience in research methodology and publishing papers.',
    tips: 'Read research papers and work on implementing them. Reach out to professors.',
    tags: ['research', 'ai', 'microsoft']
  },
  {
    id: 3,
    title: 'MIT Graduate Studies',
    category: 'higher-studies',
    type: 'masters',
    company: 'MIT',
    duration: 'Fall 2024',
    location: 'Boston, USA',
    cpi: '9.5+',
    studentName: 'Amit Patel',
    year: '4th Year',
    description: 'Pursuing MS in Mechanical Engineering with focus on robotics.',
    skills: ['Research', 'Robotics', 'Controls', 'CAD'],
    learnings: 'Understanding of graduate school application process and research opportunities.',
    tips: 'Start preparing early, build relationships with professors, focus on research experience.',
    tags: ['higher-studies', 'masters', 'mit']
  },
  {
    id: 4,
    title: 'Robotics Project at IIT Bombay',
    category: 'projects',
    type: 'research',
    company: 'IIT Bombay',
    duration: 'Spring 2024',
    location: 'Mumbai',
    cpi: '8.0+',
    studentName: 'Neha Singh',
    year: '2nd Year',
    description: 'Developed an autonomous navigation system for indoor robots.',
    skills: ['ROS', 'Python', 'Computer Vision', 'SLAM'],
    learnings: 'Hands-on experience with robotics and real-world problem solving.',
    tips: 'Join research groups early, be proactive, and don\'t be afraid to ask questions.',
    tags: ['robotics', 'research', 'projects']
  }
]

export const filterExperiences = (experiences, { category, type, searchTerm }) => {
  return experiences.filter(exp => {
    const matchesCategory = !category || category === 'all' || exp.category === category
    const matchesType = !type || type === 'all' || exp.type === type
    const matchesSearch = !searchTerm || 
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesType && matchesSearch
  })
}
