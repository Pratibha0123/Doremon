import React from 'react';
import { FaBolt, FaQuestion } from 'react-icons/fa';

const GadgetCard = ({ gadget, onClick, isCore = false }) => {
    return (
        <div
            onClick={() => onClick(gadget)}
            data-aos="fade-up"
            className={`group relative bg-white rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 
        ${isCore ? `p-6 border-b-4 ${gadget.border} hover:shadow-2xl` : 'p-4 border shadow-sm hover:shadow-lg hover:border-primary'}
        `}
        >
            {isCore && (
                <div className={`absolute top-0 right-0 w-20 h-20 ${gadget.bg} rounded-bl-full rounded-tr-3xl -z-0 opacity-50`}></div>
            )}

            <div className={`flex flex-col items-center text-center relative z-10`}>
                {/* Image Icon */}
                <div className={`mb-4 w-full flex items-center justify-center ${isCore ? 'h-40' : 'h-24'}`}>
                    <img
                        src={gadget.img}
                        alt={gadget.name}
                        className={`object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md ${isCore ? 'h-full w-auto' : 'h-16 w-16'}`}
                        // Fallback for missing images
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                    />
                    <div style={{ display: 'none' }} className="text-4xl text-gray-300"><FaQuestion /></div>
                </div>

                <h3 className={`font-bold text-gray-800 group-hover:text-primary transition-colors ${isCore ? 'text-xl' : 'text-md'}`}>
                    {gadget.name}
                </h3>

                {isCore && (
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                        {gadget.power}
                    </p>
                )}
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl ${isCore ? gadget.border.replace('border-', 'ring-') : 'ring-blue-200'} opacity-0 group-hover:ring-4 ring-opacity-30 transition-all duration-300 pointer-events-none`}></div>
        </div>
    );
};

export default GadgetCard;
