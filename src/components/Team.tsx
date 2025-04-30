import { animation_duration } from "../constants";

const Team = () => {
  return (
    <div className="relative py-10 ">
      <div className="sticky top-0  p-5">
        <div className=" h-screen flex items-center justify-center">
          <h2 className="drop-shadow-glow text-center text-4xl sm:text-6xl md:text-8xl font-extrabold">
            MEET THE TEAM
          </h2>
          {/* <h2 className="text-yellow-400 text-center text-4xl sm:text-6xl md:text-8xl font-extrabold">
            MEET THE TEAM
          </h2> */}
        </div>
      </div>
      <div className="h-[350vh] overflow-x-hidden grid sm:grid-cols-2 gap-28 flex-col w-full justify-center items-center relative p-5">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className=" h-120 w-[250px] max-w-[480px] sm:justify-self-center sm:w-full bg-black row-[1/2] sm:col-[1/2] drop-shadow-glow"
        >
          <img
            src="team/luthando.png"
            alt=""
            className="h-full w-full object-center object-cover"
          />
        </div>

        <div
          data-aos="fade-up-left"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className=" h-120 w-[250px] max-w-[480px] sm:justify-self-center sm:w-full bg-black row-[2/3] sm:col-[2/3] drop-shadow-glow"
        >
          <img
            src="team/naledi.png"
            alt=""
            className="h-full w-full object-center object-cover"
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className=" h-120 w-[250px] max-w-[480px] sm:justify-self-center sm:w-full bg-black row-[3/4] sm:col-[1/2] drop-shadow-glow"
        >
          <img
            src="team/sipho.png"
            alt=""
            className="h-full w-full object-center object-cover"
          />
        </div>

        <div
          data-aos="fade-up-left"
          data-aos-anchor-placement="center"
          data-aos-duration={animation_duration}
          className=" h-120 w-[250px] max-w-[480px] sm:justify-self-center sm:w-full bg-black  row-[4/5] sm:col-[2/3] drop-shadow-glow"
        >
          <img
            src="team/thandi.png"
            alt=""
            className="h-full w-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
