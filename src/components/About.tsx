import { animation_duration } from "../constants";

const About = () => {
  return (
    <div className=" h-[150vh] grid grid-cols-2 grid-rows-[30%_40%_30%] sm:grid-rows-[40%_20%_40%]  text-justify relative">
      <h2 className="text-4xl row-[2/3] col-span-full p-4 md:text-5xl px-10 self-center text-left sm:text-center">
        Where raw vision meets high-impact animation. We don’t just animate — we
        disturb the frame and redefine the story
      </h2>
      <video
        src="2.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="w-full h-full object-cover object-center drop-shadow-glow  size-36 sm:size-60 justify-self-end self-center"
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
        className="w-full h-full object-cover object-center drop-shadow-glow  size-36 sm:size-60  justify-self-center self-end"
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
        className="w-full h-full object-cover object-center drop-shadow-glow  size-36 sm:size-60  justify-self-center"
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
        className="w-full h-full object-cover object-center drop-shadow-glow  size-36 sm:size-60   self-center"
        data-aos="zoom-in-up"
        data-aos-duration={animation_duration}
      />
    </div>
  );
};

export default About;
