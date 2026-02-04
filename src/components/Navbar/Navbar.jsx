import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Characters", path: "/characters" },
    { name: "Gadgets", path: "/gadgets" },
    { name: "Movies", path: "/movies" },
    { name: "Family", path: "/parents" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll handler for anchor links
  const handleScrollToSection = (path) => {
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      // If we are already home, scroll, else navigate home then scroll (simple handling)
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      } else {
        // Let the Link component handle navigation, then we might need effect on home to scroll.. 
        // easier approach: just use primitive anchor for hash if on home, or Link if away.
        // For now, let's keep it simple: simpler standard links might be better if we want robust routing.
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white border-2 border-white shadow-md group-hover:rotate-12 transition-transform">
            <span className="text-xl font-bold">D</span>
          </div>
          <span className="text-2xl font-black text-primary tracking-wide">
            Dora<span className="text-secondary">emon</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className="text-gray-600 hover:text-primary font-bold text-lg transition-colors relative after:content-[''] after:absolute after:w-0 after:h-1 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-primary focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-xl flex flex-col items-center gap-6 py-8 md:hidden animate-slide-in">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="text-xl font-bold text-gray-700 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;