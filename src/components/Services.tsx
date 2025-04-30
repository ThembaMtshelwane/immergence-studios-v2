import { animation_duration } from "../constants";
import Service from "./ui/Service";

const Services = () => {
  return (
    <div className="h-[200vh] flex py-4  drop-shadow-glow">
      <div className="my-auto">
        <h2
          className="text-6xl text-center p-2 my-10 font-extrabold sm:text-start sm:text-8xl"
          data-aos="fade-up"
          data-aos-duration={animation_duration}
        >
          SERVICES
        </h2>
        <div className=" flex flex-col gap-4">
          <Service
            image={"7.mp4"}
            name={"Narrative Animation"}
            description={
              "Full-length and short-form animated stories that blend character, emotion, and storytelling craft across various genres."
            }
          />
          <Service
            image={"6.mp4"}
            name={"Music Video Animation"}
            description={
              "Eye-catching visuals that move to the rhythm — from abstract sequences to character-driven narratives, designed for musicians and labels."
            }
          />
          <Service
            image={"8.mp4"}
            name={"Educational Videos"}
            description={
              "Simplifying complex topics through animation for schools, startups, and organizations looking to educate and inform in a fun, digestible way."
            }
          />
          <Service
            image={"9.mp4"}
            name={"Experimental Animation"}
            description={
              "Conceptual, visually daring pieces for exhibitions, installations, or creators exploring unconventional visual expression."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
