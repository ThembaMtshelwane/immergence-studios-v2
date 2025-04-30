import { animation_duration } from "../constants";

const Contact = () => {
  return (
    <div
      id="contact"
      className="drop-shadow-glow  h-screen grid grid-rows-4 p-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <h1
        className="text-4xl sm:text-7xl col-span-full self-center justify-self-center md:text-8xl"
        data-aos="fade-up"
        data-aos-duration={animation_duration}
      >
        IMMEGERGENCE
      </h1>
      <div className="col-span-full md:col-span-1 lg:row-[3/4]  self-center justify-self-center sm:text-xl">
        <p>📍 Address:</p>
        <p>Immergence Studios</p>
        <p>112 Loop Street, Cape Town, 8001,</p>
        <p>LSouth Africa</p>
      </div>
      <div className="col-span-full md:col-[2/3] lg:col-[3/4] lg:row-[3/4]  self-center justify-self-center sm:text-xl">
        <p>hello@immergencestudios.com</p>
        <p>+27 21 555 1234</p>
        <div>
          <p>Immergence Studios</p>
          <p> @immergence.studios</p>
        </div>
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
