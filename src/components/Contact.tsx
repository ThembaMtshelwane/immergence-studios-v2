import { useState } from "react";
import { animation_duration } from "../constants";
import StartProjectForm from "./ui/StartProjectForm";

const Contact = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      id="contact"
      className="drop-shadow-glow  h-screen grid grid-rows-4 p-4 md:grid-cols-2 lg:grid-cols-3 relative gap-12"
    >
      {toggle && (
        <div className="absolute flex h-full top-0 right-0 w-full z-10 bg-black/70">
          <StartProjectForm setToggle={setToggle} />
        </div>
      )}

      <h1
        className="text-4xl sm:text-7xl col-span-full self-center justify-self-center md:text-8xl"
        data-aos="fade-up"
        data-aos-duration={animation_duration}
      >
        IMMEGERGENCE
      </h1>
      <div className="col-span-full w-[270px]  md:col-span-1 lg:row-[3/4]  self-center justify-self-center sm:text-xl flex flex-col gap-2">
        <p>📍 Address:</p>
        <p>Immergence Studios</p>
        <p>112 Loop Street, Cape Town, 8001,</p>
        <p>South Africa</p>
        <button
          onClick={() => setToggle(true)}
          className="bg-[#FC2804] px-3 py-2 rounded-2xl w-fit cursor-pointer"
        >
          Start Project
        </button>
      </div>
      <div className="col-span-full  w-[270px]   md:col-[2/3] lg:col-[3/4] lg:row-[3/4]  self-center justify-self-center sm:text-xl flex flex-col gap-2">
        <p>Email: hello@immergencestudios.com</p>
        <p>Phone: +27 21 555 1234</p>
        <div className="flex flex-col">
          <a className="hover:border-b-2 w-fit hover:border-[#FC2804]" href="#">
            Instagram
          </a>
          <a className="hover:border-b-2 w-fit hover:border-[#FC2804]" href="#">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="relative col-span-full md:row-[3/5] lg:col-[2/3] border -z-10">
        <img
          className=" h-full w-full object-cover object-center bg-[#FC2804]"
          src="logo.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
