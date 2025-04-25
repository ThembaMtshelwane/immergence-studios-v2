import { animation_duration } from "../constants";

const Team = () => {
  return (
    <div className="relative py-10 bg-red-400 ">
      <div className="sticky top-0  p-5">
        <div className="bg-transparent h-screen flex items-center justify-center">
          <h2 className="text-yellow-400 text-center text-4xl sm:text-6xl md:text-8xl font-extrabold">
            MEET THE TEAM
          </h2>
        </div>
      </div>
      <div className="overflow-hidden grid grid-cols-2 gap-28 flex-col border w-full items-center relative p-5">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className="border h-100 w-full bg-black row-[1/2] col-[1/2]"
        ></div>

        <div
          data-aos="fade-up-left"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className="border h-100 w-full bg-black row-[2/3] col-[2/3]"
        ></div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className="border h-100 w-full bg-black row-[3/4] col-[1/2]"
        ></div>

        <div
          data-aos="fade-up-left"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className="border h-100 w-full bg-black  row-[4/5] col-[2/3]"
        ></div>
      </div>
    </div>

    // <div className="relative bg-red-400 h-[400vh] overflow-hidden py-10">
    //   <div className="relative h-full">
    //     {/* Sticky heading stays at top while scrolling */}
    //     <div className="sticky top-0 z-10 h-screen flex items-center justify-center pointer-events-none">
    //       <h2 className="text-yellow-400 text-center text-4xl sm:text-6xl md:text-8xl font-extrabold">
    //         MEET THE TEAM
    //       </h2>
    //     </div>

    //     {/* Scrollable grid behind the sticky heading */}
    //     <div className="relative z-0 grid grid-cols-2 gap-28 px-10">
    //       <div
    //         data-aos="fade-right"
    //         data-aos-anchor-placement="center"
    //         data-aos-duration={animation_duration}
    //         className="bg-black h-[100vh] border"
    //       />
    //       <div
    //         data-aos="fade-up-left"
    //         data-aos-anchor-placement="center"
    //         data-aos-duration={animation_duration}
    //         className="bg-black h-[100vh] border"
    //       />
    //       <div
    //         data-aos="fade-right"
    //         data-aos-anchor-placement="center"
    //         data-aos-duration={animation_duration}
    //         className="bg-black h-[100vh] border"
    //       />
    //       <div
    //         data-aos="fade-up-left"
    //         data-aos-anchor-placement="center"
    //         data-aos-duration={animation_duration}
    //         className="bg-black h-[100vh] border"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Team;
