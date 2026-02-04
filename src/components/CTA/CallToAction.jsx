import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaImages, FaRocket } from "react-icons/fa";

const CallToAction = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-primary to-blue-400 relative overflow-hidden text-white text-center">
            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-md" data-aos="zoom-in">
                    Ready for an Adventure? 🚀
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium opacity-90" data-aos="fade-up" data-aos-delay="100">
                    Join Doraemon, Nobita, and friends on their next journey! Explore gadgets, watch movies, or browse the gallery.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
                    <Link to="/movies" className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all flex items-center gap-2 transform hover:-translate-y-1">
                        <FaPlayCircle /> Watch Movies
                    </Link>
                    <Link to="/gallery" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
                        <FaImages /> View Gallery
                    </Link>
                    <Link to="/gadgets" className="px-8 py-4 bg-yellow-400 text-dark font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-yellow-300 transition-all flex items-center gap-2 transform hover:-translate-y-1">
                        <FaRocket /> Discover Gadgets
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
