import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white relative overflow-hidden">
      {/* Decorative Wave (SVG or CSS) could be added here */}

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-2">Doraemon World</h2>
            <p className="text-blue-100 max-w-sm">Exploring future gadgets and making memories with friends.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-blue-100 flex flex-col md:flex-row justify-center items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Doraemon Fan Website. All rights reserved.</p>
          <span className="hidden md:inline">|</span>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-secondary animate-pulse" /> for Doraemon Fans
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
