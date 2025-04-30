import InfiiteCarousel from "./ui/InfiiteCarousel";
import Navbar from "./ui/Navbar";

const Hero = () => {
  return (
    <div className=" h-screen grid grid-rows-[10%_40%_50%] md:grid-rows-[40%_60%] md:grid-cols-2">
      <div className="flex relative sm:flex-row-reverse sm:justify-between md:flex-col">
        <Navbar />
        <img
          className="md:h-[80%] w-[30%] h-full md:w-full object-cover object-center bg-[#FC2804]"
          src="logo.svg"
          alt=""
        />
      </div>
      <div className=" text-7xl sm:text-9xl md:text-7xl lg:text-9xl flex overflow-hidden items-center justify-center">
        <InfiiteCarousel />
      </div>
      <div className="border flex lg:col-span-full">
        <video
          src="hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="w-full object-center object-cover "
        />
        <video
          src="hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="hidden md:flex w-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
