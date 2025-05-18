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
    points: [
      "Developed full-stack web apps using React, Node.js, Express.js, and MongoDB.",
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
    points: [
      "Developed a live website for the client using HTML, CSS, and JavaScript.",
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
    points: [
      "Pursuing Computer Engineering in Devang Patel Institute of Advance Technology and Research",
      "GPA: 8.31/10",
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
  points,
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{
      background: "#1a1a1a",
      color: "#ffffff",
      borderBottom: `4px solid ${borderColor}`,
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
      {points.map((point, idx) => (
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
