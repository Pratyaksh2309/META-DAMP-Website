export const coursesData = [
  {
    id: 1,
    code: 'ME 101',
    name: 'Engineering Mechanics',
    category: 'core',
    difficulty: 'medium',
    credits: 3,
    semester: '1st Year, 1st Sem',
    professor: 'Prof. A. Kumar',
    description: 'Introduction to statics and dynamics, force systems, equilibrium, friction, and kinematics.',
    prerequisites: 'None',
    workload: 'Moderate',
    grading: 'Relative grading',
    tags: ['mechanics', 'core', 'foundation']
  },
  {
    id: 2,
    code: 'ME 102',
    name: 'Engineering Graphics',
    category: 'core',
    difficulty: 'easy',
    credits: 3,
    semester: '1st Year, 1st Sem',
    professor: 'Prof. B. Singh',
    description: 'Technical drawing, orthographic projections, isometric views, and CAD fundamentals.',
    prerequisites: 'None',
    workload: 'Light',
    grading: 'Relative grading',
    tags: ['graphics', 'cad', 'core']
  },
  {
    id: 3,
    code: 'ME 201',
    name: 'Thermodynamics',
    category: 'core',
    difficulty: 'hard',
    credits: 4,
    semester: '2nd Year, 1st Sem',
    professor: 'Prof. C. Patel',
    description: 'Laws of thermodynamics, heat engines, refrigeration cycles, and entropy.',
    prerequisites: 'ME 101',
    workload: 'Heavy',
    grading: 'Relative grading',
    tags: ['thermodynamics', 'core', 'theory']
  },
  {
    id: 4,
    code: 'CS 101',
    name: 'Computer Programming',
    category: 'elective',
    difficulty: 'medium',
    credits: 3,
    semester: '1st Year, 2nd Sem',
    professor: 'Prof. D. Sharma',
    description: 'Introduction to programming with C++, data structures, and algorithms.',
    prerequisites: 'None',
    workload: 'Moderate',
    grading: 'Absolute grading',
    tags: ['programming', 'coding', 'elective']
  }
]

export const filterCourses = (courses, { category, difficulty, searchTerm }) => {
  return courses.filter(course => {
    const matchesCategory = !category || category === 'all' || course.category === category
    const matchesDifficulty = !difficulty || difficulty === 'all' || course.difficulty === difficulty
    const matchesSearch = !searchTerm || 
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesDifficulty && matchesSearch
  })
}
