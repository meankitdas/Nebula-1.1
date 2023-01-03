import FAQ from "./faq";

export default function FaqPage() {
  return (
    <section
      className=" min-h-screen p-0 bg-ourwhite text-secondary  md:block"
      id="faq"
    >
      <div className=" h-screen ">
        <div className="flex justify-center w-full md:h-1/4">
          {/* timeline */}
          <h1 className="text-8xl p-5 mt-5">Frequently Asked Questions</h1>
        </div>
        <div className=" flex justify-center md:h-3/4">
          <div className="w-2/3">
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
}
