const Team = () => {
  return (
    <div className="bg-red-400 min-h-screen ">
      <h2 className="my-8 text-center text-4xl sm:text-6xl md:text-8xl font-extrabold">
        MEET THE TEAM
      </h2>
      <div className="grid grid-cols-5 grid-rows-2">
        <div className="col-[1/4] bg-red-700 h-100 w-96 border justify-self-end self-center"></div>
        <div className="col-[3/4] row-[2/4] bg-red-950 h-100 w-96 border"></div>
      </div>
    </div>
  );
};

export default Team;
