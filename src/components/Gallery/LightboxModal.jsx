import React, { useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LightboxModal = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight' && hasNext) onNext();
        if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    }, [onClose, onNext, onPrev, hasNext, hasPrev]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl transition-colors z-[110]"
                onClick={onClose}
            >
                <FaTimes />
            </button>

            {/* Navigation Buttons */}
            {hasPrev && (
                <button
                    className="absolute left-4 md:left-8 text-white/50 hover:text-white text-5xl transition-all hover:scale-110 z-[105] hidden md:block"
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                >
                    <FaChevronLeft />
                </button>
            )}

            {hasNext && (
                <button
                    className="absolute right-4 md:right-8 text-white/50 hover:text-white text-5xl transition-all hover:scale-110 z-[105] hidden md:block"
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                >
                    <FaChevronRight />
                </button>
            )}

            {/* Image Container */}
            <div
                className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative group">
                    <img
                        src={image.src}
                        alt={image.title}
                        className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain animate-zoom-in"
                    />
                </div>

                <div className="mt-6 text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
                    <p className="text-gray-300 max-w-2xl">{image.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default LightboxModal;
