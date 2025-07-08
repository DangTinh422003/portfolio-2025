import { type ReactNode } from "react";

import { type Project } from "@/components/Projects";

export interface Info {
  count: number;
  label: ReactNode;
}

export const INFOS: Info[] = [
  {
    count: 3,
    label: "YEARS OF EXPERIENCE",
  },
  {
    count: 42,
    label: "COMPLETED PROJECTS",
  },
  {
    count: 2,
    label: "CERTIFICATES",
  },
  {
    count: 3,
    label: "AWARD WON",
  },
];

export const PERSONAL_INFOS = [
  {
    title: "National",
    value: "Vietnam",
  },
  {
    title: "First name",
    value: "Tinh",
  },
  {
    title: "Last name",
    value: "Cao Dang",
  },
  {
    title: "Address",
    value: "District 7, Ho Chi Minh City",
  },
  {
    title: "Phone",
    value: "0862040542",
  },
  {
    title: "Major",
    value: "Computer Science",
  },
  {
    title: "Jobs",
    value: "Fullstack Web Developer",
  },
];

export const SKILLS = [
  { url: "/skills/CSS.png", title: "CSS" },
  { url: "/skills/HTML5.png", title: "HTML5" },
  { url: "/skills/javascript.svg", title: "Javascript" },
  { url: "/skills/Typescript.png", title: "Typescript" },
  { url: "/skills/java.png", title: "Java" },

  { url: "/skills/axios.png", title: "Axios" },
  { url: "/skills/React.png", title: "React" },
  { url: "/skills/redux.svg", title: "Redux" },

  { url: "/skills/sass.png", title: "Sass" },
  { url: "/skills/Tailwind.png", title: "Tailwind" },

  { url: "/skills/nextjs.svg", title: "Nextjs" },
  { url: "/skills/nest.svg", title: "Nestjs" },
  { url: "/skills/nodejs.webp", title: "Nodejs" },

  { url: "/skills/redis.png", title: "Redis" },
  { url: "/skills/supabase.png", title: "Supabase" },
  { url: "/skills/firebase.png", title: "Firebase" },
  { url: "/skills/mongodb.svg", title: "MongoDB" },
  { url: "/skills/mysql.webp", title: "MySQL" },
  { url: "/skills/Postgresql.png", title: "PostgreSQL" },

  { url: "/skills/git.png", title: "Git" },
  { url: "/skills/docker.webp", title: "Docker" },
  { url: "/skills/jenkins.png", title: "Jenkins" },
  { url: "/skills/kuber.svg", title: "Kubernetes" },

  { url: "/skills/aws.png", title: "AWS" },
  { url: "/skills/ubuntu.png", title: "Ubuntu OS" },
];

export const EXPERIENCES = [
  {
    time: "Feb 2021",
    title: "TON DUC THANG",
    subTitle: "UNIVERSITY",
    description:
      "Started studying at Ton Duc Thang University, majoring in Computer Science.",
  },
  {
    time: "Nov 2021",
    title: "MENTOR",
    subTitle: "ICON CLUB",
    description:
      "Became a mentor at Icon Club, guiding junior members in their learning journey.",
  },
  {
    time: "Aug 2022",
    title: "WEB TECHNICAL",
    subTitle: "CODEMELY",
    description:
      "Joined the largest IT student community in Vietnam as a WEB TECHNICAL member. Participated in building and developing community projects, as well as sharing knowledge and experience in learning.",
  },
  {
    time: "Nov 2022",
    title: "INTERNSHIP web developer",
    subTitle: "Alta Software",
    description:
      "Joined the development team to build and maintain web applications using ReactJS and NodeJS. Collaborated with senior developers, participated in code reviews, and gained hands-on experience with real projects and Agile workflows.",
  },
  {
    time: "Jan 2023",
    title: "Fullstack Developer",
    subTitle: "JOB ROCKY",
    description:
      "Contributed to the development of the CV Builder project, integrating AI models to enable developer interview simulation features. Also worked on allowing users to create and customize their CVs using provided templates directly on the website.",
  },
  {
    time: "Jul 2023",
    title: "Fullstack Developer",
    subTitle: "The Binary Holdings",
    description:
      "Worked on WEB3 projects, building user interfaces and integrating them with blockchain smart contracts to deliver seamless decentralized application experiences.",
  },
  {
    time: "Apr 2025",
    title: "JUNIOR Fullstack Developer",
    subTitle: "Agest Vietnam",
    description:
      "Participated in building and developing TestArchitect, an automation testing software, migrating it from on-premise to cloud.",
  },
];

export const PROJECTS: Array<Project> = [
  {
    id: "1",
    name: "PORTFOLIO",
    description:
      "Project Description Of Personal Information, Including Skills And Programming Languages. Experiences And Jobs During The Time As A Student, Including Information About Other Personal Projects. Finally, Include Contact Information.",
    createdAt: "Apr 19, 2022",
    role: "Frontend Developer",
    frontend: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Framer Motion",
    ],
    backend: ["N/A"],
    source: "https://github.com/DangTinh422003/portfolio-2025",
    demo: "https://project1.demo.com",
    thumbnail:
      "https://images.unsplash.com/photo-1742505709415-76b15647ae64?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1742505709415-76b15647ae64?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1749760305507-e66205164a31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1751442185664-0c84da01a4ff?q=80&w=1655&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1749740429722-fed0e4e9cf15?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];
