import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainCharacters, supportingCharacters } from '../data/charactersData';
import { FaArrowRight } from 'react-icons/fa';

const CharactersPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-light pt-24 pb-20">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div data-aos="fade-down" className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black text-primary mb-6">
                        Doraemon Characters <span className="text-secondary">Overview</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                        Meet Doraemon, Nobita, Shizuka, Gian, Suneo, and supporting friends like Dekisugi, Jaiko, and Dorami—their quirky traits spark fun adventures and life lessons on friendship, growth, and empathy.
                    </p>
                </div>

                {/* Main Characters Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 pl-4 border-l-8 border-primary">Main Friends</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {mainCharacters.map((char, index) => (
                            <Link
                                to={`/characters/${char.id}`}
                                key={char.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className={`group relative rounded-3xl p-6 ${char.color} hover:bg-white border-2 border-transparent hover:${char.borderColor} transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer flex flex-col items-center text-center`}
                            >
                                <div className="h-48 w-full flex items-center justify-center mb-6 relative z-10">
                                    <img
                                        src={char.img}
                                        alt={char.name}
                                        className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                                    />
                                </div>
                                <h3 className={`text-xl font-bold ${char.text} mb-2`}>{char.name}</h3>
                                <p className="text-sm text-gray-700 font-medium mb-4">{char.personality}</p>

                                <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-primary transition-colors">
                                    Read Profile <FaArrowRight />
                                </span>

                                {/* Glow Effect */}
                                <div className={`absolute inset-0 rounded-3xl bg-${char.color.split('-')[1]}-200 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Supporting Characters Grid */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 pl-4 border-l-8 border-secondary">Supporting Friends</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {supportingCharacters.map((char, index) => (
                            <div
                                key={char.id}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl ${char.color} border border-dashed ${char.borderColor} hover:scale-[1.02] transition-transform duration-300 shadow-sm`}
                            >
                                <div className="w-24 h-24 flex-shrink-0 bg-white rounded-full p-2 shadow-inner">
                                    <img src={char.img} alt={char.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-xl font-bold text-gray-800">{char.name}</h4>
                                    <p className="text-sm text-gray-600 italic mb-2">{char.desc}</p>
                                    <p className="text-sm font-medium text-gray-700">"{char.personality}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CharactersPage;
