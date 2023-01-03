import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineEvents from "./timelineEvents";

const timelineEvents = [
  {
    date: "JANUARY",
    title: "Registration",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    date: "FEBRUARY",
    title: "Evaluation",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    date: "MARCH",
    title: "First Evaluation",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    date: "APRIL",
    title: "Second Evaluation",

    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
];

export default function TimelineEx() {
  return (
    <VerticalTimeline>
      {timelineEvents.map((event) => (
        <TimelineEvents {...event} />
      ))}
    </VerticalTimeline>
  );
}
