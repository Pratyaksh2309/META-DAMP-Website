// Helper function to extract Google Drive image ID and convert to direct link
// Also supports local image paths
const getImageUrl = (imageUrlOrPath) => {
  if (!imageUrlOrPath) return null;
  
  // If it's a local path (starts with / or doesn't contain http), return as-is
  if (!imageUrlOrPath.includes('http')) {
    return imageUrlOrPath.startsWith('/') ? imageUrlOrPath : `/${imageUrlOrPath}`;
  }
  
  // Otherwise, handle Google Drive URLs
  const match = imageUrlOrPath.match(/id=([^&\s]+)/);
  if (match) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return null;
};

export const dampCoordinators = [];

export const dampMentors = {
  fifthYear: [
    {
      id: 1,
      name: "Tushaar Anoop Jhamtanj",
      rollNumber: "210110110",
      year: "5th Year",
      email: "210110110@iitb.ac.in",
      phone: "8726755579",
      image: getImageUrl(
        "Images/Tushaar Jhamtani.jpeg"
      ),
      bio: "I am a huge fan of legal dramas and sitcoms, I have recently got a lot of tattoos (probably getting more :)) Three words that describe me the best are 'Sundar','Sushil' & 'Sanskari' <3",
      careerInterests: "Core and Finance",
    },
  ],

  fourthYear: [
    {
      id: 1,
      name: "Sarvada Andhare",
      rollNumber: "22b2412",
      year: "4th Year",
      email: "sarvada2004@gmail.com",
      phone: "+91 9373841408",
      image: getImageUrl(
        "Images/Sarvada Andhare.jpeg"
      ),
      bio: "I am into materials, which also happens to be my major. I play tennis infrequently but changing that is on my final year bingo card.",
      careerInterests: "Research",
    },
    {
      id: 2,
      name: "Swayamj Joshi",
      rollNumber: "22B2704",
      year: "4th Year",
      email: "swayamj9231@gmail.com",
      phone: "8355902016",
      image: getImageUrl(
        "Images/Damp - Swayamj Joshi.HEIC"
      ),
      bio: "Hey, I am Swayamj, a fourthie from Mumbai. I enjoy playing the guitar and composing music. I also love football and probably the only Spurs fan you'll find on campus",
      careerInterests: "Consulting, Finance, Entrepreneurship",
    },
    {
      id: 3,
      name: "Aatreyi Bhatia",
      rollNumber: "22B2477",
      year: "4th Year",
      email: "22b2477@iitb.ac.in",
      phone: "8827280066",
      image: getImageUrl(
        "Images/Aatreyi bhatia.jpeg"
      ),
      bio: "I am someone who loves listening to music to the point that you'll always see me with earphones. (approach me nonetheless) Also love reading books and playing badminton! Design and languages are also a few of my interests :)",
      careerInterests: "Consulting, Finance and Data Science in Healthcare",
    },
    {
      id: 4,
      name: "Vishesh Jain",
      rollNumber: "22b2467",
      year: "4th Year",
      email: "visheshjain0122@gmail.com",
      phone: "7666943568",
      image: getImageUrl(
        "Images/Vishesh Jain.jpg"
      ),
      bio: "Heyo! Vishesh here. You'll never find me in the department building. Although if you do hear someone with a slightly American sounding accent, that's me. You can also find me on stage at most symphony events :D .",
      careerInterests:
        "Financial engineering, data analytics, web3 and smart contract development.",
    },
    {
      id: 5,
      name: "Anuj Waje",
      rollNumber: "22B2540",
      year: "4th Year",
      email: "22b2540@iitb.ac.in",
      phone: "8779497403",
      image: getImageUrl(
        "Images/Anuj Waje.jpg"
      ),
      bio: "Hey all! I am Anuj from Kandivali, Mumbai. You will find me with my black headphones ON blasting music whenever I am alone :), Travelling fascinates me a lot,love going to long walks with friends, a huge foodie as well!\nBinge watching murder mysteries is also my thing 🔪. Love to have discussions, so if you have something to discuss you can ping me, would love to talk 😄!\n\n(P.S. : Even though I am from Mumbai, Nashik is like my second hometown and you'll often see me making frequent trips there)",
      careerInterests: "Materials Science, Biology, Machine Learning",
    },
    {
      id: 6,
      name: "Rishabh Tibrewal",
      rollNumber: "22b2478",
      year: "4th Year",
      email: "rishabhtibrewal47@gmail.com",
      phone: "8948486206",
      image: getImageUrl(
        "Images/Rishabh Tibrewal.jpg"
      ),
      bio: "Hello! I'm Rishabh from Gorakhpur. I spend most of my time watching and playing sports especially badminton and cricket.  Always up for exploring new places and having deep, thoughtful conversations.Always happy to connect — and don't worry, your secrets are safe with me!",
      careerInterests: "Finance and Analytics",
    },
    {
      id: 7,
      name: "Prathu Tandon",
      rollNumber: "22B2441",
      year: "4th Year",
      email: "prathu.tandon@gmail.com",
      phone: "7300901300",
      image: getImageUrl(
        "Images/Prathu Tandon.jpg"
      ),
      bio: "Hi! I'm Prathu and I'm from Agra, the city of peela Taj😭. I am always up for some binge-watching content. I will remember you by your crazy observations, but might forget your name. I'm always up for a FIFA match. Please don't judge me by my likes on insta😭, they just happen.",
      careerInterests: "Consulting & Entrepreneurship",
    },
    {
      id: 8,
      name: "Harsh Verma",
      rollNumber: "22B2465",
      year: "4th Year",
      email: "harsh.verma230803@gmail.com",
      phone: "9922632596",
      image: getImageUrl(
        "Images/Harsh Verma.jpeg"
      ),
      bio: "Hello! I'm Harsh and I'm natively from Ranchi (however I've lived in a lot of different places). I'm a huge football fan (A proud Chelsea fan as well as a midfielder on the pitch) and I like to listen to music as well as produce my own songs (you can hear my music on Spotify). I also like to travel, meet new people and have fun conversations. You would probably find me at Chaayos or just roaming around so feel free to stop by for a chat!",
      careerInterests: "Finance and Consulting",
    },
  ],

  thirdYear: [
    {
      id: 1,
      name: "Avani Gala",
      rollNumber: "23B2405",
      year: "3rd Year",
      email: "avanigala.iitb@gmail.com",
      phone: "8657424350",
      image: getImageUrl(
        "Images/Avani Hasmukh Gala.jpg"
      ),
      bio: "Hello! I'm Avani, born and brought up  in Mumbai. \nI love reading, books have been a big part of my life. Apart from that, I have a major sweet tooth and I eat a LOT of chocolate  😋 \nI'm also a huge fan of South Indian food, which might have something to do with my upbringing in Matunga :)",
      careerInterests: "Consult, Finance",
    },
    {
      id: 2,
      name: "Veer Lohia",
      rollNumber: "23B2514",
      year: "3rd Year",
      email: "veer.lohia1310@gmail.com",
      phone: "7715034502",
      image: getImageUrl(
        "Images/Veer Lohia.jpg"
      ),
      bio: "Heyy I'm Veer Lohia, third-year MEMS student and your DAMP mentor!\nEnjoy playing chess, exploring startup ideas, watching F1 & and discovering underrated corners of campus.\nAlways up for a game of cricket or helping out with anything insti throws your way!",
      careerInterests: "Finance, Consult",
    },
    {
      id: 3,
      name: "Param Mehta",
      rollNumber: "23b2439",
      year: "3rd Year",
      email: "parammehta006@gmail.com",
      phone: "7850851390",
      image: getImageUrl(
        "Images/Param Mehta.jpg"
      ),
      bio: "I'm Param Mehta a to be thirdie in the mems department, currently a damp mentor and senior software engineer at team rakshak. I enjoy working out, swimming, chess and poker.",
      careerInterests: "Tech / finance",
    },
    {
      id: 4,
      name: "Ruchir Kulkarni",
      rollNumber: "23B2483",
      year: "3rd Year",
      email: "23b2483@iitb.ac.in",
      phone: "8459172865",
      image: getImageUrl(
        "Images/Ruchir Kulkarni.jpg"
      ),
      bio: 'Hi guys! I am Ruchir from Pune. My biggest passion is CRICKET.  I love it and live it. You can always call me up and we can have deep discussions on why Rohit & Virat retired so early. I also love ChatGPTing stuff- It makes me feel like I am gaining knowledge. \nI spend most of my free time consuming "quality" content (mostly Netflix or reels). In the institute, I am currently an IC, and I was previously involved as the Energy Club convenor and also the CR of my batch. Apart from this, I enjoy going on trips and hanging out with my friends. Can\'t wait to catch up with you all!!',
      careerInterests: "Non Tech (Consult, Finance, Analytics, FMCG, Product)",
    },
    {
      id: 5,
      name: "Pratyaksh Bhardwaj",
      rollNumber: "23B2401",
      year: "3rd Year",
      email: "pratyakshb349@gmail.com",
      phone: "9662201929",
      image: getImageUrl(
        "Images/Pratyaksh.png"
      ),
      bio: "Hey! I'm Pratyaksh — originally from UP, but thanks to my dad's transferable job, I've basically done a full India tour! Sooo if you randomly spot me in a new city, don't be surprised — I probably just moved there last week. Also I love hanging out with my friends (social battery: always charged !), but when I'm not out, you'll probably catch me deep in thought about my career— yeah, I overthink a bit, but who doesn't, right?",
      careerInterests: "Coding , Machine Learning , Data Science",
    },
    {
      id: 6,
      name: "Vedant Deshpande",
      rollNumber: "23B2484",
      year: "3rd Year",
      email: "vedant.v.deshpande@gmail.com",
      phone: "9404152206",
      image: getImageUrl(
        "Images/Vedant Deshpande.jpg"
      ),
      bio: "Hello I'm Vedant, I'm from Pune. I love watching football, cricket and f1! Also, I have been playing the Tabla for the past 12 years now!",
      careerInterests: "Materials Science core, Electrical Engineering",
    },
    {
      id: 7,
      name: "Nandini Goyal",
      rollNumber: "23B2486",
      year: "3rd Year",
      email: "nandinigoyal.iitb@gmail.com",
      phone: "7011699780",
      image: getImageUrl(
        "Images/Nandini Goyal.png"
      ),
      bio: "Hi, Nandini Goyal, a to be thirdie in the MEMS department this side. I currently live in Thane. I love to watch psychological thrillers while trying to guess the plot. Always up for an adventure. Looking forward to meet you guys!!",
      careerInterests: "Currently exploring consulting and finance.",
    },
    {
      id: 8,
      name: "Shreya Tiwari",
      rollNumber: "23B2467",
      year: "3rd Year",
      email: "tshreya179@gmail.com",
      phone: "9981616714",
      image: getImageUrl(
        "Images/Shreya Tiwari.jpg"
      ),
      bio: "Someone who finds joy in brushstrokes, old books and humming melodies at odd hours. Nature's my therapy and rain-soaked walks are my idea of a good time. I occasionally flirt with finance—but I'm really just painting my way through life!",
      careerInterests: "Finance and Consult",
    },
    {
      id: 9,
      name: "Bhagya Yogesh Agrawal",
      rollNumber: "23B2458",
      year: "3rd Year",
      email: "bhagyayogiragrawal@gmail.com",
      phone: "8830743245",
      image: getImageUrl(
        "Images/Bhagya Agrawal.jpg"
      ),
      bio: "I am Bhagya Agrawal, to be a third-year student in the MEMS department. I love to play cricket and badminton. I also play card games(a trait of our family).",
      careerInterests:
        "I love to explore tech, especially how the AI works in the background. I have also developed skills in the development side.",
    },
    {
      id: 10,
      name: "Sanat",
      rollNumber: "23b2463",
      year: "3rd Year",
      email: "sanatsj37@gmail.com",
      phone: "8308755830",
      image: getImageUrl(
        "Images/Sanat Jain.jpg"
      ),
      bio: "Hello, I'm Sanat, currently in my third year. \nI can mostly be found taking long walks through insti or drinking chai at random times of the day (call me if you ever feel like drinking chai at 3am in the night).",
      careerInterests: "Interested in core MEMS",
    },
    {
      id: 11,
      name: "Tanmay Agarwal",
      rollNumber: "23B2422",
      year: "3rd Year",
      email: "tanmay05agarwal@gmail.com",
      phone: "9868169868",
      image: getImageUrl(
        "Images/Tanmay agarwal.jpg"
      ),
      bio: "Heyy!\nI am Tanmay Agarwal, third year UG in MEMS Department. I am from Ghaziabad (mostly known for this fact). Love reading books and playing basketball (unskilled manner). \nI mostly spend my time out with friends goofing around and having fun. \nI have been watching F1 since last two season (a lot has changed in the game since then, really hard to predict what happens now).",
      careerInterests: "Finance (Portfolio Management)",
    },
    {
      id: 12,
      name: "Rupanshi Vijayvargiya",
      rollNumber: "23B2473",
      year: "3rd Year",
      email: "rupanshivijay10@gmail.com",
      phone: "9301891196",
      image: getImageUrl(
        "Images/Rupanshi Vijayvargiya.jpg"
      ),
      bio: "Hello! I'm Rupanshi Vijayvargiya, a to be third-year from the Department of Metallurgical Engineering and Materials Science. I'm from Indore, I'm someone who enjoys staying active—whether it's playing basketball, dancing, or heading out on spontaneous travel adventures. I love exploring new places and experiences, often without much planning—just going with the flow!",
      careerInterests: "Consult & FMCG",
    },
    {
      id: 13,
      name: "Aditya Shukla",
      rollNumber: "24B2427",
      year: "3rd Year",
      email: "aditshukla20@gmail.com",
      phone: "9511617607",
      image: getImageUrl(
        "Images/Aditya Shukla.jpeg"
      ),
      bio: "Hi, I'm Aditya Shukla from Pune. I enjoy listening to music, watching sitcoms, and playing sports — you'll often find me at the H5 TT table at odd hours. I also love travelling and meeting new people, so feel free to reach out anytime!",
      careerInterests: "Tech and Core",
    },
    {
      id: 14,
      name: "Shlok Rathi",
      rollNumber: "23B2409",
      year: "3rd Year",
      email: "shlokrathi741@gmail.com",
      phone: "9307537940",
      image: getImageUrl(
        "Images/Shlok Rathi.jpeg"
      ),
      bio: "Hey Guys , I'm Shlok to be thirdie and your other Damp Mentor\nI am from Jalna Maharashtra. I am  part of AUV team and also a part of Inter-IIT Athletic team. Other than that I love playing football and swimming.",
      careerInterests: "META core",
    },
    {
      id: 15,
      name: "Swapnil Madan",
      rollNumber: "23b2410",
      year: "3rd Year",
      email: "swapnilmadan1@gmail.com",
      phone: "7974164626",
      image: getImageUrl(
        "Images/Swapnil Madan.jpg"
      ),
      bio: "Hello I am Swapnil, from Raipur (not made up). I love driving and playing cricket. Ever in dilemma, feel free to reach out.",
      careerInterests:
        "I like to study finance as I find it interesting and it is what I wish to build a career in.",
    },
    {
      id: 16,
      name: "Vidhi Tejas Morzaria",
      rollNumber: "23B2485",
      year: "3rd Year",
      email: "vidhimorzaria123@gmail.com",
      phone: "8291626166",
      image: getImageUrl(
        "Images/Vidhi Morzaria.jpeg"
      ),
      bio: "Hey!\nI'm Vidhi Tejas Morzaria - born and brought up in Bombay. My hobbies include reading fiction novels, Netflix binging, and traveling — especially when there's a good story or a great view involved.",
      careerInterests:
        "I'm passionate about finance and consulting, and I enjoy solving complex problems through data-driven thinking and clear communication. I'm especially drawn to work that creates real, strategic impact across industries.",
    },
    {
      id: 17,
      name: "Sameer Gupta",
      rollNumber: "23B2509",
      year: "3rd Year",
      email: "23B2509@iitb.ac.in",
      phone: "8000624319",
      image: getImageUrl(
        "Images/Sameer Gupta.jpg"
      ),
      bio: "Hi Everyone! Myself Sameer Gupta,\nMy hobbies involve playing racquet sports like Lawn Tennis, Badminton etc.\nLove to sing hindi songs but never participated in any competitions (stage fear ಥ_ಥ). \nAnd yeah I do a lot of overthinking as well (I overthink ki i overthink)\nLooking forward to guiding the students in every aspect during the DAMP tenure.",
      careerInterests:
        "Oriented towards tech and that too more on the AI/ML side and in that as well, have more inclination towards it's research perspectives than the application side",
    },
  ],
};
