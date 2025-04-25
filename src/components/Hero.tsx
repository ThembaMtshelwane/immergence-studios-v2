import InfiiteCarousel from "./ui/InfiiteCarousel";
import Navbar from "./ui/Navbar";

const Hero = () => {
  return (
    <div className=" h-screen grid grid-rows-[10%_40%_50%] md:grid-rows-[40%_60%] md:grid-cols-2">
      <div className=" flex relative">
        <img
          className="h-full w-[30%] md:w-full object-cover object-center"
          src="logo.svg"
          alt=""
        />
        <Navbar />
      </div>
      <div className=" text-7xl sm:text-9xl md:text-7xl lg:text-9xl flex overflow-hidden items-center justify-center">
        <InfiiteCarousel />
      </div>
      <div className="border col-span-full">Video</div>
    </div>
  );
};

export default Hero;
