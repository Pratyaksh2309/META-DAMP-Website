import { link } from "framer-motion/client"

export const coursesData = [
  {
    id: 'mm329',
    code: 'MM329',
    name: 'Diffusion and Phase Transformations',
    category: 'core',
    difficulty: 'easy',
    credits: null,
    semester: '2025 Autumn',
    professor: 'ASG',
    rating: 4.5,
    totalReviews: 1,
    description: 'Core course covering TTT diagrams, glass transition, phase transformations with focus on class activities and practical applications.',
    prerequisites: ['None'],
    topics: [
      'TTT diagrams',
      'Glass transition',
      'Phase transformations',
      'Units in numerical problems'
    ],
    reviews: [
      {
        id: 1,
        author: 'Anonymous',
        year: '3rd (Batch of \'27)',
        semester: '2025 Autumn',
        rating: 5,
        content: 'Overall experience was good and chill. Very easy and scoring course. Focus on class activities and notes and pyq is a must!',
        whyTakeCourse: 'Core course. Very easy and scoring. Focus on class activities and notes and pyq is a must!',
        attendance: 'Marks on class activities and sometimes attendance according to prof\'s mood',
        teachingStyle: 'Good',
        assignments: 'Okish',
        grading: 'Relative',
        examPattern: 'PYQs',
        slidesQuality: 5,
        resources: ['PYQs'],
        pros: ['Easy course', 'Scoring', 'Good grading'],
        cons: ['TA strictly cuts marks if units are incorrect or not written']
      }
    ],
    tips: [
      'Focus on class activities and take notes',
      'PYQs are a must - practice them thoroughly',
      'Always write correct units in numericals - TAs are strict about this',
      'Overall chill course if you stay consistent'
    ],
    resources: [
      { name: 'Previous Year Questions', type: 'pyq' , link: 'https://drive.google.com/drive/folders/17KxqVDfJUbWeEMeMUpBnMmS8H0_y3xfv'}
    ],
    grading: 'Relative',
    tags: ['materials', 'core', 'easy', 'scoring']
  },
  {
    id: 'mm331',
    code: 'MM331',
    name: 'Mechanical Behaviour of Materials',
    category: 'core',
    difficulty: 'medium',
    credits: null,
    semester: '2025 Autumn',
    professor: 'Prof. Prasad, Prof. Abhinandan, Prof. Narsimhan',
    rating: 4,
    totalReviews: 1,
    description: 'Core course taught by three professors covering mechanical properties and behavior of materials with varied teaching approaches.',
    prerequisites: ['None'],
    topics: [
      'Mechanical properties of materials',
      'Material behavior under stress',
      'Advanced material characterization'
    ],
    reviews: [
      {
        id: 1,
        author: 'Anonymous',
        year: '3rd (Batch of \'27)',
        semester: '2025 Autumn',
        rating: 4,
        content: 'It was good if you understand the content well and also scoring 9 is not difficult if you score good in midsem and endsem. Also endsem was relatively easier as compared to midsem so grading was good only.',
        whyTakeCourse: 'Core course',
        attendance: 'Safe and manual',
        teachingStyle: 'Good. Prasad sir asks from slides only and Abhinandan sir content requires deeper understanding whereas Narsimhan Sir\'s content was easy doable from slides and ours was openbook',
        assignments: 'NA',
        grading: 'Relative',
        examPattern: 'Prasad sir asks from slides only. Abhinandan sir content requires deeper understanding. Narsimhan Sir\'s content was easy doable from slides. Exam was openbook.',
        slidesQuality: 5,
        resources: ['Slides'],
        pros: ['Good grading', 'Endsem easier than midsem', 'Open book exam'],
        cons: ['Varied difficulty across different professors\' content']
      }
    ],
    tips: [
      'Understand the content well - don\'t just memorize',
      'Score well in both midsem and endsem for a 9 grade',
      'Prasad sir\'s portion - focus on slides',
      'Abhinandan sir\'s portion needs deeper understanding',
      'Narsimhan sir\'s portion is easier, doable from slides',
      'Utilize the open book format effectively'
    ],
    resources: [
      { name: 'Course Slides', type: 'slides' ,link: 'https://drive.google.com/drive/folders/1pTiHQGej1NfVd7rDJGaBdQL-9I2_tDZI' }
    ],
    grading: 'Relative',
    tags: ['materials', 'core', 'mechanical-behavior']
  },
  {
    id: 'ph565',
    code: 'PH 565',
    name: 'Semiconductor Physics',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2025 Autumn',
    professor: 'Prof. Suddhasatta Mahapatra',
    rating: 5,
    totalReviews: 1,
    description: 'Advanced course on core physics behind semiconductors, nanoscale materials, and condensed matter physics. Highly recommended for those interested in fundamental physics of modern technology.',
    prerequisites: ['Quantum Mechanics at PH 110 level', 'Calculus at MA105 level'],
    topics: [
      'Introduction to semiconductors',
      'Crystal structure and Reciprocal Lattice',
      'Bloch Theorem and Bloch Electrons',
      'Nearly Free Electron Model, Density of States and Band Structures',
      'Concept of Holes and Electrons',
      'Intrinsic and Extrinsic Charge Carriers',
      'Cyclotron Resonance and Effective Mass Theory',
      'Electronic Transport Properties',
      'Phonons and Electron Phonon Coupling',
      'Absorption Phenomenon'
    ],
    reviews: [
      {
        id: 1,
        author: 'Bharat Arora',
        year: '3rd (Batch of \'27)',
        semester: '2025 Autumn',
        rating: 5,
        content: 'I loved the course very much, probably one of most interesting course I\'ve done in my college academics. Most of the time attending the classes never felt monotonous because the content and the prof. were both very amazing. Sir was very engaging with students and many possibilities of different concepts were discussed in the class. I would really love the students from MEMS to maybe try exploring some physics courses that has a overlap with our department that would really open a lot of career opportunities in the core sector.',
        whyTakeCourse: 'I was very much interested in Condensed Matter Physics. Semiconductors are one of the key areas of Condensed Matter, so I decided to take the course to explore that area at it\'s core.',
        attendance: '80% as per the institute norms',
        teachingStyle: 'Suddho sir is one of the best professors you would find in Physics department or even the entire college. He mainly teaches on board explaining each and every equation.',
        assignments: 'There were 3 tutorials held, where sir would solve each question of every concept taught in the course.',
        grading: 'Relative - Very nice grading. Out of 54 students: AA-4, AB-19, BB-22, BC-5, CC-2, CD-1, FR-1',
        examPattern: 'The exams were open notes and laptops on flight mode were allowed. Questions were mainly conceptual.',
        slidesQuality: 5,
        resources: ['Prof\'s handwritten notes on Google Drive', 'Basic Semiconductor Physics - Hamaguchi'],
        pros: ['Excellent professor', 'Engaging lectures', 'Good grading', 'Open notes exam'],
        cons: ['Requires strong physics background']
      }
    ],
    tips: [
      'Attend all classes - they are very engaging',
      'Refer to uploaded notes diligently',
      'Organize your notes well for open notes exams',
      'Focus on understanding concepts deeply',
      'Practice tutorial problems'
    ],
    resources: [
      { name: 'Professor\'s Notes (Google Drive)', link: 'https://drive.google.com/drive/folders/14Zfcm8t8kKuOA9Aj1hTytphzdDYH1wEh', type: 'notes' },
      { name: 'Basic Semiconductor Physics - Hamaguchi', type: 'book' }
    ],
    grading: 'Relative - Quiz 1: 15%, Midsem: 30%, Quiz 2: 15%, Endsem: 40%',
    tags: ['physics', 'semiconductors', 'elective', 'highly-recommended']
  },
  {
    id: 'mm6002',
    code: 'MM6002',
    name: 'Principles and Applications of Ferroelectric and Piezoelectric Materials',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2025 Spring',
    professor: 'Prof. Abhijeet Sangle',
    rating: 5,
    totalReviews: 1,
    description: 'Department elective covering piezoelectrics and ferroelectrics theory and their applications. One of the best DEs available in MEMS with excellent teaching and lenient grading.',
    prerequisites: ['MM219 (soft prerequisite)'],
    topics: [
      'Piezoelectrics theory',
      'Ferroelectrics theory',
      'Applications of piezoelectric materials',
      'Applications of ferroelectric materials'
    ],
    reviews: [
      {
        id: 1,
        author: 'Anuj Waje',
        year: '4th (Batch of \'26)',
        semester: '2025 Spring',
        rating: 5,
        content: '5/5 experience. The prof is very considerate and good, teaches very well and the content is also not that tough. In short one of the best department electives available in MEMS!',
        whyTakeCourse: 'The Professor teaches concepts very well. Had a good experience with him during MM219.',
        attendance: 'Relaxed to no attendance after few classes',
        teachingStyle: 'The prof usually wrote on the digital screen and the pdf was then shared through moodle.',
        assignments: '1 Assignment (15%) - Comment on a research paper',
        grading: 'Absolute for >84.5 AA, else relative. Grading is lenient.',
        examPattern: 'Follow the slides, they are comprehensive',
        slidesQuality: 5,
        resources: ['Course slides are more than sufficient'],
        pros: ['Excellent professor', 'Easy content', 'Lenient grading', 'Relaxed attendance'],
        cons: ['Slightly slow paced lectures']
      }
    ],
    tips: [
      'Follow the slides - they are comprehensive',
      'Even if you miss classes, slides will cover you',
      'Complete the research paper assignment thoughtfully',
      'Grading is lenient - scoring well is achievable'
    ],
    resources: [
      { name: 'Course Slides', type: 'slides' }
    ],
    grading: 'Absolute for >84.5 AA, else relative. Endsem: 40%, Assignment: 15%',
    tags: ['materials', 'elective', 'ferroelectrics', 'easy', 'highly-recommended']
  },
  {
    id: 'de335',
    code: 'DE335',
    name: 'Handloom Weaving for Beginners',
    category: 'hasmed',
    difficulty: 'easy',
    credits: null,
    semester: '2025 Autumn',
    professor: 'Prof. Latha Tummuru',
    rating: 5,
    totalReviews: 1,
    description: 'Hands-on HASMED elective teaching the traditional art of handloom weaving. Extremely chill, practical course with excellent grading.',
    prerequisites: ['No prerequisites, only pure enthusiasm!'],
    topics: [
      'Importance of Handloom Weaving',
      'Handloom Weaving traditions',
      'Weaver\'s Knot',
      'Warping',
      'Drafting',
      'Denting',
      'Point and Simple weave'
    ],
    reviews: [
      {
        id: 1,
        author: 'Anuj Waje',
        year: '4th (Batch of \'26)',
        semester: '2025 Autumn',
        rating: 5,
        content: 'One of the best courses I have ever taken in insti. Pretty laid back, chill, do it at your own pace course with friendly TAs and at the end of the day a new skill you\'ll learn!',
        whyTakeCourse: 'Grading + stress buster during 7th Sem',
        attendance: 'Compulsory - without attending you cannot complete',
        teachingStyle: 'Excellent Professor and TAs are very patient',
        assignments: 'Weave 3 different types of cloth for endsem',
        grading: 'Almost 95% get AA or AB!',
        examPattern: 'Endsem viva to explain the cloth you made - very chill',
        slidesQuality: 5,
        resources: ['Pinterest for inspiration'],
        pros: ['Excellent grading', 'Learn new skill', 'Friendly TAs', 'Stress buster'],
        cons: ['Compulsory attendance']
      }
    ],
    tips: [
      'Attend all sessions - work is hands-on',
      'Use Pinterest for project inspiration',
      'Work can be finished in class timings',
      'Quality carries no weightage - focus on learning',
      'Attend 90%+ classes and submit on time for AA'
    ],
    resources: [
      { name: 'Pinterest', type: 'inspiration' }
    ],
    grading: 'Almost 95% get AA or AB. Attendance >90% + timely submission = AA',
    tags: ['hasmed', 'hands-on', 'weaving', 'easy', 'highly-recommended']
  },
  {
    id: 'mm618',
    code: 'MM618',
    name: 'Optoelectronic Properties, Materials and Devices',
    category: 'elective',
    difficulty: 'hard',
    credits: null,
    semester: '2025 Spring/Autumn',
    professor: 'Prof. Tanushree Choudhury',
    rating: 3.5,
    totalReviews: 2,
    description: 'Advanced semiconductor course covering photodetectors, LEDs, absorption spectra, and band-gap engineering. Good grading but heavy workload.',
    prerequisites: ['MM333 (hard prerequisite)'],
    topics: [
      'Photodetectors',
      'LEDs',
      'Absorption spectra',
      'Band-gap Engineering',
      'E-k diagrams',
      'Photoelectric devices'
    ],
    reviews: [
      {
        id: 1,
        author: 'Anuj Waje',
        year: '4th (Batch of \'26)',
        semester: '2025 Spring',
        rating: 2,
        content: 'Not a good experience. Too many assignments and project deadlines - learning was forgotten in the chaos.',
        whyTakeCourse: 'Professor taught MM333 very well',
        attendance: 'Some weightage given to class participation',
        teachingStyle: 'Could use more visual pedagogy instead of just digi-screen',
        assignments: '10% class participation, varied assignments, 30% capstone project',
        grading: '40-45% get AA or AB',
        examPattern: 'Pure conceptual, calculation intensive',
        slidesQuality: 2,
        resources: ['Semiconductor Physics and Devices - Donald A Neaman'],
        pros: ['Good grading'],
        cons: ['Heavy workload', 'Too many deadlines', 'Calculation intensive']
      },
      {
        id: 2,
        author: 'Harsh Verma',
        year: '4th (Batch of \'26)',
        semester: '2025 Autumn',
        rating: 4,
        content: 'Great course for semiconductor understanding. Well structured, easily doable if you attend.',
        whyTakeCourse: 'Interest + grading. Semiconductor interest needed',
        attendance: '80% otherwise DX',
        teachingStyle: 'Good, interactive, responsive',
        assignments: 'Work throughout semester',
        grading: 'Relative',
        examPattern: 'Conceptual, understanding is important',
        slidesQuality: 4,
        resources: ['Notes are good enough'],
        pros: ['Good grading', 'Detailed understanding', 'Well structured'],
        cons: ['Strict attendance', 'Work throughout semester']
      }
    ],
    tips: [
      'MM333 prerequisite is important',
      'Attend regularly - 80% attendance required',
      'Stay on top of deadlines',
      'Focus on conceptual understanding',
      'Keep notes organized',
      'Work throughout semester'
    ],
    resources: [
      { name: 'Semiconductor Physics and Devices - Donald A Neaman', type: 'book' },
      { name: 'Course Notes', type: 'notes' }
    ],
    grading: 'Relative. ~40-45% get AA or AB',
    tags: ['semiconductors', 'elective', 'challenging', 'good-grading']
  },
  {
    id: 'mm474',
    code: 'MM474',
    name: 'Thin Film Technology',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2025 Autumn',
    professor: 'Prof. R.O. Dusane',
    rating: 5,
    totalReviews: 1,
    description: 'Excellent course on thin film deposition and characterization with chill professor and no assignments or projects.',
    prerequisites: ['None'],
    topics: [
      'Thin film deposition techniques',
      'Thin film characterization methods'
    ],
    reviews: [
      {
        id: 1,
        author: 'sarvada',
        year: '4th (Batch of \'26)',
        semester: '2025 Autumn',
        rating: 5,
        content: 'GOATED AF',
        whyTakeCourse: 'Interest',
        attendance: 'Chill',
        teachingStyle: 'GOATED AF',
        assignments: 'No assignment, no project',
        grading: 'Normal',
        examPattern: 'From PYQs',
        slidesQuality: 4,
        resources: ['Just slides'],
        pros: ['GOATED professor', 'No assignments', 'No projects', 'Chill attendance'],
        cons: []
      }
    ],
    tips: [
      'Follow the slides',
      'Practice PYQs for exams',
      'Enjoy the chill atmosphere'
    ],
    resources: [
      { name: 'Course Slides', type: 'slides' },
      { name: 'Previous Year Questions', type: 'pyq' }
    ],
    grading: 'Normal grading',
    tags: ['thin-films', 'elective', 'chill', 'highly-recommended']
  },
  {
    id: 'mm652',
    code: 'MM652',
    name: 'Advanced Ceramics',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2025 Spring',
    professor: 'Prof. Ajit Kulkarni, Prof. Avradeep Pal',
    rating: 5,
    totalReviews: 1,
    description: 'DD core course covering superconductivity, magnetism, ferroelectricity, and ceramics. Great teaching with good grading.',
    prerequisites: ['May be specialized for DD, but doable with effort'],
    topics: [
      'Superconductivity',
      'Magnetism',
      'Ferroelectricity',
      'Dielectrics',
      'Ceramics',
      'Sintering',
      'Defects'
    ],
    reviews: [
      {
        id: 1,
        author: 'Aatreyi Bhatia',
        year: '4th (Batch of \'26)',
        semester: '2025 Spring',
        rating: 5,
        content: 'I loved the course. Interesting topic, relevant to other cores. Quite scoring. Great experience.',
        whyTakeCourse: 'Avradeep Pal sir\'s teaching style is excellent',
        attendance: 'As per institute guidelines (80%)',
        teachingStyle: 'Two halves by different professors - like two different courses',
        assignments: 'No assignments or projects, just quizzes and exams',
        grading: 'Relative - Quiz: 15%, Midsem: 35%, In-class Quizzes: 15%, Endsem: 35%',
        examPattern: 'First half: content driven. Second half: logical thinking',
        slidesQuality: 5,
        resources: ['Slides and lectures were self sufficient'],
        pros: ['Great professors', 'Interesting', 'Scoring', 'Not stressful'],
        cons: ['Two different teaching styles']
      }
    ],
    tips: [
      'Treat two halves as separate courses',
      'First half is content-driven - memorize well',
      'Second half requires logical thinking',
      'Slides and lectures are self-sufficient',
      'Attend classes regularly'
    ],
    resources: [
      { name: 'Course Slides and Lectures', type: 'slides' }
    ],
    grading: 'Relative. Quiz: 15%, Midsem: 35%, In-class Quizzes: 15%, Endsem: 35%',
    tags: ['ceramics', 'core', 'dd-course', 'scoring']
  },
  {
    id: 'si527',
    code: 'SI527',
    name: 'Introduction to Derivative Pricing',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2024 Spring',
    professor: 'Prof. S. Baskar',
    rating: 5,
    totalReviews: 1,
    description: 'Rigorous mathematical course on derivative pricing. Great for applied math and finance enthusiasts.',
    prerequisites: ['Basic probability (SI427/IE621/EE325) - hard prerequisite'],
    topics: [
      'Bond mathematics',
      'Options theory',
      'Martingale theory',
      'Ito Calculus'
    ],
    reviews: [
      {
        id: 1,
        author: 'Ashutosh Gandhe',
        year: '4th (Batch of \'26)',
        semester: '2024 Spring',
        rating: 5,
        content: 'Very good experience. Must do course for applied math lovers. Scoring is simple with attendance (~15 bonus marks).',
        whyTakeCourse: 'Interest in math, stats and financial world',
        attendance: 'Strict about DX. Attendance awarded with bonus marks',
        teachingStyle: 'Teaches from slides. Notes are comprehensive',
        assignments: 'No assignments or projects',
        grading: '90+ AA, relative in between',
        examPattern: 'Similar to lecture note problems',
        slidesQuality: 5,
        resources: ['Prof notes like a textbook', 'JC Hull for further reading'],
        pros: ['Bonus marks', 'Applied math', 'Practical', 'Clear notes'],
        cons: ['Strict about DX']
      }
    ],
    tips: [
      'Attend all classes - bonus marks huge difference',
      'Study professor\'s notes thoroughly',
      'Practice problems from lecture notes',
      'Probability prerequisite important',
      '90+ gives AA - achievable with attendance'
    ],
    resources: [
      { name: 'Professor\'s Lecture Notes', type: 'notes' },
      { name: 'JC Hull', type: 'book' }
    ],
    grading: '90+ AA, attendance bonus marks available',
    tags: ['finance', 'applied-math', 'elective', 'highly-recommended']
  },
  {
    id: 'me673',
    code: 'ME673',
    name: 'Engineering Mathematics',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2024 Spring',
    professor: 'Prof. Vedula (retired)',
    rating: 4,
    totalReviews: 1,
    description: 'Advanced engineering mathematics with open notes/internet exams and innovative questions.',
    prerequisites: ['Basic math understanding'],
    topics: [
      'ODEs',
      'PDEs',
      'Laplace transforms',
      'Fourier transforms'
    ],
    reviews: [
      {
        id: 1,
        author: 'Ashutosh Gandhe',
        year: '4th (Batch of \'26)',
        semester: '2024 Spring',
        rating: 4,
        content: 'Very chill course if you like math. Open notes/internet helps a lot.',
        whyTakeCourse: 'Advanced version of 1st year MA courses. Relevant tools',
        attendance: 'No attendance. Lectures on CDEEP',
        teachingStyle: 'Smart and wonderful professor',
        assignments: '7-8 simple assignments',
        grading: 'Relative',
        examPattern: 'Innovative and interesting questions',
        slidesQuality: 2,
        resources: ['CDEEP lectures'],
        pros: ['No attendance', 'Open notes/internet', 'Innovative questions', 'Chill'],
        cons: ['Professor has retired']
      }
    ],
    tips: [
      'Very chill if you like math',
      'Utilize open notes/internet format',
      'Complete assignments - they are simple',
      'CDEEP lectures available'
    ],
    resources: [
      { name: 'CDEEP Lectures', type: 'video' }
    ],
    grading: 'Relative',
    tags: ['mathematics', 'elective', 'chill', 'open-book']
  },
  {
    id: 'mm722',
    code: 'MM722',
    name: 'Molecular Dynamics for Materials Engineering',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2025 Autumn',
    professor: 'Prof. Ajay Singh Panwar',
    rating: 4,
    totalReviews: 1,
    description: 'Hands-on molecular dynamics simulations using LAMMPS. AI-assisted assignments make it manageable.',
    prerequisites: ['None, but only 4th year+ allowed'],
    topics: [
      'LAMMPS programming',
      'Thermostats',
      'Pair Potentials and Force fields',
      'Statistical mechanics basics'
    ],
    reviews: [
      {
        id: 1,
        author: 'Anuj Waje',
        year: '4th (Batch of \'26)',
        semester: '2025 Autumn',
        rating: 4,
        content: 'Good experience. AI helped a lot with assignments. Great IE course!',
        whyTakeCourse: 'Interest in atomic level systems',
        attendance: 'Strict 80% via roll call',
        teachingStyle: 'Taught theory well, rarely helped with coding',
        assignments: 'Weekly 5%, Project 30%, Quiz 10%, Attendance 10%. NO MIDSEM/ENDSEM',
        grading: 'Relative - lenient, considerable AA and ABs',
        examPattern: 'NA (No midsem/endsem)',
        slidesQuality: 2,
        resources: ['ChatGPT and Gemini very helpful'],
        pros: ['No midsem/endsem', 'AI helps', 'Good grading', 'Learn LAMMPS'],
        cons: ['Strict attendance', 'Limited coding help']
      }
    ],
    tips: [
      'Use ChatGPT/Gemini for LAMMPS help',
      'Maintain 80% attendance',
      'Start project early - presentation at end',
      'Weekly assignments - stay consistent',
      'Focus on theory in class'
    ],
    resources: [
      { name: 'ChatGPT', type: 'ai-tool' },
      { name: 'Gemini', type: 'ai-tool' }
    ],
    grading: 'Relative - lenient. Assignments: 50%, Project: 30%, Quiz: 10%, Attendance: 10%',
    tags: ['molecular-dynamics', 'simulation', 'elective', 'lammps']
  },
  {
    id: 'mm407',
    code: 'MM407',
    name: 'Iron and Steelmaking',
    category: 'elective',
    difficulty: 'hard',
    credits: null,
    semester: '2025 Autumn',
    professor: 'Prof. Manish Pande',
    rating: 5,
    totalReviews: 1,
    description: 'Comprehensive iron and steel manufacturing course. Excellent teaching with lots of resources. Former dreaded core pre-2022.',
    prerequisites: ['Phase Transformations (soft)'],
    topics: [
      'Mass and Heat Balance',
      'Blast Furnace',
      'Basic Oxygen Furnace',
      'Electric Arc Furnace',
      'Ladle Furnace',
      'Degassing'
    ],
    reviews: [
      {
        id: 1,
        author: 'Anuj Waje',
        year: '4th (Batch of \'26)',
        semester: '2025 Autumn',
        rating: 5,
        content: 'Prof teaches very nicely and ensures concepts cleared. Lots of resources - was a dreaded core pre-2022!',
        whyTakeCourse: 'Complete DE in penultimate sem',
        attendance: 'No attendance policy',
        teachingStyle: 'Prof teaches very well 10/10! Regular attendance + doubts = easy AA',
        assignments: 'Endsem: 35%, Midsem: 25%, Quizzes: 15%, Homework: 10%',
        grading: 'Conventional Gaussian',
        examPattern: 'Mix of theory and numerical, lengthy questions',
        slidesQuality: 4,
        resources: ['MEMS D-AMP Resources', 'PYQs', 'Extra questions'],
        pros: ['Excellent teaching', 'No attendance', 'Lots of resources', 'AA easy with effort'],
        cons: ['Lengthy exam questions']
      }
    ],
    tips: [
      'Attend regularly - prof teaches very well',
      'Clear doubts immediately',
      'Use MEMS D-AMP resources',
      'Practice PYQs and extra questions',
      'AA achievable with regular attendance'
    ],
    resources: [
      { name: 'MEMS D-AMP Resources', link: 'https://drive.google.com/drive/folders/1hPQGeKA5UeUxp7xuYbCbTSnHyiF_iHQa', type: 'drive' },
      { name: 'Previous Year Questions', type: 'pyq' }
    ],
    grading: 'Gaussian. Endsem: 35%, Midsem: 25%, Quizzes: 15%, Homework: 10%',
    tags: ['steel', 'manufacturing', 'elective', 'highly-recommended']
  },
  {
    id: 'ent602',
    code: 'ENT 602',
    name: 'Technology Venture Creation',
    category: 'elective',
    difficulty: 'hard',
    credits: null,
    semester: '2025 Spring',
    professor: 'Prof. Sankalp Pratap, Prof. Ramesh Kuruva',
    rating: 5,
    totalReviews: 1,
    description: 'Intensive entrepreneurship course building an actual venture. High paced, steep learning curve, but one of the best.',
    prerequisites: ['ENT 603'],
    topics: [
      'Problem Discovery',
      'Customer Discovery',
      'Prototyping',
      'Market Analysis',
      'Business & Financial Model'
    ],
    reviews: [
      {
        id: 1,
        author: 'Veer Lohia',
        year: '3rd (Batch of \'27)',
        semester: '2025 Spring',
        rating: 5,
        content: 'One of the best courses in institute. High paced, steep learning, forces prototyping. Extensive customer discovery.',
        whyTakeCourse: 'Interest & Grading. ENT courses have chill grading',
        attendance: '10 marks for attending, no DX',
        teachingStyle: 'Great teaching. Built intuition for problem solving.',
        assignments: 'Make own venture - hectic. 65-70% weightage on project',
        grading: 'Relative. Heavy on project. Tough to get 10 if chilling',
        examPattern: 'Know everything about your venture. From class content.',
        slidesQuality: 1,
        resources: [],
        pros: ['Best courses', 'Practical', 'Prototyping', 'Customer discovery'],
        cons: ['Very intensive', 'High paced', 'Heavy workload']
      }
    ],
    tips: [
      'Don\'t take if you want to chill',
      'Choose good team - teamwork crucial',
      'Start customer discovery early',
      'Actually prototype, don\'t just theorize',
      'Weekly milestones - stay consistent',
      'Know venture inside-out for exams'
    ],
    resources: [],
    grading: 'Relative. Project: 65-70%, Attendance: 10 marks',
    tags: ['entrepreneurship', 'project-heavy', 'intensive', 'highly-recommended']
  },
  {
    id: 'ent614',
    code: 'ENT 614',
    name: 'B2B Sales & Marketing',
    category: 'elective',
    difficulty: 'medium',
    credits: null,
    semester: '2026 Spring',
    professor: 'Prof. Anu, Rizwan Koita',
    rating: 5,
    totalReviews: 1,
    description: 'Half semester covering entire B2B sales pipeline. Excellent industry insights and practical learning.',
    prerequisites: ['ENT 603'],
    topics: [
      'B2B sales pipeline',
      'Product understanding & pricing',
      'RFPs',
      'Pitching to customers',
      'Company structures',
      'Positioning'
    ],
    reviews: [
      {
        id: 1,
        author: 'Veer Lohia',
        year: '3rd (Batch of \'27)',
        semester: '2026 Spring',
        rating: 5,
        content: 'One of the best. Must if you want to understand & build B2B businesses.',
        whyTakeCourse: 'Interest',
        attendance: 'No policy',
        teachingStyle: 'Amazing. Rizwan brought industry insights. Great pedagogy.',
        assignments: 'Final project 50%, endsem 50%. Half sem course',
        grading: 'Relative',
        examPattern: 'Project requires excellence. Endsem chill. Sales pitch + strategy for startup.',
        slidesQuality: 5,
        resources: [],
        pros: ['Industry insights', 'Great pedagogy', 'Practical', 'Half semester'],
        cons: ['Project weightage high']
      }
    ],
    tips: [
      'Must take if interested in B2B',
      'Focus heavily on project - 50%',
      'Endsem chill vs project',
      'Prepare sales pitch well',
      'Learn from Rizwan\'s experience'
    ],
    resources: [],
    grading: 'Relative. Project: 50%, Endsem: 50%',
    tags: ['entrepreneurship', 'b2b', 'sales', 'marketing', 'highly-recommended']
  },
  {
    id: 'de344',
    code: 'DE344',
    name: 'Product Design',
    category: 'hasmed',
    difficulty: 'easy',
    credits: null,
    semester: '2025 Spring',
    professor: 'R. Sandesh',
    rating: 5,
    totalReviews: 1,
    description: 'Hands-on design course tinkering with materials. Extremely chill with amazing grading - 80/108 got AA.',
    prerequisites: ['NA'],
    topics: [
      'Design process through doing',
      'Prototyping',
      'Material exploration'
    ],
    reviews: [
      {
        id: 1,
        author: 'Sanat Jain',
        year: '3rd (Batch of \'27)',
        semester: '2025 Spring',
        rating: 5,
        content: 'Lot of fun. 3 hours/week tinkering with materials while listening to music. Got AA.',
        whyTakeCourse: 'HASMED elective. Grading turned out great',
        attendance: 'Significant weightage + hands-on work needs attendance',
        teachingStyle: '1-2 lectures at start, rest on projects',
        assignments: '4 small prototypes (3 individual, 1 group) in 2-week cycles. Quality no weightage.',
        grading: '80/108 got AA. Attend >90% + submit on time = AA',
        examPattern: 'No midsems, endsems formality. Very chill.',
        slidesQuality: 5,
        resources: ['Pinterest for inspiration'],
        pros: ['Fun', 'Amazing grading', 'Creative freedom', 'Chill'],
        cons: ['Need to attend for hands-on']
      }
    ],
    tips: [
      'Attend 90%+ classes for AA',
      'Submit on time',
      'Use Pinterest for inspiration',
      'Work finishes in class time',
      'Quality doesn\'t matter, just complete',
      'Enjoy the creative process'
    ],
    resources: [
      { name: 'Pinterest', type: 'inspiration' }
    ],
    grading: '80/108 got AA. Attendance >90% + timely submission = AA',
    tags: ['hasmed', 'design', 'hands-on', 'easy', 'highly-recommended']
  },
  {
    id: 'mm324',
    code: 'MM324',
    name: 'Polymer Science and Engineering',
    category: 'core',
    difficulty: 'hard',
    credits: null,
    semester: '2025 Spring',
    professor: 'Prof. Mithun Chowdhary',
    rating: 4,
    totalReviews: 1,
    description: 'Core course covering polymer physics, thermodynamics, and mechanics. Math intensive and theory heavy - learn polymers from a physics perspective.',
    prerequisites: ['None'],
    topics: [
      'History and classification of polymers',
      'Natural, biological and synthetic polymers',
      'Molecular weight and polydispersity index',
      'Polymer synthesis (addition, free radical, anionic, click chemistry)',
      'Chain conformation and statistical descriptions',
      'Random walks and characteristic length scales',
      'Size-exclusion and gel permeation chromatography',
      'Flory-Huggins theory',
      'Polymer thermodynamics and phase separation',
      'Block copolymers and polymer blends',
      'Polymer structure (glassy, crystalline, rubbery states)',
      'Polymer crystallization and Lauritzen-Hoffman theory',
      'Solution dynamics and hydrodynamic size',
      'Viscoelasticity and rheology',
      'Time-temperature superposition and reptation',
      'Optical and electrical properties',
      'Biopolymers and soft materials'
    ],
    reviews: [
      {
        id: 1,
        author: 'Debashish Das',
        year: '4th (Batch of \'26)',
        semester: '2025 Spring',
        rating: 4,
        content: 'Great course! and my first AP :D In general a good course, its very math intensive, theory and derivation heavy. If you want to learn how does a polymer move, what does their thermodynamics look like and stuff like that and also to learn polymers from a physics POV that is generally learn from a chemistry POV then you should take this up.',
        whyTakeCourse: 'Core course. Good for learning polymers from physics perspective - covers polymer movement, thermodynamics, and fundamental physics instead of typical chemistry approach.',
        attendance: '5% for attendance',
        teachingStyle: 'Prof Mithun has an unorthodox teaching style, it isnt linear, he might tell what comes at the end of a topic first and then explain how to reach it, paying attention in classes is important and at the same time making sure that you understand the previously covered content is important',
        assignments: 'No projects, Assignments were given for practice',
        grading: 'Relative, quizzes - 25%, midsem - 30%, endsem - 35%',
        examPattern: 'Theory and derivation based, generally students should focus on remembering the derivations and also being conceptually clear about stuff',
        slidesQuality: 4,
        resources: ['Student notes on Drive'],
        pros: ['Good conceptual course', 'Physics-oriented polymer understanding', 'Practice assignments given'],
        cons: ['Very math intensive', 'Derivation heavy', 'Unorthodox teaching style needs adaptation']
      }
    ],
    tips: [
      'Pay close attention in class - teaching style is non-linear',
      'Keep reviewing previously covered content regularly',
      'Focus on understanding and remembering derivations',
      'Build strong conceptual clarity alongside theory',
      'Complete practice assignments thoroughly',
      'Math-heavy course - be prepared for extensive calculations'
    ],
    resources: [
      { name: 'Student Notes', link: 'https://drive.google.com/drive/folders/1GmGyrMwiDGr4hnLKBLu2GolKBmQTyzBo?usp=drive_link', type: 'notes' }
    ],
    grading: 'Relative - Quizzes: 25%, Midsem: 30%, Endsem: 35%, Attendance: 5%',
    tags: ['materials', 'core', 'polymers', 'theory-heavy', 'math-intensive']
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
