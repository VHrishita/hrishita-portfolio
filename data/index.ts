import { routeModule } from "next/dist/build/templates/app-page";
import { space } from "postcss/lib/list";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [

  {
    id: 1,
    title:
      "I'm Vempali Hrishita — an AIML student at Atria Institute of Technology, passionate about web development and learning every day.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[35vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to collaborations and gaining real-world experience.",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-1.5",
    titleClassName: "justify-start",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center",
  },
  {
    id: 4,
    title: "Currently working on small projects to enhance my skills.",
    description: "Student Journey",
    className: "md:col-span-3 md:row-span-1",
    titleClassName: "justify-center",
    spareImg: "/grid.svg",
  },
{
  id: 5,
  title: "Download Resume",
  description: "",
  className: "lg:col-span-2 md:col-span-1 lg:min-h-[25vh]",
  titleClassName: "justify-center text-center",
  img: "/resume.png",
  spareImg: "/grid.svg",
  link: "/Hrishita_resume.pdf",
},
  {
    id: 6,
    title: "Do you want to start a project together?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center text-center",
    link: "mailto:vempalihrishita05@gmail.com",
  },
];


export const projects = [
  {
    id: 1,
    title: "Chloris",
    des: "Chloris is a web-based platform built to inspire environmental awareness and sustainability.",
    img: "/project6.jpg",
    iconLists: ["/HTML5.svg", "/CSS3.svg", "/Firebase.svg", "/JavaScript.svg"],
    link: "https://github.com/VHrishita/chloris",
    site: "https://vhrishita.github.io/chloris/",
    year: "2025",
    organization: "SDG - 15",
    role: "Project Lead & Backend Developer",
  },
  {
    id: 2,
    title: "AI - Translator",
    des: "AI Translator is a real-time speech-to-text translation app.",
    img: "/project7.jpg",
    iconLists: ["/HTML5.svg", "/CSS3.svg", "/OpenAPI.svg", "/React.svg"],
    link: "https://github.com/VHrishita/ai-translator",
    site: "https://ai-translator-two.vercel.app/",
    year: "2025",
    organization: "Pinnacle Labs Internship",
    role: "Project Developer",
  },
   {
    id: 3,
    title: "Smart SecuriBot",
    des: "Chatbot that helps users check password strength and provides friendly cybersecurity guidance",
    img: "/project9.jpg",
    iconLists: ["/HTML5.svg", "/CSS3.svg", "/JavaScript.svg"],
    link: "https://github.com/VHrishita/Smart-SecuriBot",
    site: "https://smart-securi-bot.vercel.app/",
    year: "2025",
    organization: "Computation Project",
    role: "Developer",
  },
  {
    id: 4,
    title: "Intrusion Detection System",
    des: "A ML-based Intrusion Detection System that classifies network flows as Normal or Attacked.",
    img: "/project8.jpg",
    iconLists: ["/Python.svg", "/NumPy.svg", "/flask.png", "/Pandas.svg", "/Matplotlib.png", "/scikit.svg"],
    link: "https://github.com/VHrishita/Intrusion-Detection-System",
    year: "2025",
    organization: "Computer Network Project",
    role: "Developer",
  },
  {
    id: 5,
    title: "Student Management System",
    des: "A system to track student performance, attendance and more.",
    img: "/project1.jpg",
    iconLists: ["/HTML5.svg", "/PHP.svg", "/MySQL.svg", "/Tailwind.svg"],
    link: "https://github.com/VHrishita/Student_management_system",
    year: "2025",
    organization: "College Mini Project",
    role: "Frontend Developer",
  },
  {
    id: 6,
    title: "Python Object Detector",
    des: "Real-time object detection using YOLO with PyTorch & OpenCV.",
    img: "/project2.jpg",
    iconLists: ["/Python.svg", "/PyTorch.svg", "/OpenCV.svg"],
    link: "https://github.com/VHrishita/Python-Object-Detector",
    year: "2025",
    organization: "College Mini Project",
    role: "Developer",
  },
  {
    id: 7,
    title: "LAN-to-LAN",
    des: "Connecting Two LANs via Router – Cisco Packet Tracer Project.",
    img: "/project3.jpg",
    iconLists: ["/cisco.png"],
    link: "https://github.com/VHrishita/Cisco-Packet-Tracer---Two-LANs-Connected-via-Router",
    year: "2025",
    organization: "College Assignment",
    role: "Developer",
  },
  {
    id: 8,
    title: "Invisible Cloak",
    des: "Wave your cloak and disappear - thanks to computer vision!",
    img: "/project4.jpg",
    iconLists: ["/Python.svg", "/OpenCV.svg", "/NumPy.svg"],
    link: "https://github.com/VHrishita/Invisible_cloak",
    year: "2025",
    organization: "Individual Project",
    role: "Developer",
  },
  {
    id: 9,
    title: "Winx",
    des: "A mental wellness app for higher education students.",
    img: "/project5.jpg",
    iconLists: ["/HTML5.svg", "/PHP.svg", "/Firebase.svg", "/Tailwind.svg"],
    link: "https://github.com/VHrishita/Winx",
    year: "2025",
    organization: "Smart India Hackathon",
    role: "Frontend Developer",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Built a personal Portfolio site using HTML, CSS, and JavaScript.",
    date: "June 2025 – Present",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer - Smart India Hackathon Participant",
    desc: "Developed a team-based project 'Winx' focusing on mental wellness for students.",
    date: "September 2025",
    organization: "SIH 2025",
    className: "md:col-span-2",
    thumbnail: "/sih.png",
  },
  {
    id: 3,
    title: "Cryptic 2.0 Hackathon",
    desc: "Crop Yield Prediction using Machine Learning and Flask.",
    date: "November 2023",
    organization: "Atria IT, IEEE",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hackathon Participant",
    desc: "Developed a team-based web application for an anti-resume job platform using HTML, CSS, React.js.",
    date: "April 2025",
    organization: "xto10x Masai",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  
  {
    id: 5,
    title: "Open to Opportunities",
    desc: "I'm currently seeking opportunities to apply my skills in real-world projects.",
    date: "Present",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const skills = [
  // 🟢 Programming Languages
  { id: 1, name: "Java", icon: "/Java.png", category: "Programming" },
  { id: 2, name: "C", icon: "/C.png", category: "Programming" },
  { id: 13, name: "Python", icon: "/Python.svg", category: "Programming" },
  { id: 8, name: "PHP", icon: "/PHP.svg", category: "Programming" },

  // 🎨 Frontend
  { id: 3, name: "HTML5", icon: "/HTML5.svg", category: "Frontend" },
  { id: 4, name: "CSS3", icon: "/CSS3.svg", category: "Frontend" },
  { id: 5, name: "React", icon: "/React.svg", category: "Frontend" },
  { id: 7, name: "Tailwind CSS", icon: "/Tailwind.svg", category: "Frontend" },

  // ⚙️ Backend & Databases
  { id: 11, name: "MongoDB", icon: "/MongoDB.svg", category: "Backend" },
  { id: 12, name: "MySQL", icon: "/MySQL.svg", category: "Backend" },
  { id: 25, name: "Eclipse IDE", icon: "/Eclipse IDE.png", category: "Backend" },

  // 🤖 AI / Data / Visualization
  { id: 10, name: "Matplotlib", icon: "/Matplotlib.png", category: "AI" },
  { id: 24, name: "OpenCV", icon: "/OpenCV.svg", category: "AI" },
  { id: 26, name: "Power BI", icon: "/powerbi.png", category: "AI" },
  { id: 28, name: "Tableau", icon: "/tableau.png", category: "AI" },

  // 🛠 Tools / Productivity
  { id: 15, name: "Git", icon: "/Git.png", category: "Tools" },
  { id: 16, name: "GitHub", icon: "/github.png", category: "Tools" },
  { id: 17, name: "VS Code", icon: "/vs.png", category: "Tools" },
  { id: 19, name: "MS Word", icon: "/word.png", category: "Tools" },
  { id: 14, name: "MS PowerPoint", icon: "/powerpoint.png", category: "Tools" },
  { id: 30, name: "MS Excel", icon: "/excel.png", category: "Tools" },
  { id: 21, name: "Canva", icon: "/Canva.png", category: "Tools" },
  { id: 31, name: "PyCharm", icon: "/PyCharm.png", category: "Tools" },
  { id: 32, name: "Anaconda", icon: "/Anaconda.png", category: "Tools" },
];
