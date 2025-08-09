import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import react from "./react.png";
import androidstudio from "./androidstudio.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import postgresql from "./postgresql.png";
import prisma from "./prisma.png";
import tailwind from "./tailwind.png";
import vite from "./vite.png";
import node from "./node.png";
import express from "./express.png";
import typescript from "./typescript.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  react,
  androidstudio,
  mongodb,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  postgresql,
  prisma,
  tailwind,
  vite,
  node,
  express,
  typescript,
};

export const workData = [
  {
    title: "Inventotract",
    description:
      "Worked on Inventotract, a web-based inventory management application for Elanco Trading, at NegosyolabPH Business Development Services as a Developer Intern.",
    link: "https://elancotrading.com/uat-inventotrack/",
    tools:
      "PHP, HTML, JavaScript, Bootstrap CSS,CodeIgniter 3, MySQL, Bitbucket, Git, Winscp, Trello",
    bgImage: "/inventotract.gif",
  },
  {
    title: "PIT (Portable Inventotract)",
    description:
      "Worked on a portable version of Inventotract, an inventory management system for Elanco Trading, at NegosyolabPH Business Development Services as a Developer Intern.",
    tools:
      "PHP, HTML, JavaScript, Bootstrap CSS,CodeIgniter 3, MySQL, Bitbucket, Git, Winscp, Trello",
    link: "",
    bgImage: "/pit.gif",
  },
  {
    title: "Gazeguard",
    description:
      "Developed an eye-tracking solution to monitor and regulate screen time, completed as a final-year thesis project.",
    tools:
      "Java, python, Android Studio, Firebase, YoloV5, Google Colab, Kaggle, GitHub, Git, Trello",
    link: "https://github.com/jaynico-dev/GazeGuard",
    bgImage: "/gazeguard.gif",
  },
  {
    title: "EasyMealRecipes",
    description:
      "EasyMealRecipes is a full-stack web application for discovering, searching, and saving meal recipes.",
    tools:
      "React, TypeScript, Tailwind CSS, Node.js, Express, Prisma, PostgreSQL, Vite, TheMealDB API",
    link: "https://easymealrecipes.vercel.app",
    bgImage: "/easymealrecipes.gif",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Java, C#, Python, HTML, CSS, JavaScript, PHP, SQL",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor of Science in Computer Science",
  },
];

export const toolsData = [
  { icon: assets.vscode, name: "VS Code" },
  { icon: assets.androidstudio, name: "Android Studio" },
  { icon: assets.react, name: "React" },
  { icon: assets.git, name: "Git" },
  { icon: assets.figma, name: "Figma" },
  { icon: assets.mongodb, name: "MongoDB" },
  { icon: assets.firebase, name: "Firebase" },
  { icon: assets.postgresql, name: "PostgreSQL" },
  { icon: assets.prisma, name: "Prisma" },
  { icon: assets.tailwind, name: "Tailwind CSS" },
  { icon: assets.vite, name: "Vite" },
  { icon: assets.node, name: "Node.js" },
  { icon: assets.express, name: "Express" },
  { icon: assets.typescript, name: "TypeScript" },
];

export const workExperience = [
  {
    role: "Developer Intern",
    company: "NegosyolabPH Business Development Services",
    duration: "February 2025 - April 2025",
    details: [
      "Collaborated with a development team to maintain and enhance a live web application using PHP (CodeIgniter).",
      "Implemented bug fixes, input validation, and improved UI/UX across multiple modules.",
      "Developed dynamic PDF reports and optimized SQL queries for efficient data handling.",
      "Contributed to API security and feature development in a real-world production environment.",
    ],
    projects: [
      {
        name: "Inventotract",
        techStack: "CodeIgniter 3, MySQL",
        description:
          "Developed a web application for inventory management, handling over 1M items across 12 warehouses.",
      },
      {
        name: "PSP-Gym",
        techStack: "Cideigniter 4, MySQL",
        description:
          "Developed a gym management system with user authentication and membership tracking.",
      },
    ],
  },
];
