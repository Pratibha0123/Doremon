import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const MusicController = ({ forcedTrack = null }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(forcedTrack || 'main'); // 'main' or 'rock'
    const [userHasInteracted, setUserHasInteracted] = useState(false);

    const mainAudioRef = useRef(new Audio('/sounds/doremon.mp3'));
    const rockAudioRef = useRef(new Audio('/sounds/rock_doraemon.mp3'));

    useEffect(() => {
        // Configure audio
        mainAudioRef.current.loop = true;
        mainAudioRef.current.volume = 0.5;

        rockAudioRef.current.volume = 0.5;

        // Attempt Autoplay
        const attemptPlay = async () => {
            try {
                const trackToPlay = forcedTrack || 'main'; // Determine which track to play
                if (trackToPlay === 'main') {
                    await mainAudioRef.current.play();
                } else {
                    await rockAudioRef.current.play();
                }

                setIsPlaying(true);
                setUserHasInteracted(true);
            } catch (err) {
                console.log("Autoplay blocked by browser. Waiting for user interaction.");
                setIsPlaying(false);

                const onInteract = () => {
                    const trackToPlay = forcedTrack || 'main';
                    setIsPlaying(true);
                    setUserHasInteracted(true);

                    if (trackToPlay === 'main') mainAudioRef.current.play();
                    else rockAudioRef.current.play();

                    document.removeEventListener('click', onInteract);
                    document.removeEventListener('keydown', onInteract);
                };

                document.addEventListener('click', onInteract);
                document.addEventListener('keydown', onInteract);
            }
        };

        attemptPlay();

        return () => {
            mainAudioRef.current.pause();
            rockAudioRef.current.pause();
        };
    }, []);

    useEffect(() => {
        if (forcedTrack) return;

        const handleScroll = () => {
            if (!isPlaying) return;

            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const midpoint = docHeight / 2;

            if (scrollY < midpoint) {
                if (currentTrack !== 'main') {
                    setCurrentTrack('main');
                }
            } else {
                if (currentTrack !== 'rock') {
                    setCurrentTrack('rock');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isPlaying, currentTrack, forcedTrack]);

    useEffect(() => {
        if (!isPlaying || !userHasInteracted) return;

        if (currentTrack === 'main') {
            rockAudioRef.current.pause();
            rockAudioRef.current.currentTime = 0; // Optional: restart or resume
            mainAudioRef.current.play().catch(e => console.log("Audio play failed:", e));
        } else {
            mainAudioRef.current.pause();
            mainAudioRef.current.currentTime = 0;
            rockAudioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
    }, [currentTrack, isPlaying, userHasInteracted]);

    const toggleMusic = () => {
        if (!userHasInteracted) {
            setUserHasInteracted(true);
            setIsPlaying(true);
            if (currentTrack === 'main') mainAudioRef.current.play();
            else rockAudioRef.current.play();
        } else {
            if (isPlaying) {
                mainAudioRef.current.pause();
                rockAudioRef.current.pause();
                setIsPlaying(false);
            } else {
                setIsPlaying(true);
                if (currentTrack === 'main') mainAudioRef.current.play();
                else rockAudioRef.current.play();
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={toggleMusic}
                className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isPlaying
                    ? 'bg-gradient-to-r from-primary to-blue-400 text-white animate-spin-slow'
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                    }`}
                title="Toggle Background Music"
            >
                {isPlaying ? <FaMusic className="text-xl" /> : <FaVolumeMute className="text-xl" />}
            </button>

            <div className={`absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                {currentTrack === 'main' ? 'Classic' : 'Rock! 🎸'}
            </div>
        </div >
    );
};

export default MusicController;
