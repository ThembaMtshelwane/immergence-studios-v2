const Team = () => {
  return (
    <div className="bg-red-400 min-h-screen py-10 ">
      <h2 className="my-10 text-center text-4xl sm:text-6xl md:text-8xl font-extrabold">
        MEET THE TEAM
      </h2>
      <div className="grid grid-cols-5 grid-rows-2">
        <div className="col-[2/4] bg-red-700 h-100 max-w-96  border"></div>
        <div className="col-[3/5]  row-[2/3] bg-red-950 h-100 max-w-96 border"></div>
      </div>
    </div>
  );
};

export default Team;
