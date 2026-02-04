import React, { useState, useEffect } from 'react';
import DoraHappy from "../../assets/dora.png";

const DoraemonPanic = () => {
    const [showMouse, setShowMouse] = useState(false);
    const [isPanicking, setIsPanicking] = useState(false);

    useEffect(() => {
        // Animation loop
        const loop = setInterval(() => {
            // Mouse appears
            setShowMouse(true);

            // Doraemon notices and panics shortly after
            setTimeout(() => {
                setIsPanicking(true);
            }, 500);

            // Reset after a few seconds
            setTimeout(() => {
                setShowMouse(false);
                setIsPanicking(false);
            }, 4000);

        }, 5000); // Total loop cycle 5s

        return () => clearInterval(loop);
    }, []);

    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Mouse Icon */}
            <div
                className={`absolute bottom-0 right-0 text-5xl transition-all duration-300 z-10 ${showMouse ? 'opacity-100 translate-x-0 rotate-12' : 'opacity-0 translate-x-10'
                    }`}
            >
                🐀
            </div>

            {/* Doraemon Reaction */}
            <div className={`transition-all duration-200 origin-bottom ${isPanicking ? 'animate-panic scale-110' : 'animate-bounce-slow'}`}>
                {isPanicking ? (
                    <div className="relative">
                        {/* Using CSS filter to make Doraemon look scared/blue-shifted */}
                        <img
                            src={DoraHappy}
                            alt="Panicked Doraemon"
                            className="w-48 h-48 object-contain drop-shadow-2xl filter hue-rotate-[200deg] brightness-125 contrast-125 saturate-150"
                        />
                        {/* Sweat Drops */}
                        <div className="absolute -top-4 -right-4 text-blue-500 text-3xl animate-ping">💦</div>
                        <div className="absolute top-0 -left-6 text-blue-500 text-4xl animate-ping delay-75">💦</div>
                        <div className="absolute top-1/2 -right-8 text-blue-500 text-2xl animate-ping delay-150">💧</div>

                        {/* Speech Bubble */}
                        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-3xl shadow-2xl border-4 border-red-500 whitespace-nowrap animate-pop-in z-50 rotate-[-5deg]">
                            <span className="font-black text-red-600 text-3xl tracking-tighter drop-shadow-sm">GYYAAAA!! 🐭</span>
                            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-[12px] border-l-transparent border-r-transparent border-t-red-500"></div>
                        </div>
                    </div>
                ) : (
                    <img
                        src={DoraHappy}
                        alt="Happy Doraemon"
                        className="w-48 h-48 object-contain drop-shadow-md hover:scale-105 transition-transform"
                    />
                )}
            </div>
        </div>
    );
};

export default DoraemonPanic;
