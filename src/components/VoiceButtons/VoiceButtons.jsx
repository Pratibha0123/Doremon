import React from "react";
import { FaPlay, FaMusic } from "react-icons/fa";

const playSound = (file) => {
    // In a real scenario, these files need to exist in public/sounds/
    const audio = new Audio(`/sounds/${file}`);
    audio.play().catch(e => console.log("Audio not found or blocked", e));
};

const VoiceButtons = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-white text-center">
            <div className="container mx-auto px-4" data-aos="fade-up">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-2 flex items-center justify-center gap-3">
                        <FaMusic className="text-secondary" /> Talk to Doraemon & Nobita
                    </h2>
                    <p className="text-gray-600 text-lg">Click and hear their iconic voices!</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <button
                        onClick={() => playSound("doraemon.mp3")}
                        className="group relative px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-full shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            🐱 Doraemon Voice <FaPlay className="text-xs group-hover:animate-ping" />
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>

                    <button
                        onClick={() => playSound("nobita.mp3")}
                        className="group relative px-8 py-4 bg-yellow-400 text-dark font-bold text-lg rounded-full shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            👦 Nobita Voice <FaPlay className="text-xs group-hover:animate-ping" />
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                </div>

                <p className="mt-4 text-xs text-gray-400 italic">* Ensure audio is enabled in your browser</p>
            </div>
        </section>
    );
};

export default VoiceButtons;
