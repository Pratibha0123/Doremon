import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaImages } from "react-icons/fa";
import HeroAnimation from '../Animations/HeroAnimation';

const Hero = () => {
  return (
    <div id="home" className="relative w-full min-h-screen bg-gradient-to-br from-blue-300 via-white to-pink-100 flex items-center justify-center pt-20">
      <div className="absolute top-28 right-4 md:right-10 lg:right-20 z-20 pointer-events-none transform scale-75 md:scale-100">
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div data-aos="fade-down" className="mb-8">
          <span className="inline-block py-1 px-4 rounded-full bg-white/50 backdrop-blur-sm text-primary text-sm font-bold mb-6 tracking-widest uppercase shadow-sm border border-white/60">
            Future Gadget Museum
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-6 leading-tight drop-shadow-sm">
            Step Into the <br />
            <span className="relative inline-block text-primary">
              22nd Century
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-secondary rounded-full blur-[2px] opacity-40"></span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary to-transparent rounded-full opacity-80"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed mt-6">
            A curated gallery of Doraemon's world. Explore characters, gadgets, and timeless memories.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Link to="/characters" className="group relative px-8 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <span className="relative z-10 flex items-center gap-2">
              Explore Characters <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
          <Link to="/gallery" className="group relative px-8 py-4 bg-white text-primary border-2 border-primary font-bold text-lg rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <span className="relative z-10 flex items-center gap-2">
              View Gallery <FaImages className="group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400" className="relative w-full max-w-5xl mx-auto">
          <HeroAnimation />
        </div>
      </div>
    </div >
  );
};

export default Hero;