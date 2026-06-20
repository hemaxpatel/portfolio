import { MdWork, MdSchool } from "react-icons/md";

const timelineData = [
  {
    type: "work",
    date: "January 2026 - Present",
    title: ".NET Trainee",
    subtitle: "@ Cygnet One, Ahmedabad",
    icon: <MdWork />,
    iconBg: "#ffb012",
    borderColor: "#ffb012",
    description: [
      "Working with .NET technologies including ASP.NET Core, Blazor, SQL Server and MongoDB to build robust web applications.",
      "Developing and maintaining web applications using .NET technologies, ensuring high performance and responsiveness to requests from the front-end.",
    ],
  },
  {
    type: "work",
    date: "May 2025 - Jun 2025",
    title: "Full Stack Developer Intern",
    subtitle: "@ TLK Industries, Remote",
    icon: <MdWork />,
    iconBg: "#2196f3",
    borderColor: "#2196f3",
    description: [
      "Collaborated with other developers to gather requirements and design web application features.",
      "Developed and maintained full-stack web applications using Next.js, Node.js, Express.js, and PostgreSQL, ensuring high performance and responsiveness.",
      "Participated in code reviews and debugging sessions to improve code quality and application stability.",
    ],
  },
  {
    type: "work",
    date: "May 2024 - Jun 2024",
    title: "Web Developer Intern",
    subtitle: "@ Ample Infotech, Nadiad",
    icon: <MdWork />,
    iconBg: "#e91e63",
    borderColor: "#e91e63",
    description: [
      "Completed a live web development project integrating industry research to improve website design and online presence.",
      "Conducted thorough analysis of competitor websites to identify current design trends and essential functionalities.",
      "Gained practical industry exposure by delivering a functional project aligned with client needs and modern web standards.",
    ],
  },
  {
    type: "education",
    date: "Sept 2022 - Apr 2026",
    title: "Bachelor of Technology in Computer Engineering",
    subtitle: "@ CHARUSAT, Changa",
    icon: <MdSchool />,
    iconBg: "#4caf50",
    borderColor: "#4caf50",
    description: [
      "Pursued from Devang Patel Institute of Advance Technology and Research (DEPSTAR), CHARUSAT and passed with Distinction.",
      "Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Advanced Web Development, Software Engineering, etc.",
      "CGPA: 8.55/10",
    ],
  },
];

export default timelineData;
