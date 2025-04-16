import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full sm:w-2/3 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out backdrop-blur-md
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Items */}
      {["home", "about", "projects", "contact"].map((section, index) => (
        <a
          key={index}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white my-6 transform transition-transform duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
                      relative group`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}

          {/* Underline Effect */}
          <span
            className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-500 transform transition-all duration-300 group-hover:w-full group-hover:left-0"
          ></span>
        </a>
      ))}
    </div>
  );
};
