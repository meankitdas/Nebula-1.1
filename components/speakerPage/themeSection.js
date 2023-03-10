import BirthPage from "./birthPage";
import ThemePage from "./themePage";

export default function ThemeSection() {
  return (
    <section className=" min-h-screen p-0  bg-white  md:block" id="themes">
      <div className=" h-screen ">
        <div className="flex w-full h-full  bg-primary overflow-hidden ">
          <ThemePage />
        </div>
      </div>
    </section>
  );
}
