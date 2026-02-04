import React from 'react';
import Hero from './components/Hero/Hero';
import Characters from './components/Characters/Characters';
import FeaturedGadgets from './components/Gadgets/FeaturedGadgets';
import VoiceButtons from './components/VoiceButtons/VoiceButtons';
import MovieJourney from './components/Movies/MovieJourney';
import Gallery from './components/Gallery/Gallery';
import FunFacts from './components/FunFacts/FunFacts';
import CallToAction from './components/CTA/CallToAction';
import RunningDoraemonIcon from './components/Animations/RunningDoraemonIcon';
import About from './components/About/About';
import Parents from './components/Family/Parents';
import Footer from './components/Footer/Footer';

import MusicController from './components/Audio/MusicController';

const Home = () => {
    return (
        <main>
            <MusicController />

            <Hero />

            <RunningDoraemonIcon />

            <About />

            <MovieJourney />

            <Characters />

            <RunningDoraemonIcon />

            <Parents />

            <FeaturedGadgets />

            <Gallery isPreview={true} />

            <VoiceButtons />

            <FunFacts />

            <CallToAction />
        </main>
    );
};

export default Home;