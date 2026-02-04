import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mainCharacters } from '../data/charactersData';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

const CharacterDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const character = mainCharacters.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Character Not Found</h2>
                    <Link to="/characters" className="text-primary hover:underline font-bold text-lg">Back to All Characters</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen flex items-center justify-center py-24 px-4 ${character.color} transition-colors duration-500`}>
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-[-100px] w-96 h-96 bg-white opacity-40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-white opacity-40 rounded-full blur-3xl"></div>
            </div>

            <div className="container max-w-5xl mx-auto relative z-10">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-gray-700 font-bold hover:text-primary transition-all hover:-translate-x-1"
                >
                    <FaArrowLeft /> Back
                </button>

                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] shadow-2xl overflow-hidden border-4 border-white">
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className={`md:w-2/5 p-10 flex items-center justify-center bg-gradient-to-b from-white/0 to-white/50 relative overflow-hidden`}>
                            {/* Circle behind image */}
                            <div className={`absolute w-64 h-64 rounded-full ${character.color} mix-blend-multiply opacity-70 blur-xl`}></div>
                            <img
                                src={character.img}
                                alt={character.name}
                                className="w-full max-w-sm h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 z-10"
                                data-aos="zoom-in"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="md:w-3/5 p-8 md:p-14 flex flex-col justify-center">
                            <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-white shadow-sm w-fit mb-4 ${character.text}`}>
                                CHARACTER PROFILE
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-4 leading-tight" data-aos="fade-left">
                                {character.name}
                            </h1>
                            <p className="text-xl text-gray-600 font-medium italic mb-6 border-l-4 border-gray-300 pl-4" data-aos="fade-left" data-aos-delay="100">
                                "{character.personality}"
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
                                {character.fullDesc}
                            </p>

                            {/* Highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300">
                                {character.highlight.map((item, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center gap-2">
                                        <span className="text-3xl">{item.icon}</span>
                                        <span className="font-bold text-gray-800 text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetailPage;
