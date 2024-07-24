import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js or Vue.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient, user-friendly web applications. My expertise includes React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity about how things work and has evolved into a career focused on continuous learning and adaptation. I excel in collaborative environments, solving complex problems to deliver high-quality solutions.

In addition to my technical skills, I work well in team settings and international environments. I am proficient in English and Vietnamese and have a basic understanding of German. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "SWI:P Bar Website",
    image: project1,
    description:
      "A almost fully functional bar website with features like ordering giftcards, payment, online booking, reset password, user authentication for user and a dashboard page for admin to able to manage orders: giftcards, user, content, image, onlinebooking( for guests and account user).",
    technologies: ["React Bootstrap", "React", "Node.js", "Mysql"],
    githubLink: "https://github.com/vuduyviet1110/BarWeb",
    githubLink2: "https://github.com/vuduyviet1110/BarWeb_api",
    demo: "https://bar-web-seven.vercel.app/",
  },
  {
    title: "Shirts Store",
    image: project2,
    description:
      "An website for purchasing and custome t-shirts, with features such as customize your own shirts and create order, checkout payment with stripe ...",
    technologies: ["Nextjs14", "Tailwind", "MongoDB", "NextAuth"],
    githubLink: "https://github.com/vuduyviet1110/URshirts",
    demo: "https://u-rshirts.vercel.app/",
  },
  {
    title: "Simple thread",
    image: project3,

    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["nextjs14", "mongodb", "Typescript"],
    githubLink: "https://github.com/vuduyviet1110/thread_clone",
    demo: "https://thread-clone-pi.vercel.app",
  },
  {
    title: "Course Management Website",
    image: project4,
    description:
      "A website that allow you manage coures including add, update, delete, search,...",
    technologies: ["Handlebars", "MongoDB", "Nodejs", "ExpressJs"],
    githubLink: "https://github.com/vuduyviet1110/Learning-Course",
  },
];

export const CONTACT = {
  address: "Tay Mo, Nam Tu Liem, Ha Noi ",
  phoneNo: "0888627494 ",
  email: "vietvuduy9@gmail.com",
};
