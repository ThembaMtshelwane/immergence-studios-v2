import { GiStarShuriken } from "react-icons/gi";

const InfiiteCarousel = () => {
  return (
    <div className="carousel gap-8 ">
      <div className="group flex gap-12 items-center">
        <GiStarShuriken />
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <span>IMMERGENCE </span> <span>STUDIOS</span>{" "}
        </div>
        <GiStarShuriken />
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
        </div>
        <GiStarShuriken />
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
        </div>
      </div>

      <div aria-hidden className="group flex gap-12 items-center">
        <GiStarShuriken />
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
        </div>{" "}
        <GiStarShuriken />
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
        </div>{" "}
        <GiStarShuriken />
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
        </div>
      </div>

      {/* <div aria-hidden className="group flex gap-12">
      <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
        <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
        <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
        <span>IMMERGENCE</span> <span>STUDIOS</span>{" "}
      </div>
    </div> */}
    </div>
  );
};

export default InfiiteCarousel;
