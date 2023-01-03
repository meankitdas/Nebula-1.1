import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function timelineEvents({ date, title, description}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={date}
      iconStyle={{ background: "#1D1D1E", borderColor: "#fff" }}

      // icon={<WorkIcon />}
    >
      <h2
        className="vertical-timeline-element-title"
        style={{ color: "#32E0C4", fontWeight: "bold" }}
      >
        {title}
      </h2>

      <p style={{ color: "#1D1D1E" }}>
        {description}
      </p>
    </VerticalTimelineElement>
  );
}
