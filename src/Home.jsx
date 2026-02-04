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
import Footer from './components/Footer/Footer';

const Home = () => {
    return (
        <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Running Animation */}
            {/* <RunningDoraemonIcon /> */}

            {/* 3. Characters Preview */}
            <Characters />

            {/* 4. Famous Gadgets Highlight */}
            <FeaturedGadgets />

            {/* 5. Voice Interaction */}
            <VoiceButtons />

            {/* 6. Movie Journey */}
            <MovieJourney />

            {/* 7. Gallery Preview (Using full gallery component for now, or could limit it) */}
            <Gallery />

            {/* 8. Fun Facts */}
            <FunFacts />

            {/* 9. Call to Action */}
            <CallToAction />

            {/* Extra: About Section (kept at bottom or remove if CTA is last) */}
            <About />
        </main>
    );
};

export default Home;