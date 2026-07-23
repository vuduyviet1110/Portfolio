const project1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkITPKu8ev8zRvBy4yt1OA5ioY9n57F6_qLFksCDT0PyqbdrBTJ1SUM8&s=10";
const project2 = "https://file-dangcongsan.nhandan.vn/data/0/images/2024/06/05/upload_2683/b.jpg";
const project3 = "https://image.bnews.vn/MediaUpload/Org/2022/04/26/logo-bidv-20220426071253.jpg";
const project4 = "https://www.elemental.org.uk/wp-content/uploads/2025/09/GettyImages-1428644362-scaled-1-1280x853.jpg";

export const HERO_CONTENT = `Full-stack / Web Developer with 2 years of experience in JavaScript, TypeScript, and Python (Odoo), specializing in modern frontend frameworks and backend integration. I leverage my technical expertise to build responsive, user-friendly, and high-performance applications that meet demanding business requirements.`;

export const ABOUT_TEXT = `I am a Full-stack / Web Developer with 2 years of hands-on experience building modern, responsive, and robust web applications. Graduating with a Bachelor's degree in Information Technology from Hanoi University (HANU), I have gained strong fundamental knowledge and practical experience across frontend development (React.js, Next.js, Vue.js, Angular) and backend services (Node.js, NestJS, Odoo/Python).

I thrive in agile, collaborative environments and enjoy solving challenging technical problems. With professional English proficiency (equivalent to C1 / IELTS 6.5) and a basic understanding of German (A2), I am well-equipped to collaborate with international teams and adapt quickly to new technologies and workflows.`;

export const EDUCATION = {
  school: "HANU - Ha Noi University",
  duration: "2021 - 2025",
  major: "Information Technology",
  gpa: "2.9",
};

export const EXPERIENCES = [
  {
    year: "7/2024 - Present",
    role: "Web Developer (Full Stack)",
    company: "Zen8labs",
    description: [
      "Developed and maintained responsive web applications, ensuring cross-browser and cross-platform compatibility.",
      "Customized and developed custom Odoo ERP modules (healthcare, inventory, sales) using Python and PostgreSQL.",
      "Collaborated with cross-functional teams to troubleshoot and implement efficient front-end and back-end solutions.",
      "Built and maintained robust server-side APIs, integrated databases, and configured containerized deployment stacks using Docker Compose."
    ],
    technologies: ["JavaScript", "TypeScript", "Reactjs", "Nextjs", "Vue", "NestJS", "Python", "Odoo", "PostgreSQL", "Docker"],
  }
];

export const PROJECTS = [
  {
    title: "iCare — Clinic & Pharmacy Management System",
    duration: "04/2026 - Present",
    role: "Odoo Developer",
    image: project1,
    teamSize: 7,
    description:
      "ERP system for managing clinics (obstetrics, ophthalmology) and pharmacies, built on Odoo 17 with Docker Compose (Odoo 17 + PostgreSQL 15). Supports patient management, appointments, electronic medical records, prescriptions, sales, inventory, invoicing, HR and national drug data sync.",
    responsibilities: [
      "Developed 40+ custom addons with healthcare business logic: appointment, medical record, medical order, product, stock, sale, invoice, QR, SMS, REST API, drugs national sync management.",
      "Customized container entrypoint: host–container UID/GID mapping, auto-upgrade modules, manage filestore/logs/sessions.",
      "Integrated AWS S3, PayOS, REST API, and synced pharmacy data with national system."
    ],
    technologies: ["Odoo 17", "Python", "PostgreSQL 15", "AWS S3", "Docker Compose"],
    demo: "https://vitravu.vercel.app",
  },
  {
    title: "Voice-Bio (Bộ Công An)",
    duration: "11/2025 - 04/2026",
    role: "Full-stack Developer",
    image: project2,
    teamSize: 15,
    description:
      "Developed and deployed the Voice Biometrics Management System integrated into the national digital citizen portal (VNeID) and the Ministry of Public Security's contact center of Vietnam. The system manages the registration, authentication, and governance of citizen voice data, supporting critical workflows such as application login, caller identification, and automatic population data extraction.",
    responsibilities: [
      "Implemented front-end features using Vue.js (Nuxt.js) and Vuetify based on assigned tasks and design specifications.",
      "Developed and integrated robust backend features and RESTful APIs using NestJS and PostgreSQL.",
      "Built and maintained reusable UI components (custom input fields, file uploaders, and audio players) to ensure consistency across the application.",
      "Collaborated on error handling, security, database optimization, and multipart file upload workflows."
    ],
    technologies: ["HTML5", "SCSS", "JavaScript (ES6+)", "Vue.js (Nuxt.js)", "NestJS", "PostgreSQL", "Vuex", "Vuetify", "WaveSurfer.js", "Docker"],
  },
  {
    title: "IBANK 2.0 (BIDV)",
    duration: "04/2025 - 10/2025",
    role: "Front-end Developer",
    image: project3,
    teamSize: 50,
    description:
      "Designed and implemented a comprehensive Banking Card Service Management System, empowering Front Office and Back Office departments to manage transaction reports, dispute cases, service requests, and iframe-based embedded modules. Delivered a scalable, intuitive platform that improved operational efficiency across core card-related workflows.",
    responsibilities: [
      "Delivered front-end features aligned with strict banking business requirements using Angular and RxJS.",
      "Coordinated closely with backend teams, proactively pushing API development and integration progress.",
      "Proposed and implemented efficient technical solutions based on client needs."
    ],
    technologies: ["HTML", "SCSS", "TypeScript", "Angular", "RxJS", "Taiga UI"],
  },
  {
    title: "ESG Data & Reporting Management Platform",
    duration: "10/2024 - 02/2025",
    role: "Front-end Developer",
    image: project4,
    teamSize: 8,
    description:
      "Developed an internal ESG (Environmental, Social, and Governance) Reporting & Analytics Platform that enables enterprises to collect, calculate, and visualize sustainability metrics such as electricity/water consumption, safety compliance, and organizational hierarchy. The system integrates with external services (Azure, Odoo), uses AI evaluation to analyze performance, and includes real-time notifications.",
    responsibilities: [
      "Implemented and optimized front-end modules for data visualization, reporting dashboards, and ESG metric management using Next.js and Tailwind CSS.",
      "Integrated APIs and managed state synchronization with Redux Toolkit and TanStack Query for dynamic data updates.",
      "Collaborated closely with backend and AI teams to define data structures and ensure seamless integration."
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "Shadcn UI", "Firebase"],
  },
];

export const CONTACT = {
  address: "Ha Noi, Viet Nam",
  phoneNo: "0888627494",
  email: "vietvuduy9@gmail.com",
};
