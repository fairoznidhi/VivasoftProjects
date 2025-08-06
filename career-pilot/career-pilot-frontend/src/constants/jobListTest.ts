import type { Job } from "@/types/jobs/matchedJobs";

export const jobs:Job[] = [
  {
    role: "Senior Frontend Developer",
    match: "95%",
    company: "Techcorp Inc.",
    location: "San Francisco, CA",
    posted: "2 days ago",
    type: "Full-time",
    salary: "$120k-$160k",
    description:
      "Join our dynamic team as a Senior Frontend Developer! We are seeking an experienced professional who is passionate about creating exceptional user experiences. In this role, you will collaborate with designers and backend developers to build responsive and visually appealing web applications. If you have a strong background in JavaScript, HTML, and CSS, and thrive in a fast-paced environment, we want to hear from you!",
    interviewDetails: {
      difficultyLevel: "Intermediate",
      interviewStages: [
        {
          stage: 1,
          name: "HR Interview",
          description:
            "Candidates typically engage in a conversation about their background, skills, and cultural fit within the organization. The interviewer usually asks around 5 to 10 questions, covering topics such as teamwork, problem-solving, and career aspirations.",
        },
        {
          stage: 2,
          name: "Technical Interview",
          description:
            "A coding-focused interview with 2-3 problems on JavaScript, React, and UI design patterns. Expect questions on state management and performance optimization.",
        },
        {
          stage: 3,
          name: "Final Interview",
          description:
            "A discussion with senior leadership to assess alignment with company vision and leadership skills. Includes behavioral questions and a project discussion.",
        },
      ],
    },
    jobDescription: {
      description:
        "Step into a pivotal role in our forward-thinking team as a Lead UI Engineer! We’re searching for a talented individual who is passionate about designing exceptional user interfaces. In this role, you will collaborate closely with designers and backend engineers to develop elegant, responsive web applications.",
      responsibilities: [
        "Combine the art of design with programming to build user-friendly interfaces.",
        "Translate business logic into functional frontend designs using HTML, CSS, JavaScript, and React.",
        "Build and maintain responsive user interfaces, optimize front-end performance, and document the codebase.",
        "Write high-quality, efficient, and maintainable JavaScript code.",
        "Mentor junior developers and collaborate effectively with the development team.",
      ],
      requirements: [
        "Strong proficiency in JavaScript, DOM manipulation, data structures, and algorithms.",
        "Deep knowledge of React, including hooks, context, and component lifecycle.",
        "Bachelor’s degree in Computer Science or related field.",
        "Experience with RESTful APIs, GraphQL, HTML/CSS, ES6, and tools like Webpack, Node, and Git.",
        "5+ years of frontend development experience.",
        "Familiarity with TypeScript, NgRx, and code review processes.",
        "Up-to-date with the latest web development trends.",
        "Strong problem-solving and troubleshooting skills.",
        "Team activities like hackathons or tech meetups are a plus.",
      ],
    },
  },
  {
    role: "Backend Software Engineer",
    match: "88%",
    company: "DataWave Solutions",
    location: "Austin, TX",
    posted: "5 days ago",
    type: "Full-time",
    salary: "$110k-$150k",
    description:
      "We’re looking for a Backend Software Engineer to join our innovative team! You’ll design and build scalable APIs and microservices to power our data-driven applications. If you’re skilled in Node.js, Python, or Java and passionate about building robust systems, this role is for you.",
    interviewDetails: {
      difficultyLevel: "Advanced",
      interviewStages: [
        {
          stage: 1,
          name: "Initial Screening",
          description:
            "A 30-minute call with HR to discuss your experience, technical background, and interest in the role. Expect questions on your past projects and motivations.",
        },
        {
          stage: 2,
          name: "Coding Interview",
          description:
            "A 1-hour technical interview with coding problems on data structures, algorithms, and API design. Focus on system scalability and database optimization.",
        },
        {
          stage: 3,
          name: "System Design Interview",
          description:
            "A deep dive into designing a scalable backend system. You’ll discuss architecture, trade-offs, and technologies like Docker and AWS.",
        },
      ],
    },
    jobDescription: {
      description:
        "As a Backend Software Engineer, you’ll play a key role in developing and maintaining our server-side infrastructure. You’ll work on high-performance APIs and ensure our systems are secure and scalable.",
      responsibilities: [
        "Design, develop, and maintain RESTful APIs and microservices.",
        "Optimize database queries and manage data storage solutions (SQL/NoSQL).",
        "Collaborate with frontend teams to ensure seamless integration.",
        "Implement security best practices and monitor system performance.",
        "Write unit and integration tests to ensure code reliability.",
      ],
      requirements: [
        "Proficiency in Node.js, Python, or Java.",
        "Experience with databases like PostgreSQL, MongoDB, or DynamoDB.",
        "Bachelor’s degree in Computer Science or equivalent experience.",
        "Knowledge of cloud platforms (AWS, Azure, or GCP).",
        "3+ years of backend development experience.",
        "Familiarity with Docker, Kubernetes, and CI/CD pipelines.",
        "Strong understanding of RESTful and GraphQL APIs.",
        "Excellent problem-solving skills and attention to detail.",
        "Experience with Agile methodologies is a plus.",
      ],
    },
  },
  {
    role: "Full Stack Developer",
    match: "92%",
    company: "InnovateTech",
    location: "Remote",
    posted: "1 week ago",
    type: "Contract",
    salary: "$50-$70/hour",
    description:
      "Join InnovateTech as a Full Stack Developer to build end-to-end web applications! You’ll work on both frontend and backend, delivering seamless user experiences and robust server-side logic. Perfect for a versatile developer who loves tackling diverse challenges.",
    interviewDetails: {
      difficultyLevel: "Intermediate",
      interviewStages: [
        {
          stage: 1,
          name: "HR Discussion",
          description:
            "A casual conversation to understand your background, career goals, and fit with our remote culture. Expect 5-7 questions on teamwork and adaptability.",
        },
        {
          stage: 2,
          name: "Technical Assessment",
          description:
            "A coding challenge covering both frontend (React) and backend (Node.js) tasks. You’ll build a small feature and explain your approach.",
        },
        {
          stage: 3,
          name: "Team Interview",
          description:
            "A collaborative session with the dev team to discuss your coding challenge, problem-solving approach, and experience with full-stack workflows.",
        },
      ],
    },
    jobDescription: {
      description:
        "As a Full Stack Developer, you’ll take ownership of building and maintaining our web applications, from UI to database. You’ll work in a collaborative, remote-friendly environment to deliver high-quality solutions.",
      responsibilities: [
        "Develop responsive frontends using React and TypeScript.",
        "Build and maintain Node.js-based APIs and server logic.",
        "Integrate third-party services and APIs.",
        "Optimize application performance across the stack.",
        "Collaborate with product managers and designers to define features.",
      ],
      requirements: [
        "Proficiency in JavaScript, TypeScript, React, and Node.js.",
        "Experience with databases (e.g., MySQL, MongoDB).",
        "3+ years of full-stack development experience.",
        "Familiarity with RESTful APIs and GraphQL.",
        "Knowledge of Git and version control workflows.",
        "Ability to work independently in a remote setting.",
        "Strong communication skills for cross-functional collaboration.",
        "Experience with testing frameworks (Jest, Mocha) is a plus.",
      ],
    },
  },
  {
    role: "DevOps Engineer",
    match: "85%",
    company: "CloudPeak Systems",
    location: "Seattle, WA",
    posted: "3 days ago",
    type: "Full-time",
    salary: "$130k-$170k",
    description:
      "We’re seeking a DevOps Engineer to streamline our development and deployment pipelines. You’ll design and manage CI/CD workflows, optimize cloud infrastructure, and ensure high availability. If you’re passionate about automation and cloud technologies, join us!",
    interviewDetails: {
      difficultyLevel: "Advanced",
      interviewStages: [
        {
          stage: 1,
          name: "HR Screening",
          description:
            "A 30-minute call to discuss your experience with DevOps tools, cloud platforms, and career goals.",
        },
        {
          stage: 2,
          name: "Technical Interview",
          description:
            "A hands-on session with tasks on containerization (Docker), orchestration (Kubernetes), and scripting (Bash/Python).",
        },
        {
          stage: 3,
          name: "Architecture Review",
          description:
            "A discussion on designing a scalable CI/CD pipeline and handling production incidents.",
        },
      ],
    },
    jobDescription: {
      description:
        "As a DevOps Engineer, you’ll ensure our applications are deployed efficiently and reliably. You’ll work with cutting-edge cloud technologies and automation tools to support our growing platform.",
      responsibilities: [
        "Design and maintain CI/CD pipelines using Jenkins or GitHub Actions.",
        "Manage cloud infrastructure on AWS or GCP.",
        "Implement monitoring and logging solutions (e.g., Prometheus, ELK).",
        "Automate infrastructure provisioning with Terraform or Ansible.",
        "Collaborate with developers to improve deployment processes.",
      ],
      requirements: [
        "Experience with Docker, Kubernetes, and cloud platforms (AWS, GCP).",
        "Proficiency in scripting (Bash, Python, or similar).",
        "3+ years of DevOps or SRE experience.",
        "Knowledge of CI/CD tools (Jenkins, GitHub Actions, CircleCI).",
        "Familiarity with Infrastructure as Code (Terraform, CloudFormation).",
        "Strong problem-solving skills and incident response experience.",
        "Bachelor’s degree in Computer Science or related field.",
        "Certifications like AWS DevOps or Kubernetes (CKA) are a plus.",
      ],
    },
  },
  {
    role: "Data Scientist",
    match: "90%",
    company: "AI Innovations",
    location: "Boston, MA",
    posted: "4 days ago",
    type: "Full-time",
    salary: "$140k-$180k",
    description:
      "Join AI Innovations as a Data Scientist to build cutting-edge machine learning models! You’ll analyze complex datasets, develop predictive algorithms, and contribute to our AI-driven products. If you’re passionate about data and innovation, this is your chance to make an impact.",
    interviewDetails: {
      difficultyLevel: "Advanced",
      interviewStages: [
        {
          stage: 1,
          name: "HR Screening",
          description:
            "A 30-minute discussion about your background, data science experience, and alignment with our mission. Expect questions on past projects and motivations.",
        },
        {
          stage: 2,
          name: "Technical Interview",
          description:
            "A 1-hour session with coding problems on Python, data manipulation, and machine learning concepts. You’ll solve 2-3 problems using Pandas or Scikit-learn.",
        },
        {
          stage: 3,
          name: "Case Study",
          description:
            "A take-home or live case study to design a machine learning pipeline, followed by a discussion on your approach, model selection, and evaluation metrics.",
        },
      ],
    },
    jobDescription: {
      description:
        "As a Data Scientist, you’ll drive innovation by developing machine learning models and analyzing large datasets. You’ll work closely with product teams to deliver actionable insights and scalable AI solutions.",
      responsibilities: [
        "Develop and deploy machine learning models for predictive analytics.",
        "Analyze large datasets to identify trends and patterns.",
        "Collaborate with engineers to integrate models into production systems.",
        "Optimize algorithms for performance and accuracy.",
        "Present findings to stakeholders in clear, actionable reports.",
      ],
      requirements: [
        "Proficiency in Python, R, or similar data science languages.",
        "Experience with machine learning frameworks (Scikit-learn, TensorFlow, PyTorch).",
        "3+ years of data science or analytics experience.",
        "Knowledge of statistical methods and data visualization tools (e.g., Tableau, Matplotlib).",
        "Familiarity with SQL and big data tools (e.g., Spark, Hadoop).",
        "Bachelor’s or Master’s degree in Data Science, Statistics, or related field.",
        "Strong problem-solving and communication skills.",
        "Experience with A/B testing and experimentation is a plus.",
      ],
    },
  },
  {
    role: "Mobile App Developer",
    match: "87%",
    company: "AppVantage",
    location: "New York, NY",
    posted: "6 days ago",
    type: "Full-time",
    salary: "$115k-$155k",
    description:
      "AppVantage is seeking a Mobile App Developer to create engaging iOS and Android applications! You’ll build intuitive mobile experiences using React Native or Swift. If you love crafting user-friendly apps and have a knack for mobile UI, join our team!",
    interviewDetails: {
      difficultyLevel: "Intermediate",
      interviewStages: [
        {
          stage: 1,
          name: "Initial Interview",
          description:
            "A 30-minute call with HR to discuss your mobile development experience and passion for app creation. Expect questions on app lifecycle and user experience.",
        },
        {
          stage: 2,
          name: "Coding Challenge",
          description:
            "A live or take-home coding task to build a small mobile feature using React Native or Swift. Focus on UI, state management, and API integration.",
        },
        {
          stage: 3,
          name: "Team Fit Interview",
          description:
            "A discussion with the mobile team to review your coding challenge, discuss mobile architecture, and assess collaboration skills.",
        },
      ],
    },
    jobDescription: {
      description:
        "As a Mobile App Developer, you’ll design and build high-quality iOS and Android applications. You’ll collaborate with designers and backend teams to deliver seamless mobile experiences.",
      responsibilities: [
        "Develop and maintain mobile apps using React Native or Swift.",
        "Implement responsive and intuitive UI/UX designs.",
        "Integrate RESTful APIs and third-party services.",
        "Optimize app performance and ensure cross-platform compatibility.",
        "Write unit tests and debug issues to ensure app reliability.",
      ],
      requirements: [
        "Proficiency in React Native, Swift, or Kotlin.",
        "Experience with mobile app development (iOS or Android).",
        "3+ years of mobile development experience.",
        "Knowledge of RESTful APIs and mobile app architecture.",
        "Familiarity with Git and CI/CD for mobile apps.",
        "Strong understanding of UI/UX principles.",
        "Bachelor’s degree in Computer Science or related field.",
        "Experience with Flutter or cross-platform frameworks is a plus.",
      ],
    },
  },
  {
    role: "Cybersecurity Analyst",
    match: "89%",
    company: "SecureNet Solutions",
    location: "Chicago, IL",
    posted: "2 days ago",
    type: "Full-time",
    salary: "$100k-$140k",
    description:
      "SecureNet Solutions is hiring a Cybersecurity Analyst to protect our digital assets! You’ll monitor threats, implement security measures, and respond to incidents. If you’re passionate about cybersecurity and have a keen eye for detail, we want you on our team.",
    interviewDetails: {
      difficultyLevel: "Advanced",
      interviewStages: [
        {
          stage: 1,
          name: "HR Screening",
          description:
            "A 30-minute discussion about your cybersecurity experience, certifications, and interest in the role.",
        },
        {
          stage: 2,
          name: "Technical Assessment",
          description:
            "A hands-on session to analyze a mock security incident, configure firewalls, or write scripts for threat detection.",
        },
        {
          stage: 3,
          name: "Scenario-Based Interview",
          description:
            "A discussion on handling real-world security scenarios, including threat analysis and mitigation strategies.",
        },
      ],
    },
    jobDescription: {
      description:
        "As a Cybersecurity Analyst, you’ll safeguard our systems by identifying vulnerabilities, monitoring threats, and implementing robust security protocols.",
      responsibilities: [
        "Monitor network traffic for suspicious activity.",
        "Implement and maintain security tools like firewalls and SIEM systems.",
        "Conduct vulnerability assessments and penetration testing.",
        "Respond to and investigate security incidents.",
        "Develop security policies and train staff on best practices.",
      ],
      requirements: [
        "Experience with cybersecurity tools (e.g., Splunk, Wireshark, Nessus).",
        "Knowledge of network protocols, firewalls, and encryption.",
        "2+ years of cybersecurity or IT experience.",
        "Familiarity with cloud security (AWS, Azure).",
        "Certifications like CISSP, CEH, or CompTIA Security+ are a plus.",
        "Strong analytical and problem-solving skills.",
        "Bachelor’s degree in Cybersecurity, IT, or related field.",
        "Experience with incident response frameworks is a plus.",
      ],
    },
  },
  {
    role: "Product Manager - Tech",
    match: "93%",
    company: "GrowEasy Analytics",
    location: "Remote",
    posted: "1 week ago",
    type: "Full-time",
    salary: "$130k-$170k",
    description:
      "GrowEasy Analytics is looking for a Product Manager to lead the development of our analytics platform! You’ll define product roadmaps, collaborate with engineering and design teams, and drive customer-centric solutions. If you’re a strategic thinker with a passion for tech, apply now!",
    interviewDetails: {
      difficultyLevel: "Intermediate",
      interviewStages: [
        {
          stage: 1,
          name: "HR Interview",
          description:
            "A 30-minute call to discuss your product management experience, leadership style, and interest in analytics.",
        },
        {
          stage: 2,
          name: "Product Case Study",
          description:
            "A case study to design a feature for an analytics platform, including prioritization and user stories.",
        },
        {
          stage: 3,
          name: "Stakeholder Interview",
          description:
            "A discussion with senior leaders to assess your ability to align product vision with business goals.",
        },
      ],
    },
    jobDescription: {
      description:
        "As a Product Manager, you’ll shape the future of our analytics platform by defining features, managing backlogs, and ensuring successful delivery.",
      responsibilities: [
        "Define and prioritize product features based on user needs and business goals.",
        "Collaborate with engineering, design, and marketing teams to deliver solutions.",
        "Create and maintain product roadmaps and user stories.",
        "Analyze user feedback and metrics to iterate on features.",
        "Lead cross-functional teams in Agile development processes.",
      ],
      requirements: [
        "3+ years of product management experience in tech.",
        "Experience with analytics platforms or SaaS products.",
        "Strong understanding of Agile methodologies and tools (Jira, Trello).",
        "Ability to translate technical concepts to non-technical stakeholders.",
        "Bachelor’s degree in Business, Computer Science, or related field.",
        "Excellent communication and leadership skills.",
        "Familiarity with UX design principles is a plus.",
        "MBA or technical background is a bonus.",
      ],
    },
  },
];
