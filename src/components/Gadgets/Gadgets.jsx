import React from "react";
import { coreGadgets, secondaryGadgets } from "../../data/gadgetsData";

const Gadgets = () => {
    // Combine all gadgets
    const allGadgets = [...coreGadgets, ...secondaryGadgets];

    return (
        <div id="gadgets" className="py-20 bg-light min-h-screen">
            <div className="container mx-auto px-4">
                <div data-aos="fade-down" className="text-center mb-16">
                    <p className="text-secondary text-lg font-bold uppercase tracking-widest mb-2">Futuristic Tools</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800">Doraemon's Gadgets</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Explore the amazing inventions from the 22nd century that make every day an adventure!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {allGadgets.map((gadget, index) => (
                        <div
                            key={gadget.id || index}
                            data-aos="fade-up"
                            data-aos-delay={index * 50} // Staggered animation
                            className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${gadget.border || 'border-gray-100'} hover:-translate-y-2 flex flex-col items-center text-center group h-full`}
                        >
                            <div className={`w-36 h-36 ${gadget.bg || 'bg-gray-50'} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative`}>
                                <img
                                    src={gadget.img}
                                    alt={gadget.name}
                                    className="w-24 h-24 object-contain drop-shadow-md z-10"
                                />
                                {/* Decorative circle behind */}
                                <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">{gadget.name}</h3>
                            <p className="text-gray-500 text-sm mb-4 flex-grow">{gadget.power || gadget.desc}</p>

                            <button className="mt-auto px-6 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full text-sm font-bold transition-all duration-300 transform group-hover:scale-105">
                                View Specs
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
