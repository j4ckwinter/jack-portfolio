import type { WorkExperienceEntry } from "./work-experience.types";

export const profileSummary =
  "Results-driven Senior Software Engineer with 8+ years of experience specialising in TypeScript, Angular and Node.js. Proven ability to design and optimise scalable, high-performance frontend applications, improving both user experience and performance optimisation. Strong advocate for clean, maintainable code, Agile development, and collaborative development. Passionate about leveraging data insight and user feedback to drive continuous improvement in web development.";

export const workExperience: WorkExperienceEntry[] = [
  {
    title: "Senior Front-End Developer, KTO, Remote",
    tagline: "Sportsbook and casino games provider.",
    dateRange: "June 2025 – Present",
    bullets: ["Description to be added."],
  },
  {
    title: "Senior Front-End Developer, GeoGaming Group, London",
    tagline:
      "Sportsbook and casino games provider developing white label solution.",
    dateRange: "June 2023 – May 2025",
    bullets: [
      "Led performance optimisations, reducing load times by 30% and improving overall UX.",
      "Developed and modernised frontend architecture, introducing efficient bundling strategies and lazy loading to optimise performance.",
      "Enhanced unit test coverage from 25% to 75%, implementing Jest and Cypress for end-to-end and integration testing.",
      "Designed and developed dynamic, real-time UI components using RxJS, WebSockets, and REST APIs for seamless data streaming.",
      "Mentored junior developers, conducting code reviews and promoting best practices in frontend engineering.",
    ],
  },
  {
    title: "Senior Software Engineer, SmartStream Technologies, Bristol",
    tagline:
      "Fintech developing cash and liquidity management solution for major banks.",
    dateRange: "July 2017 – Aug 2022",
    bullets: [
      "Led the development of a complete greenfield Angular front-end project, replacing a legacy system and directly enabling the successful acquisition of two high-profile deals.",
      "Designed and developed in-house tools using React and Node.js to streamline internal workflows, improving team efficiency.",
      "Conducted interviews for candidates across junior to senior developer roles.",
      "Developed a machine learning model prototype for improving transaction forecast accuracy, resulting in more reliable predictions for major banking clients.",
      "Collaborated closely with DevOps teams to resolve critical system issues, ensuring 24/7 reliability by providing on-call support.",
    ],
  },
];
