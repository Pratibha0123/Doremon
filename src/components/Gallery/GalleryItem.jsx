import React from 'react';
import { FaSearchPlus } from "react-icons/fa";

const GalleryItem = ({ image, onClick }) => {
    return (
        <div
            className="relative group rounded-[20px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-white break-inside-avoid mb-6"
            onClick={() => onClick(image)}
            data-aos="fade-up"
        >
            <div className="overflow-hidden">
                <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm opacity-90">{image.desc}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                    <FaSearchPlus size={24} />
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;
