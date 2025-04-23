const About = () => {
  return (
    <div className="bg-yellow-50 h-screen grid grid-cols-2 grid-rows-[30%_40%_30%] sm:grid-rows-[40%_20%_40%]  text-justify relative">
      <h2 className="text-4xl row-[2/3] col-span-full p-4 md:text-5xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis
        dignissimos minima, beatae non quae?
      </h2>
      <div className="bg-amber-300 size-36 sm:size-60 border justify-self-center self-center"></div>
      <div className="bg-amber-300 size-36 sm:size-60 border justify-self-center self-end"></div>
      <div className="bg-amber-300 size-36 sm:size-60 border justify-self-center"></div>
      <div className="bg-amber-300 size-36 sm:size-60 border justify-self-center self-center"></div>
    </div>
  );
};

export default About;
