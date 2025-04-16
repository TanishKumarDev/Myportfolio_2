import { useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-semibold text-white hover:text-indigo-400 transition duration-300"
          >
            tanish<span className="text-indigo-400">.dev</span>
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden z-50 p-2 rounded-md text-white hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Links with Fancy Hover */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative capitalize text-gray-300 hover:text-indigo-400 transition duration-300 group"
              >
                {section}
                <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-indigo-400 transition-all duration-300 group-hover:left-0 group-hover:w-full transform -translate-x-1/2 group-hover:translate-x-0"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
