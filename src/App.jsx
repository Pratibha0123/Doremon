import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Characters from './components/Characters/Characters';
import Gadgets from './components/Gadgets/Gadgets';
import Gallery from './components/Gallery/Gallery';
import Movies from './components/Movies/Movies';
import Parents from './components/Family/Parents';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import MusicController from './components/Audio/MusicController';

import RunningDoraemonIcon from './components/Animations/RunningDoraemonIcon';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage';

import Home from './Home';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white text-dark font-sans selection:bg-primary selection:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/gallery"
          element={
            <>
              <MusicController forcedTrack="main" />
              <Gallery />
            </>
          }
        />

        <Route
          path="/movies"
          element={
            <>
              <MusicController forcedTrack="rock" />
              <Movies />
            </>
          }
        />

        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/parents" element={<Parents />} />

        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
      </Routes >

      <Footer />
    </div >
  );
};

export default App;
