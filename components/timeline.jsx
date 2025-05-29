import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const timelineData = [
  {
    type: "work",
    date: "May 2025 - June 2025",
    title: "Full Stack Developer Intern",
    subtitle: "@ TLK Industries",
    icon: <MdWork />,
    iconBg: "#2196f3",
    borderColor: "#2196f3",
    description: [
      "Completed a 1-month summer internship as a Full-Stack Developer at TLK Industries, Surat.",
      "Collaborated effectively within a team to design and develop web application features.",
      "Built a full-stack web applications using React, Node.js, Express.js, and MongoDB.",
    ],
  },
  {
    type: "work",
    date: "May 2024 - June 2024",
    title: "Web Developer Intern",
    subtitle: "@ Ample Infotech",
    icon: <MdWork />,
    iconBg: "#e91e63",
    borderColor: "#e91e63",
    description: [
      "Completed a 1-month summer internship as a Web Developer at Ample Infotech, Nadiad.",
      "Conducted detailed research on multiple websites to understand design trends and key functionalities.",
      "Developed and delivered a live internship project based on the research, implementing an effective and user-friendly design.",
    ],
  },
  {
    type: "education",
    date: "2022 - Present",
    title: "Bachelor of Technology",
    subtitle: "@ CHARUSAT University",
    icon: <MdSchool />,
    iconBg: "#4caf50",
    borderColor: "#4caf50",
    description: [
      "Pursuing Computer Engineering in Devang Patel Institute of Advance Technology and Research at CHARUSAT University.",
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
