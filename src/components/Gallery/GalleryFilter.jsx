import React from 'react';

const GalleryFilter = ({ categories, activeCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`
            px-6 py-2 rounded-full font-bold text-lg transition-all duration-300 shadow-sm border-2
            ${activeCategory === category
                            ? 'bg-primary text-white border-primary shadow-lg scale-105'
                            : 'bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary'
                        }
          `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default GalleryFilter;
