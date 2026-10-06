export const portfolioData = {
  // --- MISSING INFO / PLACEHOLDERS ---
  // Please update these fields with your actual links and info
  personal: {
    name: "Muhammad Hamza",
    title: "Full Stack Software Engineer",
    photoUrl: "/profile.jpg",
    email: "muhammadhamza.co@gmail.com",
    githubUrl: "https://github.com/yourusername", // TODO: Replace with your GitHub
    linkedinUrl: "https://linkedin.com/in/mhamzadev",
    resumePdfUrl: "/Muhammad_Hamza_Resume.pdf", // TODO: Put your actual PDF file in the public/ folder
    location: "Lahore, Pakistan",
    phone: "+92 304 2234448",
  },
  
  hero: {
    headline: "I build full-stack products that ship and scale.",
    subheadline: "Software Engineer with 2+ years of experience building and delivering production applications using Java, Spring Boot, Node.js, and React.js. I specialize in designing robust APIs, role-based backend services, and fast, responsive interfaces.",
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "5+", label: "Tech Stacks Mastered" },
      { value: "2+", label: "Full-Stack Platforms Shipped" }
    ]
  },

  about: {
    text: "I'm a full-stack engineer who loves the intersection of robust backend architecture and sleek frontend design. I enjoy turning complex problems into intuitive, scalable solutions. When I'm not writing code for high-performance RESTful APIs or tweaking React components, you can find me exploring new AI-assisted development tools and modern cloud paradigms.",
    personalityLine: "Crafting clean, maintainable software is not just my job—it's my craft."
  },

  skills: {
    languages: ["Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
    frontend: ["React.js", "React Hooks", "Context API", "Redux", "React Router", "Tailwind CSS", "jQuery", "Responsive Design"],
    backend: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth2", "Apache Solr", "Maven"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "MariaDB"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Claude", "GitHub Copilot", "Agile/Scrum"]
  },

  projects: [
    {
      title: "KaamKrew – Home Maintenance Services",
      description: "A mobile marketplace application connecting users with home maintenance services. Features a robust backend and an intuitive frontend, reaching over 5k+ downloads on the Google Play Store.",
      techStack: ["Java", "Spring Boot", "React.js", "MySQL", "Cloudinary"],
      liveUrl: "https://www.kaamkrew.com/", 
      githubUrl: "", 
    },
    {
      title: "AdvocatePlus – AI-Powered Legal Aid Platform",
      description: "A full-stack legal platform featuring five role-based portals, JWT access control, encrypted video consultations via Jitsi Meet, and a multilingual legal chatbot powered by Google's Gemini API.",
      techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Gemini API", "Jitsi Meet"],
      liveUrl: "#", // TODO: Add live URL
      githubUrl: "#", // TODO: Add GitHub repo URL
    }
  ],

  experience: [
    {
      title: "Associate Software Engineer",
      company: "Innovadel Technologies",
      location: "Lahore, Pakistan",
      period: "Aug 2025 – Aug 2026",
      achievements: [
        "Developed backend services using Java and Spring Boot for a mobile marketplace application supporting employer, vendor, and admin platforms.",
        "Designed and implemented reward and marketplace features, including a refer-a-friend program and a vendor bonus/slabs configuration system.",
        "Optimized backend API performance through pagination and response handling, modeling relational schemas with JPA/Hibernate.",
        "Built Spring Boot services integrated with Apache Solr to support search autocomplete and personalized recommendations."
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "Techni Web Solutions",
      location: "Lahore, Pakistan",
      period: "Aug 2024 – Jun 2025",
      achievements: [
        "Built and deployed a full-featured e-commerce platform with an integrated admin dashboard for catalog, order, and inventory management.",
        "Developed a reusable React component library with centralized state management using Hooks and Context API.",
        "Integrated RESTful APIs with React Router and implemented role-based route protection for admin and customer flows."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "GenITeam Solutions",
      location: "Lahore, Pakistan",
      period: "Jun 2024 – Jul 2024",
      achievements: [
        "Contributed to internal web application development, including feature implementation, live debugging, and performance tuning.",
        "Gained hands-on exposure to production Git workflows and code review practices."
      ]
    }
  ],

  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "Lahore Garrison University",
      location: "Lahore, Pakistan",
      period: "2021 – 2025",
      details: "CGPA: 3.60/4.00"
    }
  ],

  certifications: [
    "JavaScript Certification, Pearson — ES6+, asynchronous programming, DOM manipulation",
    "Full Stack Development Bootcamp, NAVTTC — React.js, Node.js, Express.js, MongoDB",
    "High Achiever Award, Lahore Garrison University — outstanding academic performance"
  ],

  contact: {
    callToAction: "Looking for an engineer who can own the stack from database to deployment? Let's build something great together."
  }
};
