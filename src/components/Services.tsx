import Service from "./ui/Service";

const Services = () => {
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-6xl text-center p-2 my-4 font-extrabold sm:text-start sm:text-8xl sm:my-0">
        SERVICES
      </h2>
      <div className="border flex flex-col gap-4">
        <Service image={"7.mp4"} name={""} description={""} />
        <Service image={"6.mp4"} name={""} description={""} />
        <Service image={"8.mp4"} name={""} description={""} />
        <Service image={""} name={""} description={""} />
      </div>
    </div>
  );
};

export default Services;
