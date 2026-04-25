import { Code2, Gauge, GitBranch, LayoutDashboard } from "lucide-react";
import type { Recommendation, Service } from "../types";
import boyAvatar from "../img/boy.png";
import girlAvatar from "../img/girl.png";
import girlAvatarAlt from "../img/girl1.png";

export const aboutParagraphs = [
  "I am a front-end developer from Zhytomyr, Ukraine, specializing in creating clean, interactive, and user-friendly web applications. I enjoy turning ideas into real products — from simple, elegant interfaces to more complex systems with well-structured logic. I pay close attention to details, because for me, a great product is not only about functionality, but also how the user perceives it.",
  "I completed a Full Stack Development training at GoIT, where I gained practical experience with modern technologies such as HTML5, CSS3, JavaScript, React, Redux, Node.js, and MongoDB. My main strengths are: Creating responsive interfaces Writing clean and user-friendly code Creating smooth UI interactions and animations Structuring applications in a scalable way I am constantly improving my skills by working on real-world projects and solving practical problems. My goal is simple: every project I create should be better than the last.",
  "I am currently open to new opportunities where I can grow as a developer and create products that bring real value.",
];

export const services: Service[] = [
  {
    Icon: Code2,
    title: "Frontend Foundation",
    description:
      "I build responsive pages with HTML, CSS, TypeScript and React, focusing on clean structure.",
  },
  {
    Icon: LayoutDashboard,
    title: "Visual Attention",
    description:
      "I care about spacing, contrast, typography and small details that make an interface feel finished.",
  },
  {
    Icon: GitBranch,
    title: "Project Discipline",
    description:
      "I keep code organized, use Git consciously and prepare repositories so they are easy to review.",
  },
  {
    Icon: Gauge,
    title: "Growth Mindset",
    description:
      "I learn quickly, ask better questions with each project and turn feedback into visible improvements.",
  },
];

export const recommendations: Recommendation[] = [
  {
    avatar: girlAvatar,
    name: "Olena Koval",
    role: "Frontend Developer (HTML5, CSS3, JavaScript)",
    date: "April 5, 2025",
    dateTime: "2024-04-05",
    text: "I worked with Maksym during a team learning project where we built a responsive website using HTML, CSS and JavaScript. He was attentive to details, checked layout behavior carefully and helped keep the team focused when tasks became unclear. Maksym showed himself as a reliable teammate who is ready to ask questions, explain his decisions and improve the result until the interface looks finished.",
  },
  {
    avatar: boyAvatar,
    name: "Andrii Melnyk",
    role: "Frontend Developer (HTML5, CSS3, JavaScript, React)",
    date: "April 21, 2025",
    dateTime: "2024-04-21",
    text: "I would recommend Maksym as a developer who combines patience with real curiosity. During our practice work he paid attention not only to whether the code worked, but also to readability, spacing and how the page felt for a user. He communicated clearly, reacted well to feedback and was always willing to improve a component instead of leaving it at the first working version.",
  },
  {
    avatar: girlAvatarAlt,
    name: "Kateryna Shevchenko",
    role: "Fullstack Student (HTML5, CSS3, JavaScript, React, Node)",
    date: "March 3, 2025",
    dateTime: "2024-03-03",
    text: "Maksym stood out to me because he treated our study project like something that should be presented, not only submitted. He kept an organized Git workflow, listened carefully during review and made visible improvements after each discussion. His strongest qualities are responsibility, consistency and a calm approach to solving frontend problems step by step.",
  },
];
