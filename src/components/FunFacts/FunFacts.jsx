import React, { useState } from 'react';
import { FaHeart, FaStar, FaLightbulb } from 'react-icons/fa';

const facts = [
    {
        id: 1,
        icon: <FaHeart className="text-red-500 text-3xl mb-4" />,
        text: "Doraemon loves Dorayaki more than anything! 🍡",
        bg: "bg-red-50",
        border: "border-red-100"
    },
    {
        id: 2,
        icon: <FaStar className="text-yellow-500 text-3xl mb-4" />,
        text: "Nobita's future wife is actually Shizuka! 💍",
        bg: "bg-yellow-50",
        border: "border-yellow-100"
    },
    {
        id: 3,
        icon: <FaLightbulb className="text-blue-500 text-3xl mb-4" />,
        text: "Doraemon is terribly afraid of mice! 🐭",
        bg: "bg-blue-50",
        border: "border-blue-100"
    }
];

const FunFacts = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-black text-dark mb-4">Did You Know? 🤯</h2>
                    <p className="text-gray-600">Surprising facts about our favorite robot cat.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {facts.map((fact, index) => (
                        <div
                            key={fact.id}
                            data-aos="flip-left"
                            data-aos-delay={index * 100}
                            className={`p-8 rounded-3xl border-2 ${fact.border} ${fact.bg} text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                        >
                            <div className="transform group-hover:scale-110 transition-transform duration-300 inline-block">
                                {fact.icon}
                            </div>
                            <p className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                                {fact.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunFacts;
