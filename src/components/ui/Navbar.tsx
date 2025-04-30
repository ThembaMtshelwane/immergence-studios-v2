const Navbar = () => {
  return (
    <nav className="md:h-[10%] hidden sm:flex justi w-[70%] sm:right-0 md:left-0 text-2xl md:w-full relative z-10 bg-background text items-center drop-shadow-glow justify-around">
      <div className="hover:bg-[#fc2804] cursor-pointer">Home</div>
      <div className="hover:bg-[#fc2804] cursor-pointer">About</div>
      <div className="hover:bg-[#fc2804] cursor-pointer">Services</div>
      <div className="hover:bg-[#fc2804] cursor-pointer">Team</div>
      <div className="hover:bg-[#fc2804] cursor-pointer">Contact</div>
    </nav>
  );
};

export default Navbar;
