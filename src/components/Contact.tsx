import { animation_duration } from "../constants";

const Contact = () => {
  return (
    <div className="drop-shadow-glow  h-screen grid grid-rows-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      <h1
        className="text-4xl sm:text-7xl col-span-full self-center justify-self-center md:text-8xl"
        data-aos="fade-up"
        data-aos-duration={animation_duration}
      >
        IMMEGERGENCE
      </h1>
      <div className="col-span-full md:col-span-1 lg:row-[3/4]  self-center justify-self-center">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="col-span-full md:col-[2/3] lg:col-[3/4] lg:row-[3/4]  self-center justify-self-center">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="relative col-span-full md:row-[3/5] lg:col-[2/3] border">
        <img
          className=" h-full w-full object-cover object-center bg-[#FC2804] "
          src="logo.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
