import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
      "Learning and working with .NET technologies including ASP.NET Core, C#, and SQL Server to build robust web applications.",
      "Developing and maintaining web applications using .NET technologies, ensuring high performance and responsiveness to requests from the front-end.",
    ],
  },
  {
    type: "work",
    date: "May 2025 - June 2025",
    title: "Full Stack Developer Intern",
    subtitle: "@ TLK Industries, Remote",
    icon: <MdWork />,
    iconBg: "#2196f3",
    borderColor: "#2196f3",
    description: [
      " Collaborated with other developers to gather requirements and design web application features.",
      "Developed and maintained full-stack web applications using Next.js, Node.js, Express.js, and PostgreSQL, ensuring high performance and responsiveness.",
      " Participated in code reviews and debugging sessions to improve code quality and application stability.",
      " Gained practical experience in agile development processes and version control using Git.",
    ],
  },
  {
    type: "work",
    date: "May 2024 - June 2024",
    title: "Web Developer Intern",
    subtitle: "@ Ample Infotech, Nadiad",
    icon: <MdWork />,
    iconBg: "#e91e63",
    borderColor: "#e91e63",
    description: [
      "Completed a live web development project integrating industry research to improve website design and online presence.",
      "Conducted thorough analysis of competitor websites to identify current design trends and essential functionalities.",
      " Applied research insights to develop a user-friendly, effective website enhancing overall user experience.",
      "Gained practical industry exposure by delivering a functional project aligned with client needs and modern web standards.",
    ],
  },
  {
    type: "education",
    date: "2022 - Present",
    title: "Bachelor of Technology in Computer Engineering",
    subtitle: "@ CHARUSAT, Changa",
    icon: <MdSchool />,
    iconBg: "#4caf50",
    borderColor: "#4caf50",
    description: [
      "Pursuing B.Tech in Computer Engineering from Devang Patel Institute of Advance Technology and Research (DEPSTAR), CHARUSAT.",
      "Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Software Engineering, Operating Systems, Computer Networks, Object-Oriented Programming, etc.",
      "CGPA: 8.31/10",
    ],
  },
];

const TimelineItem = ({
  date,
  title,
  subtitle,
  icon,
  iconBg,
  borderColor,
  description,
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{
      background: "#1a1a1a",
      color: "#ffffff",
      borderBottom: `4px solid ${borderColor}`,
      boxShadow: "none",
      padding: "24px",
    }}
    contentArrowStyle={{ borderRight: `7px solid ${borderColor}` }}
    date={date}
    dateClassName="mx-2"
    iconStyle={{ background: iconBg, color: "#fff" }}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <ul className="list-disc pl-5 py-5">
      {description.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export default function Timeline() {
  return (
    <VerticalTimeline>
      {timelineData.map((item, idx) => (
        <TimelineItem key={idx} {...item} />
      ))}
    </VerticalTimeline>
  );
}
