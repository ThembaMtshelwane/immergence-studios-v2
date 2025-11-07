import { useState } from "react";
import InfiiteCarousel from "./ui/InfiiteCarousel";
import Navbar from "./ui/Navbar";
import SideMenu from "./ui/SideMenu";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      id="home"
      className=" h-screen grid grid-rows-[10%_40%_50%] md:grid-rows-[40%_60%] md:grid-cols-2"
    >
      <div className="flex justify-between items-center relative sm:flex-row-reverse sm:justify-between md:flex-col">
        <Navbar />
        <img
          className="md:h-[90%] drop-shadow-glow w-[30%] h-full md:w-full object-cover object-center bg-[#FC2804] "
          src="logo.svg"
          alt=""
        />
        <button
          onClick={() => setMenuOpen(true)}
          className="sm:hidden size-10  flex items-center justify-center  p-4 mr-5  bg-[#FC2804] rounded fixed right-0.5 "
        >
          ☰
        </button>
      </div>

      {menuOpen && <SideMenu setToggle={setMenuOpen} />}
      <div className=" text-7xl sm:text-9xl md:text-7xl lg:text-9xl flex overflow-hidden items-center justify-center">
        <InfiiteCarousel />
      </div>
      <div className=" drop-shadow-glow flex col-span-full">
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
          src="hero2.mp4"
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
