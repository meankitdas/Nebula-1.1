import TimelineContent from "./timelineContent";
import TimelineEx from "./timelineEx";
export default function TimelinePage() {
  return (
    <section
      className=" min-h-screen p-0 bg-primary text-secondary  md:block"
      id="timeline"
    >
      <div className="flex justify-center w-full ">
        {/* timeline */}
        <h1 className="text-8xl p-5 mt-5">TimeLine</h1>
      </div>
      <div>
        {/* <TimelineContent/> */}
        <TimelineEx />
      </div>
    </section>
  );
}
