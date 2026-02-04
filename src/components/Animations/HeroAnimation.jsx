import React from 'react';
import DoraWaving from '../../assets/doraemon-waving.png';
import BambooCopter from '../../assets/bamboo-copter.png';
import AnywhereDoor from '../../assets/anywhere-door.png';
import TimeMachine from '../../assets/time-machine.png';

const HeroAnimation = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-60"></div>

            {/* Floating Gadgets Background */}
            <div className="absolute inset-0 z-0">
                {/* Bamboo Copter - Top Right */}
                <img
                    src={BambooCopter}
                    alt="Bamboo Copter"
                    className="absolute top-10 right-20 w-16 h-16 opacity-60 animate-float-slow"
                    style={{ animationDelay: '0s' }}
                />

                {/* Anywhere Door - Bottom Left */}
                <img
                    src={AnywhereDoor}
                    alt="Anywhere Door"
                    className="absolute bottom-20 left-10 w-24 h-32 opacity-50 animate-float-medium"
                    style={{ animationDelay: '1s' }}
                />

                {/* Time Machine - Top Left (Further back) */}
                <img
                    src={TimeMachine}
                    alt="Time Machine"
                    className="absolute top-20 left-20 w-32 h-32 opacity-30 animate-float-slow scale-75"
                    style={{ animationDelay: '2s' }}
                />
            </div>

            {/* Main Character - Doraemon Waving */}
            <div className="relative z-10 animate-hover-gentle">
                <div className="relative group cursor-pointer">
                    {/* Glow Effect behind Doraemon */}
                    <div className="absolute inset-0 bg-white/50 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>

                    <img
                        src={DoraWaving}
                        alt="Doraemon Waving"
                        className="w-80 h-auto md:w-96 drop-shadow-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-2"
                    />

                    {/* Hello Bubble */}
                    <div className="absolute -top-10 -right-10 bg-white px-6 py-3 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded-bl-none shadow-xl border-2 border-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left">
                        <p className="text-primary font-bold text-lg whitespace-nowrap">Hello Friends! 👋</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroAnimation;
