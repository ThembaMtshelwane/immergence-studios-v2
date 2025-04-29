const Navbar = () => {
  return (
    <nav className="md:h-[10%] hidden sm:flex justify-around w-[70%] sm:right-0 md:left-0 text-2xl md:w-full relative z-10 bg-background text p-5">
      <div>Home</div>
      <div>About</div>
      <div>Services</div>
      <div>Team</div>
      <div>Contact</div>
    </nav>
  );
};

export default Navbar;
