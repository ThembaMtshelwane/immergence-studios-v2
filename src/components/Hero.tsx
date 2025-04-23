const Hero = () => {
  return (
    <div className="border border-blue-500 h-screen grid grid-rows-[10%_40%_50%] md:grid-rows-[40%_60%] md:grid-cols-2">
      <div className="border bg-black text-white">
        <div>LOGO</div>
        <div>Hamburger</div>
      </div>
      <div className="bg-red-400">IMMERGENCE STUDIOS</div>
      <div className="border bg-blue-500 col-span-full">Video</div>
    </div>
  );
};

export default Hero;
