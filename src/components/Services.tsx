import Service from "./ui/Service";

const Services = () => {
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-6xl text-center p-2 my-4 font-extrabold sm:text-start sm:text-8xl sm:my-0">
        SERVICES
      </h2>
      <div className="border flex flex-col gap-4">
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;
