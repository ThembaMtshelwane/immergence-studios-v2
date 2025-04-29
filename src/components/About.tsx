import { animation_duration } from "../constants";

const About = () => {
  return (
    <div className=" h-[150vh] grid grid-cols-2 grid-rows-[30%_40%_30%] sm:grid-rows-[40%_20%_40%]  text-justify relative">
      <h2 className="text-4xl row-[2/3] col-span-full p-4 md:text-5xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis
        dignissimos minima, beatae non quae?
      </h2>
      <video
        src="2.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="w-full h-full object-cover object-center bg-[#FC2804] shadow-lg shadow-[#FC2804]-500/50  size-36 sm:size-60 justify-self-end self-center"
        data-aos="zoom-in-up"
        data-aos-duration={animation_duration}
      />
      <video
        src="1.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="w-full h-full object-cover object-center bg-[#FC2804] shadow-lg shadow-[#FC2804]-500/50 size-36 sm:size-60 border justify-self-center self-end"
        data-aos="zoom-in-up"
        data-aos-duration={animation_duration}
      />
      <video
        src="3.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="w-full h-full object-cover object-center bg-[#FC2804] shadow-lg shadow-[#FC2804]-500/50 size-36 sm:size-60 border justify-self-center"
        data-aos="zoom-in-up"
        data-aos-duration={animation_duration}
      />
      <video
        src="4.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="w-full h-full object-cover object-center bg-[#FC2804] shadow-lg shadow-[#FC2804]-500/50 size-36 sm:size-60 border  self-center"
        data-aos="zoom-in-up"
        data-aos-duration={animation_duration}
      />
    </div>
  );
};

export default About;
