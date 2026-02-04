import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Reuse existing gadget assets/data conceptually, but hardcode for specific "Features"
import AgDoor from "../../assets/anywhere-door.png";
import BambooCopter from "../../assets/bamboo-copter.png";
import TimeMachine from "../../assets/time-machine.png";
import MemoryBread from "../../assets/memory-bread.png";

const featuredGadgets = [
    {
        id: 1,
        name: "Anywhere Door",
        img: AgDoor,
        desc: "Go anywhere instantly just by thinking about it!",
        color: "bg-pink-100",
        border: "border-pink-300"
    },
    {
        id: 2,
        name: "Bamboo Copter",
        img: BambooCopter,
        desc: "Fly through the sky with this classic gadget!",
        color: "bg-yellow-100",
        border: "border-yellow-300"
    },
    {
        id: 3,
        name: "Time Machine",
        img: TimeMachine,
        desc: "Travel to the past or future via the desk drawer.",
        color: "bg-purple-100",
        border: "border-purple-300"
    },
    {
        id: 4,
        name: "Memory Bread",
        img: MemoryBread,
        desc: "Memorize anything just by eating this toast (don't poop!).",
        color: "bg-green-100",
        border: "border-green-300"
    }
];

const FeaturedGadgets = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-4xl font-black text-dark mb-2">✨ Featured Gadgets</h2>
                    <p className="text-gray-600">Which one would you choose?</p>
                </div>

                <div className="relative max-w-5xl mx-auto group">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                        <FaChevronRight size={24} />
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {featuredGadgets.map((gadget, index) => (
                            <div
                                key={gadget.id}
                                className={`min-w-[280px] md:min-w-[320px] p-6 rounded-3xl ${gadget.color} border-2 ${gadget.border} snap-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-help`}
                                data-aos="fade-left"
                                data-aos-delay={index * 100}
                                title="Click to learn more!"
                            >
                                <div className="h-40 flex items-center justify-center mb-6">
                                    <img src={gadget.img} alt={gadget.name} className="h-32 w-auto object-contain drop-shadow-md animate-bounce-slow" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{gadget.name}</h3>
                                <p className="text-gray-700 font-medium">{gadget.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedGadgets;
