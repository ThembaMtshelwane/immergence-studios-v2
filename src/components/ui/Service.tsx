import { animation_duration } from "../../constants";

const Service = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={animation_duration}
      className="border grid grid-rows-[40%_20%_40%] h-[250px] sm:grid-rows-1 sm:grid-cols-3"
    >
      <div className="col-span-full self-center sm:col-span-1 sm:px-4 md:justify-self-center">
        Name of service
      </div>
      <p className="col-span-full sm:col-[2/3] self-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim
        provident suscipit maiores molestias temporibus.
      </p>
      <img
        className="h-full w-full object-center object-cover row-[1/2] col-span-full sm:col-[3/3]"
        src="https://images.unsplash.com/photo-1745106673075-d616222217b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default Service;
