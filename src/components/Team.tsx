import { animation_duration } from "../constants";

const Team = () => {
  return (
    <div className="bg-red-400 h-[400vh] py-10 relative ">
      <div className="sticky top-0  h-screen flex items-center justify-center">
        <h2 className=" text-yellow-400 text-center text-4xl sm:text-6xl md:text-8xl font-extrabold ">
          MEET THE TEAM
        </h2>
      </div>

      <div className="top-0 bg-transparent grid grid-cols-2 gap-28 flex-col border w-full items-center relative p-5">
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
  );
};

export default Team;
