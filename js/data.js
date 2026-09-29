/**
 * Data File for Nitin Choudhary Portfolio
 * Highlighting Java 17, Spring Boot, Spring Security, REST APIs, Hibernate, JPA, PostgreSQL, MySQL, Git and Maven
 * Strictly adhering to Nitin Choudhary's Resume
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Nitin Choudhary",
    title: "Software Engineer | Java Backend Developer",
    experienceYears: "6 Months (Internship)",
    location: "Indore, Madhya Pradesh",
    phone: "7415416193",
    email: "nitinchoudhary7415@gmail.com",
    noticePeriod: "Immediate / Entry-Level Java Developer Roles",
    primarySkills: ["Java 17", "Spring Boot", "Spring Security", "REST APIs", "Spring Data JPA", "Hibernate", "PostgreSQL", "MySQL", "Git", "Maven"],
    github: "https://github.com/nitinchoudhary-11",
    linkedin: "https://linkedin.com/in/nitin-c-80a97a249"
  },

  skills: [
    {
      id: "java",
      name: "Java 17 & Core Java",
      category: "core",
      icon: "fa-brands fa-java",
      color: "#e76f51",
      proficiency: 90,
      level: "Strong Foundation",
      experience: "Academic & Internship",
      tags: ["OOP", "Collections Framework", "Multithreading", "Exception Handling", "Data Structures", "Algorithms", "Time Complexity"],
      description: "Solid foundation in Java 17, Object-Oriented Programming (OOP), Collections framework, exception handling, and data structures."
    },
    {
      id: "springboot",
      name: "Spring Boot",
      category: "frameworks",
      icon: "fa-solid fa-leaf",
      color: "#2a9d8f",
      proficiency: 88,
      level: "Hands-on Experience",
      experience: "Internship & Projects",
      tags: ["Spring Data JPA", "RESTful Web Services", "MVC Architecture", "Dependency Injection", "IoC Container", "Input Validation"],
      description: "Developing clean backend applications and REST APIs using Spring Boot, Controller-Service-Repository architecture, IoC, and Dependency Injection."
    },
    {
      id: "springsecurity",
      name: "Spring Security & Auth",
      category: "frameworks",
      icon: "fa-solid fa-shield-halved",
      color: "#06b6d4",
      proficiency: 85,
      level: "Hands-on Experience",
      experience: "Internship & Projects",
      tags: ["JWT Authentication", "Refresh Token", "BCrypt Encryption", "RBAC", "Authorization"],
      description: "Implementing secure backend services with Spring Security, JWT stateless tokens, Refresh Tokens, BCrypt password hashing, and Role-Based Access Control."
    },
    {
      id: "restapis",
      name: "REST APIs & Web Services",
      category: "core",
      icon: "fa-solid fa-gears",
      color: "#f4a261",
      proficiency: 90,
      level: "Hands-on Experience",
      experience: "Internship & Projects",
      tags: ["API Design", "CRUD Operations", "Pagination & Filtering", "Input Validation", "Global Exception Handling"],
      description: "Designing RESTful CRUD APIs following clean Object-Oriented principles, pagination, filtering, input validation, and Postman API testing."
    },
    {
      id: "hibernatejpa",
      name: "Hibernate & Spring Data JPA",
      category: "database",
      icon: "fa-solid fa-cubes",
      color: "#59666c",
      proficiency: 86,
      level: "Hands-on Experience",
      experience: "Internship & Projects",
      tags: ["Entity Mapping", "ORM Persistence", "Spring Data Repositories", "CRUD Operations"],
      description: "Object-Relational Mapping (ORM) using Hibernate and Spring Data JPA repositories for seamless database operations."
    },
    {
      id: "mysql",
      name: "MySQL & Relational Databases",
      category: "database",
      icon: "fa-solid fa-server",
      color: "#00758f",
      proficiency: 85,
      level: "Hands-on Experience",
      experience: "Internship & Projects",
      tags: ["Relational Schema Design", "Database Normalization", "SQL Optimization", "Queries"],
      description: "Designing normalized relational databases, writing optimized SQL queries, and managing schema design in MySQL and PostgreSQL."
    },
    {
      id: "git",
      name: "Git & GitHub Workflow",
      category: "tools",
      icon: "fa-brands fa-git-alt",
      color: "#f05032",
      proficiency: 88,
      level: "Proficient",
      experience: "Internship & Projects",
      tags: ["Git Workflow", "Version Control", "GitHub", "Code Reviews", "Collaborative Development"],
      description: "Managing source code with Git version control, GitHub repositories, feature branching workflows, code reviews, and debugging."
    },
    {
      id: "maven",
      name: "Apache Maven",
      category: "tools",
      icon: "fa-solid fa-feather-pointed",
      color: "#c71a36",
      proficiency: 84,
      level: "Proficient",
      experience: "Internship & Projects",
      tags: ["POM Management", "Dependency Management", "Build Automation"],
      description: "Managing Java project dependencies, POM configurations, and build lifecycle automation using Apache Maven."
    },
    {
      id: "postman_junit",
      name: "Postman & JUnit",
      category: "tools",
      icon: "fa-solid fa-vial-circle-check",
      color: "#ff6c37",
      proficiency: 82,
      level: "Hands-on Experience",
      experience: "Internship & Projects",
      tags: ["API Testing", "Postman Collections", "JUnit Testing", "Debugging"],
      description: "Testing RESTful API endpoints using Postman and writing unit test cases with JUnit for reliable backend services."
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Java Developer Intern",
      company: "Dollop Infotech",
      location: "Indore, Madhya Pradesh",
      period: "Mar 2026 – Present",
      duration: "Present (Active)",
      type: "Internship",
      skills: ["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "MySQL", "JWT", "Refresh Token", "BCrypt", "RBAC", "Git", "Maven", "Postman"],
      achievements: [
        "Developing Java 17 backend modules and REST APIs using Spring Boot, Spring Data JPA, Hibernate and MySQL.",
        "Implementing Authentication, Authorization, JWT, Refresh Token, BCrypt password encryption and RBAC for secure backend services.",
        "Contributing to Smart Education Platform by developing Authentication, Gamification, Assessment and RBAC modules while collaborating through Git workflow, debugging and code reviews.",
        "Working with layered MVC architecture, Dependency Injection, IoC, input validation, exception handling, Postman and Maven."
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Sales Tracking & Management System",
      category: "spring",
      featured: true,
      image: "assets/project_payment.jpg",
      tags: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "Spring Data JPA", "Hibernate", "JWT", "BCrypt", "RBAC", "Maven", "Git"],
      summary: "Enterprise-style backend for Lead → Deal → Sale lifecycle using layered Controller–Service–Repository architecture.",
      metrics: {
        architecture: "Controller–Service–Repo",
        security: "JWT + BCrypt + RBAC",
        database: "MySQL Relational Design"
      },
      description: "Built an enterprise-style backend for managing the complete Lead → Deal → Sale lifecycle using clean layered Controller–Service–Repository architecture in Spring Boot.",
      highlights: [
        "Developed RESTful CRUD APIs with Spring Data JPA, Hibernate and MySQL following clean Object-Oriented Design principles.",
        "Implemented JWT Authentication, Refresh Token, BCrypt encryption and Role-Based Access Control (RBAC).",
        "Applied pagination, filtering, input validation, exception handling and normalized relational database design for maintainable backend services."
      ],
      githubUrl: "https://github.com/nitinchoudhary-11",
      liveDemoUrl: "#"
    },
    {
      id: "proj-2",
      title: "Smart Education Platform Modules",
      category: "spring",
      featured: true,
      image: "assets/project_inventory.jpg",
      tags: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "Spring Data JPA", "Hibernate", "RBAC", "Git", "Maven"],
      summary: "Enterprise backend modules for Authentication, Gamification, Assessment, and RBAC.",
      metrics: {
        modules: "Auth, Gamification, Assessment",
        security: "RBAC & Security Filter",
        workflow: "Git & Debugging"
      },
      description: "Contributed to Smart Education Platform during internship at Dollop Infotech by developing core backend modules and REST APIs.",
      highlights: [
        "Engineered secure Authentication and Role-Based Access Control (RBAC) modules.",
        "Developed backend services for Gamification and Assessment modules using Spring Boot and MySQL.",
        "Worked with layered MVC architecture, Dependency Injection, IoC, input validation, exception handling, Postman testing, and Git code reviews."
      ],
      githubUrl: "https://github.com/nitinchoudhary-11",
      liveDemoUrl: "#"
    }
  ],

  education: [
    {
      degree: "B.Tech (Information Technology)",
      institution: "Sushila Devi Bansal College of Technology, Indore",
      period: "Aug 2022 – Jun 2026",
      score: "CGPA: 6.5",
      type: "Graduation",
      details: "Focused on Software Development, Object-Oriented Design, Database Systems, Data Structures & Algorithms."
    },
    {
      degree: "Class XII (Higher Secondary Education)",
      institution: "Govt. B.H.S. School, Bhourasa (Dewas)",
      period: "2022",
      score: "73%",
      type: "Schooling",
      details: "Completed Higher Secondary examination with science/mathematics stream."
    },
    {
      degree: "Class X (Secondary Education)",
      institution: "Govt. B.H.S. School, Bhourasa (Dewas)",
      period: "2020",
      score: "88%",
      type: "Schooling",
      details: "Completed Secondary School examination with academic distinction."
    }
  ],

  problemSolving: {
    platform: "LeetCode",
    solvedCount: "100+",
    description: "Solved 100+ LeetCode problems in Java focusing on Data Structures, Algorithms, Collections Framework and Time Complexity optimization."
  },

  apiMockResponses: {
    "/api/v1/developer/skills": {
      status: 200,
      timestamp: new Date().toISOString(),
      developer: "Nitin Choudhary",
      role: "Java Backend Developer",
      primaryStack: "Java 17, Spring Boot, Spring Security",
      databases: ["MySQL", "PostgreSQL"],
      persistence: "Spring Data JPA & Hibernate",
      buildTools: ["Maven", "Git", "Postman", "JUnit"],
      metrics: {
        internshipExperience: "6 Months (Dollop Infotech)",
        leetCodeSolved: "100+ Problems",
        degree: "B.Tech (IT)"
      }
    },
    "/api/v1/projects/featured": {
      status: 200,
      totalProjects: 2,
      featured: [
        { id: 1, name: "Sales Tracking & Management System", stack: "Java 17 + Spring Boot + Spring Security + MySQL" },
        { id: 2, name: "Smart Education Platform Modules", stack: "Java 17 + Spring Boot + Spring Data JPA + RBAC" }
      ]
    },
    "/api/v1/auth/authenticate": {
      status: 200,
      tokenType: "Bearer",
      accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaXRpbi5jaG91ZGhhcnkiLCJyb2xlcyI6WyJST0xFX0pBVkFfREVWRUxPUEVSIl0sImlhdCI6MTY5NTk1ODQwMH0...",
      expiresIn: 3600,
      user: {
        username: "nitinchoudhary",
        role: "ROLE_JAVA_BACKEND_DEVELOPER",
        status: "AUTHENTICATED_SPRING_SECURITY_JWT"
      }
    },
    "/api/v1/database/health": {
      status: 200,
      database: "MySQL / PostgreSQL Relational DB",
      statusDetails: "Normalized Schema (3NF), Indexes Optimized",
      queryPerformance: "HEALTHY (Clean Controller-Service-Repository JPA queries)"
    }
  }
};

