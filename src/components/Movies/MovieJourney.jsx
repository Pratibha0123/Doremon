import React from "react";
import { FaFilm } from "react-icons/fa";

const MovieJourney = () => {
    const movies = [
        { year: "1980", title: "Nobita's Dinosaur", img: "https://placehold.co/150x220/orange/white?text=1980", desc: "The very first movie adventure!" },
        { year: "2014", title: "Stand By Me Doraemon", img: "https://placehold.co/150x220/blue/white?text=SBM", desc: "A 3D emotional rollercoaster." },
        { year: "2023", title: "Nobita's Sky Utopia", img: "https://placehold.co/150x220/skyblue/white?text=2023", desc: "Latest high-flying adventure." },
    ];

    return (
        <section className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
                        <FaFilm className="text-yellow-400" /> Movie Journey
                    </h2>
                    <p className="text-gray-400">Decades of adventures across time and space.</p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 rounded hidden md:block"></div>

                    <div className="flex flex-col gap-12">
                        {movies.map((movie, index) => (
                            <div key={movie.year} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`} data-aos="fade-up">
                                {/* Year Bubble (Center) */}
                                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-dark z-10 absolute left-1/2 transform -translate-x-1/2">
                                    <span className="font-bold text-white text-sm">{movie.year}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 w-full md:w-auto md:text-right p-4">
                                    {index % 2 === 0 ? (
                                        <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors shadow-lg border border-gray-700">
                                            <h3 className="text-xl font-bold text-yellow-400 mb-2">{movie.title}</h3>
                                            <p className="text-gray-300">{movie.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full"></div>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="flex-1 w-full md:w-auto flex justify-center md:justify-start">
                                    {/* Logic flip for alignment */}
                                    <div className={`md:w-full flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        {index % 2 !== 0 ? (
                                            <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors shadow-lg border border-gray-700 text-left">
                                                <h3 className="text-xl font-bold text-yellow-400 mb-2">{movie.title}</h3>
                                                <p className="text-gray-300">{movie.desc}</p>
                                            </div>
                                        ) : (
                                            <img src={movie.img} alt={movie.title} className="w-40 rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300" />
                                        )}
                                    </div>
                                    {index % 2 !== 0 && (
                                        <img src={movie.img} alt={movie.title} className="w-40 rounded-lg shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-300 ml-4 hidden md:block" />
                                    )}
                                    {/* Simple Image block for mobile/desktop logic needs cleanup but this works for basic alternating visualization */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieJourney;
