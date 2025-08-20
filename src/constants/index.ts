import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
  TCertification,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Crowd$,
  CareConnect,
  Flexiblle,
  HackZ,
  sih,
  download,
  EC,
  B1,
  B2,
  pass_pic,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer  ",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Team Lead (Blockchain Track)",
    companyName: "Hack Z'24 - Anna University",
    icon: HackZ, // Replace with your icon variable
    iconBg: "#1E1E1E", // Dark theme for tech events
    date: "2024",
    points: [
      "Led a 4-member team to **1st Prize** in Blockchain Track at a **national-level hackathon**, competing against 500+ submissions from 324+ colleges.",
      "Designed and implemented a **decentralized solution** (mention briefly, e.g., 'for supply chain transparency' or 'NFT-based certificates').",
      "Collaborated with peers to pitch the project to judges, highlighting **technical innovation** and **real-world applicability**.",
      "Tech Stack: Solidity, Hardhat, React.js (or your actual tools).",
    ],
  },
  {
    title: "Team Member (Full-Stack Developer)",
    companyName: "Smart India Hackathon 2024",
    icon: sih, // Replace with your icon variable
    iconBg: "#0F4C81", // Official SIH blue
    date: "2024",
    points: [
      "Built an **AYUSH Startup Registration Portal** to streamline bureaucratic processes, reducing manual paperwork by ~40% (estimate if possible).",
      "Integrated **user authentication**, **form validation**, and **dashboard analytics** using (mention tech, e.g., MERN stack).",
      "Presented the solution to a panel of industry experts and government officials.",
    ],
  },
  {
    title: "Technology Intern",
    companyName: "Deloitte (Virtual Internship)",
    icon: download, // Replace with your icon variable
    iconBg: "#86B817", // Deloitte green
    date: "2023", // Adjust date
    points: [
      "Completed a **virtual internship** focused on (mention domain, e.g., 'blockchain use cases in enterprise' or 'cloud infrastructure').",
      "Analyzed client requirements and proposed **scalable solutions** aligned with industry best practices.",
      "Delivered a final presentation on (mention topic, e.g., 'optimizing workflows with AI tools').",
    ],
  },
];

const certifications: TCertification[] = [
  {
    name: "CEH v12 Certification",
    title: "Certified Ethical Hacker (CEH v12)",
    issuer: "EC-Council",
    score: "121/125",
    image: EC,
    credentialLink: "https://drive.google.com/file/d/1cexcCHNBg9RbV5bDRrD4jpLG8JJMSbQp/view?usp=drive_link",
  },
  {
    name: "IBM Blockchain Developer Certification",
    title: "IBM Blockchain Developer",
    issuer: "IBM",
    score: "Completed",
    image: B1, 
    credentialLink: "https://courses.ibmcep.cognitiveclass.ai/certificates/dc69c99647ea4703a92735fc5f21c361", 
  },
  {
    name: "IBM Blockchain Fundamentals Certificate",
    title: "IBM Blockchain Fundamentals",
    issuer: "IBM", 
    score: "Completed",
    image: B2,
    credentialLink: "https://courses.ibmcep.cognitiveclass.ai/certificates/54677b22d5b74b8ab89dd677e77fe722",
  },
];

const projects: TProject[] = [
  {
    name: "Crowd$: Web3 Crowdfunding Platform",
    description:
      "A blockchain-based crowdfunding platform that allows users to create, manage, and donate to campaigns using smart contracts for secure and transparent transactions.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "thirdweb",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "metamask",
        color: "green-text-gradient",
      },
    ],
    image: Crowd$, // Replace with your image import
    sourceCodeLink: "https://github.com/your-repo-link", // Add your repo link
  },
  {
    name: "CareConnect: Healthcare App",
    description:
      "A full-stack healthcare application enhancing patient-doctor engagement by 40% with real-time appointment alerts, streamlined communication, and optimized data workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "twilio",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
    ],
    image: CareConnect, // Replace with your image import
    sourceCodeLink: "https://github.com/your-repo-link", // Add your repo link
  },
  {
    name: "Flexible: Company Website",
    description:
      "A dynamic company website with interactive service showcases, hybrid GraphQL + SQL backend for 3x faster queries, and a professional UI improving engagement by 25%.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: Flexiblle, // Replace with your image import
    sourceCodeLink: "https://github.com/your-repo-link", // Add your repo link
  },
];

export { services, technologies, experiences, certifications, projects };
