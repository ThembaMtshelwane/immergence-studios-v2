const Navbar = () => {
  return (
    <nav className="md:h-[10%] hidden sm:flex justi w-[70%] sm:right-0 md:left-0 text-2xl md:w-full relative z-10 bg-background text items-center drop-shadow-glow justify-around">
      <a href="" className="hover:bg-[#fc2804] cursor-pointer">
        Home
      </a>
      <a href="#about" className="hover:bg-[#fc2804] cursor-pointer">
        About
      </a>
      <a href="#services" className="hover:bg-[#fc2804] cursor-pointer">
        Services
      </a>
      <a href="#team" className="hover:bg-[#fc2804] cursor-pointer">
        Team
      </a>
      <a href="#contact" className="hover:bg-[#fc2804] cursor-pointer">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
