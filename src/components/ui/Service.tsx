import { animation_duration } from "../../constants";

const Service = ({
  image,
  name,
  description,
}: {
  image: string;
  name: string;
  description: string;
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={animation_duration}
      className=" border-b-[1px] border-[#fc2804]  grid grid-rows-[40%_20%_40%] h-[250px] sm:grid-rows-1 sm:grid-cols-3 "
    >
      <div className="col-span-full self-center sm:col-span-1 sm:px-4 md:justify-self-center  p-4 text-2xl sm:text-4xl">
        {name}
      </div>
      <p className="col-span-full sm:col-[2/3] self-center text-justify p-4 sm:text-xl">
        {description}
      </p>
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="h-full w-full object-center object-cover row-[1/2] col-span-full sm:col-[3/3]"
        src={image}
      />
    </div>
  );
};

export default Service;
