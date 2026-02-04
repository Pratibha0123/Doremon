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
            <RunningDoraemonIcon />

            {/* 3. About Doraemon (Origin & History) - Moved UP per request */}
            <About />

            {/* 4. Movie History Timeline */}
            <MovieJourney />

            {/* 5. Characters Preview */}
            <Characters />

            {/* 6. Famous Gadgets */}
            <FeaturedGadgets />

            {/* 7. Gallery Grid */}
            <Gallery />

            {/* 8. Voice Interaction */}
            <VoiceButtons />

            {/* 9. Fun Facts & Extras */}
            <FunFacts />

            {/* 10. Call to Action */}
            <CallToAction />
        </main>
    );
};

export default Home;