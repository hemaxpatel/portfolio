import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "./timelineData";

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
      background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(${
        borderColor === "#ffb012"
          ? "255,176,18"
          : borderColor === "#2196f3"
            ? "33,150,243"
            : borderColor === "#e91e63"
              ? "233,30,99"
              : "76,175,80"
      },0.1) 100%)`,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      color: "#ffffff",
      borderBottom: `4px solid ${borderColor}`,
      border: `1px solid ${borderColor}40`,
      boxShadow: `0 8px 32px 0 ${borderColor}30`,
      padding: "24px",
      borderRadius: "16px",
    }}
    contentArrowStyle={{ borderRight: `7px solid ${borderColor}` }}
    date={date}
    dateClassName="mx-2"
    iconStyle={{
      background: iconBg,
      color: "#fff",
      boxShadow: `0 0 20px ${iconBg}80`,
    }}
    icon={icon}
  >
    <h3
      className="vertical-timeline-element-title font-bold text-xl"
      style={{ color: borderColor }}
    >
      {title}
    </h3>
    <h4
      className="vertical-timeline-element-subtitle mt-2 text-sm font-medium opacity-80"
      style={{
        color: borderColor,
      }}
    >
      {subtitle}
    </h4>
    <ul className="list-disc pl-5 py-5 space-y-2 text-gray-200">
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

//old simple timeline code

// const TimelineItem = ({
//   date,
//   title,
//   subtitle,
//   icon,
//   iconBg,
//   borderColor,
//   description,
// }) => (
//   <VerticalTimelineElement
//     className="vertical-timeline-element"
//     contentStyle={{
//       background: "#1a1a1a",
//       color: "#ffffff",
//       borderBottom: `4px solid ${borderColor}`,
//       boxShadow: "none",
//       padding: "24px",
//     }}
//     contentArrowStyle={{ borderRight: `7px solid ${borderColor}` }}
//     date={date}
//     dateClassName="mx-2"
//     iconStyle={{ background: iconBg, color: "#fff" }}
//     icon={icon}
//   >
//     <h3 className="vertical-timeline-element-title">{title}</h3>
//     <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
//     <ul className="list-disc pl-5 py-5">
//       {description.map((point, idx) => (
//         <li key={idx}>{point}</li>
//       ))}
//     </ul>
//   </VerticalTimelineElement>
// );
