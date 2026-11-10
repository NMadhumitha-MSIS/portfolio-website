export const profile = {
  name: "Madhumitha Nandhikatti",
  focus: "Software engineer",
  headline: "I build technology, and I make it easy for clients to understand and use.",
  intro: "I understand how the code works. What I enjoy most is the person on the other side: learning what they need, explaining the technology in plain words, and helping them get real value from it.",
  about: "I hold a Master of Science in Information Systems from Northeastern University and have worked across backend development, data, cloud, and AI. That background lets me talk with engineers in their language, and then turn what we build into something the people using it can understand and trust.",
  contactNote: "Whether you have a role in mind, a project to talk through, or just want to connect, I would love to hear from you.",
  location: "Boston, MA",
  github: "https://github.com/NMadhumitha-MSIS",
  linkedin: "https://www.linkedin.com/in/n-madhumitha/",
  email: "madhumithanandhikatti@gmail.com",
  photo: ""
};

export const strengths = [
  {
    title: "I speak both languages",
    text: "I can read the code and follow the architecture, then explain it clearly to someone who has never written a line of it."
  },
  {
    title: "I start with the client",
    text: "Before building anything, I ask who will use it and what they need to get done. My projects are built around real people, from caregivers to small business owners."
  },
  {
    title: "I test in the real world",
    text: "I check ideas against real data and real websites, and I am honest about what a tool can and cannot do."
  }
];

export const featured = {
  title: "Access Checker",
  tagline: "Accessibility reports that small business owners can actually understand.",
  problem: "Most small business websites have barriers that shut out people with disabilities, and existing tools describe them in technical language that owners cannot act on.",
  solution: "Access Checker scans a website in a real browser and turns every problem into a plain English explanation: what is wrong, why it matters, and what to ask a web designer to fix.",
  highlights: [
    "Field tested on real Boston area businesses, including dental offices, salons, and bakeries, where low contrast text was the most common problem",
    "Caught a scan quietly checking a security page instead of the real site, and changed the tool to say so clearly rather than give a misleading report",
    "The tool's own page passes its own accessibility scan"
  ],
  stats: [
    { value: "9", label: "local business websites tested" },
    { value: "7 of 8", label: "scannable sites had problems" },
    { value: "26", label: "accessibility rules explained in plain English" }
  ],
  tags: ["Node.js", "Express", "Puppeteer", "Axe", "JavaScript"],
  link: "https://github.com/NMadhumitha-MSIS/access-checker"
};

export const projects = [
  {
    title: "Drug Interaction Checker",
    summary: "Helps caregivers without medical training check whether medicines are safe to take together, in plain English, with every claim cited to official FDA labels.",
    result: "Blocks the answer and warns the user if any FDA label fails to load, so caregivers never get a silently incomplete result.",
    tags: ["Python", "LangChain", "RAG", "LLaMA 3.1"],
    link: "https://github.com/Gagana2572/Drug-Interaction-Checker"
  },
  {
    title: "GovSpend",
    summary: "Turns raw US federal contract data into a dashboard anyone can explore by agency and recipient.",
    result: "Processed over $679.5B in government awards from the USASpending.gov API.",
    tags: ["Python", "PostgreSQL", "Streamlit"],
    link: "https://github.com/NMadhumitha-MSIS/govspend"
  },
  {
    title: "Ecommerce Customer Insights",
    summary: "Analyzed over 3 million Instacart orders to understand who the most valuable customers are and when demand peaks.",
    result: "Found a loyal VIP group and peak ordering hours to guide retention, staffing, and inventory planning.",
    tags: ["Python", "pandas", "Machine Learning"],
    link: "https://github.com/NMadhumitha-MSIS/instacart-customer-behavior-ml"
  }
];

export const experience = [
  {
    company: "YourPassion1st",
    role: "Software Engineer and Technology Team Cochair",
    dates: "Aug 2026 to Present",
    place: "Remote, part time",
    points: [
      "Lead standups, onboarding, and team meetings, and share progress and plans with other teams across the organization",
      "Help teammates get past technical blockers through individual troubleshooting sessions",
      "Fix bugs and test APIs across the app as it moves toward its App Store release"
    ]
  },
  {
    company: "Nu10 Technologies",
    role: "Software Engineer Intern",
    dates: "Feb 2024 to May 2024",
    place: "Bengaluru, India",
    points: [
      "Built and improved Java Spring Boot microservices and REST APIs",
      "Improved PostgreSQL query performance and added MongoDB for scalable backend services",
      "Prototyped a Python LLM chatbot for internal knowledge and Q&A"
    ]
  },
  {
    company: "Entrepreneurship Cell, BMSIT&M",
    role: "Cloud and DevOps Intern",
    dates: "Apr 2023 to Feb 2024",
    place: "Bengaluru, India",
    points: [
      "Supported deployment of a Node.js app on AWS with Terraform, CI/CD automation, and monitoring",
      "Gathered engagement data from Instagram and LinkedIn and stored it in AWS S3 for analysis"
    ]
  }
];

export const education = [
  {
    school: "Northeastern University",
    degree: "Master of Science, Information Systems",
    dates: "Sep 2024 to May 2026",
    highlight: "Coursework in application engineering, cloud computing, data management, UX design, Agile development, and AI."
  },
  {
    school: "BMS Institute of Technology and Management",
    degree: "Bachelor of Engineering, Information Science and Engineering",
    dates: "Dec 2020 to May 2024",
    highlight: "Led art and decor for Vistara, coordinated dance for Utsaha, and coordinated hospitality for CodeRed'24."
  }
];