import InfiiteCarousel from "./ui/InfiiteCarousel";

const Hero = () => {
  return (
    <div className="border border-blue-500 h-screen grid grid-rows-[10%_40%_50%] md:grid-rows-[40%_60%] md:grid-cols-2">
      <div className="border flex relative">
        <img
          className="h-full w-[30%] md:w-full object-cover object-center bg-amber-500 "
          src="logo.svg"
          alt=""
        />
        <nav className="hidden sm:flex justify-around sm:absolute w-[70%] sm:right-0 border md:left-0 text-2xl md:w-full md:fixed z-50 bg-red-200 ">
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Team</div>
          <div>Contact</div>
        </nav>
      </div>
      <div className="bg-red-400 text-7xl sm:text-9xl md:text-7xl lg:text-9xl flex overflow-hidden items-center justify-center">
        <InfiiteCarousel />
      </div>
      <div className="border bg-blue-500 col-span-full">Video</div>
    </div>
  );
};

export default Hero;
