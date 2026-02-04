import React, { useState } from 'react';
import DoraReelImg from "../../assets/doraemon_reel.png"; // Placeholder for the running-with-reel image

const RunningDoraemonIcon = ({ className = "" }) => {
    const [isSpeeding, setIsSpeeding] = useState(false);

    return (
        <div
            className={`relative overflow-hidden w-full h-32 pointer-events-none ${className}`}
            style={{ zIndex: 5 }}
        >
            <div
                className={`absolute top-0 left-0 w-32 h-32 cursor-pointer pointer-events-auto flex flex-col items-center group
                    ${isSpeeding ? 'animate-run-fast' : 'animate-run-normal'}
                `}
                onClick={() => {
                    setIsSpeeding(true);
                    setTimeout(() => setIsSpeeding(false), 2000);
                }}
            >
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap border border-blue-100">
                    Filming the Next Movie! 🎥
                </div>

                {/* Doraemon Image with bobbing animation */}
                <img
                    src={DoraReelImg}
                    alt="Doraemon Running with Reel"
                    className="w-24 h-24 object-contain animate-bounce-run drop-shadow-lg"
                />

                {/* Shadow */}
                <div className="w-16 h-2 bg-black/10 rounded-full blur-sm mt-1 animate-shadow-pulse"></div>
            </div>
        </div>
    );
};

export default RunningDoraemonIcon;
