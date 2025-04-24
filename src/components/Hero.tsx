import { GiStarShuriken } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="border border-blue-500 h-screen grid grid-rows-[10%_40%_50%] md:grid-rows-[40%_60%] md:grid-cols-2">
      <div className="border bg-black text-white">
        <div>LOGO</div>
        <div>Hamburger</div>
      </div>
      <div className="bg-red-400 text-7xl sm:text-9xl md:text-7xl lg:text-9xl flex overflow-hidden items-center justify-center">
        <div className="carousel gap-8 ">
          <div className="group flex gap-12 items-center">
            <GiStarShuriken />
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE </span> <span>STUDIOS</span>{" "}
            </div>
            <GiStarShuriken />
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>
            <GiStarShuriken />
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>
          </div>

          <div aria-hidden className="group flex gap-12 items-center">
            <GiStarShuriken />
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>{" "}
            <GiStarShuriken />
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>{" "}
            <GiStarShuriken />
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>
          </div>

          {/* <div aria-hidden className="group flex gap-12">
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
              <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
            </div>
          </div> */}
        </div>
      </div>
      <div className="border bg-blue-500 col-span-full">Video</div>
    </div>
  );
};

export default Hero;
