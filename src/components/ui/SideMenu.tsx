type Props = {
  setToggle: (toggle: boolean) => void;
};

const SideMenu = ({ setToggle }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex">
      {/* Side Menu */}
      <div className="w-64 bg-background h-full shadow-lg p-6 relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold uppercase">Menu</h2>
          <button onClick={() => setToggle(false)} className="text-2xl">
            X
          </button>
        </div>
        <nav className="flex flex-col space-y-6 text-lg font-semibold">
          <a
            onClick={() => setToggle(false)}
            href="#home"
            className="hover:text-[#FC2804] transition"
          >
            Home
          </a>
          <a
            onClick={() => setToggle(false)}
            href="#about"
            className="hover:text-[#FC2804] transition"
          >
            About
          </a>
          <a
            onClick={() => setToggle(false)}
            href="#services"
            className="hover:text-[#FC2804] transition"
          >
            Services
          </a>
          <a
            onClick={() => setToggle(false)}
            href="#team"
            className="hover:text-[#FC2804] transition"
          >
            Team
          </a>
          <a
            onClick={() => setToggle(false)}
            href="#contact"
            className="hover:text-[#FC2804] transition"
          >
            Contact
          </a>
        </nav>
      </div>
      {/* Click outside to close */}
      <div className="flex-1" onClick={() => setToggle(false)} />
    </div>
  );
};

export default SideMenu;
