import React, { useState, useMemo } from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryFilter from './GalleryFilter';
import LightboxModal from './LightboxModal';
import RunningDoraemonIcon from '../Animations/RunningDoraemonIcon';

// Import existing assets
import HeroImg from "../../assets/hero-banner.png";
import DoraImg from "../../assets/doraemon.png"; // Keeping for reference if needed
import AgDoor from "../../assets/anywhere-door.png";
import NobitaImg from "../../assets/nobita.png";
import ShizukaImg from "../../assets/shizuka.png";

// Import new assets from folder
import BambooCopter from "../../assets/bamboo-copter.png";
import BigLight from "../../assets/big-light.png";
import Dekisugi from "../../assets/dekisugi.png";
import DoraHero from "../../assets/dora-hero.png";
import Dora from "../../assets/dora.png";
import DoraemonBambooToy from "../../assets/doraemon_bamboo_copter_toy_1768758476521.png";
import DoraemonBiteToy from "../../assets/doraemon_bite_toy_1768758495059.png";
import DoraemonChatAvatar from "../../assets/doraemon_chat_avatar_1768758745251.png";
import DoraemonNobitaToys from "../../assets/doraemon_nobita_toys_1768758354495.png";
import DoraemonRobotToy from "../../assets/doraemon_robot_toy_1768758272874.png";
import DoraemonStackingToy from "../../assets/doraemon_stacking_toy_1768758444212.png";
import Dorami from "../../assets/dorami.png";
import DorayakiCushion from "../../assets/dorayaki_cushion_1768758309479.png";
import GadgetMiniatures from "../../assets/gadget_miniatures_1768758335403.png";
import Gian from "../../assets/gian.png";
import GianAvatar from "../../assets/gian_avatar_chat_1768758989552.png";
import GianConcert from "../../assets/gian_concert_anime_1768758093021.png";
import IfPhone from "../../assets/if-phone.png";
import Jaiko from "../../assets/jaiko.png";
import MemoryBread from "../../assets/memory-bread.png";
import NobitaAvatar from "../../assets/nobita_avatar_chat_1768758940172.png";
import NobitaRoom from "../../assets/nobita_room_set_1768758292208.png";
import ShizukaAvatar from "../../assets/shizuka_avatar_chat_1768758958270.png";
import ShizukaMusic from "../../assets/shizuka_music_anime_1768758110019.png";
import Suneo from "../../assets/suneo.png";
import SuneoAvatar from "../../assets/suneo_avatar_chat_1768758973058.png";
import TimeCloth from "../../assets/time-cloth.png";
import TimeMachine from "../../assets/time-machine.png";
import GrandmaImg from "../../assets/family/Grandma Nobi.png";
import GrandpaImg from "../../assets/family/Nobiru Nobi.png";
import FatherImg from "../../assets/family/Nobisuke Nobi,.png";
import UncleImg from "../../assets/family/Nobirou Nobi.png";
import SonImg from "../../assets/family/Nobisuke Jr..png";
import SewashiImg from "../../assets/family/Sewashi Nobi.png";
import TamakoImg from "../../assets/tamako.png";

import Moment1 from "../../assets/gallery-images/doraemon_moments_1.png";
import DoraWaving from "../../assets/doraemon-waving.png";
import DoraRunning from "../../assets/doraemon_running_reel.png";
import NobitaFamily from "../../assets/family/Nobita Nobi.png";
import TamakoFamily from "../../assets/family/Tamako Nobi.png";

const galleryData = [
    // Moments
    { id: 1, category: 'Moments', src: Moment1, title: 'Snack Time', desc: 'Doraemon and Nobita enjoying their favorite Dorayaki!' },
    { id: 2, category: 'Moments', src: Dora, title: 'Happy Doraemon', desc: 'Doraemon smiling brightly!' },
    { id: 41, category: 'Moments', src: DoraWaving, title: 'Hello Friends!', desc: 'Doraemon waving happily.' },
    { id: 42, category: 'Moments', src: DoraRunning, title: 'Movie Maker', desc: 'Doraemon rushing with a film reel.' },
    { id: 43, category: 'Moments', src: DoraImg, title: 'Classic Doraemon', desc: 'The original blue robot cat.' },
    { id: 3, category: 'Moments', src: HeroImg, title: 'Adventure Time', desc: 'The whole gang flying high together.' },
    { id: 4, category: 'Moments', src: DoraHero, title: 'Main Hero', desc: 'Doraemon ready for action.' },
    { id: 5, category: 'Moments', src: NobitaRoom, title: 'Nobita\'s Room', desc: 'The iconic room where everything begins.' },
    { id: 6, category: 'Moments', src: GianConcert, title: 'Gian\'s Recital', desc: 'Gian singing his heart out (plug your ears!).' },
    { id: 7, category: 'Moments', src: ShizukaMusic, title: 'Shizuka\'s Violin', desc: 'Shizuka practicing her violin.' },

    // Characters
    { id: 8, category: 'Characters', src: NobitaImg, title: 'Nobita Nobi', desc: 'The lazy but kind-hearted boy.' },
    { id: 44, category: 'Characters', src: NobitaFamily, title: 'Nobita (Portrait)', desc: 'Nobita in his family portrait.' },
    { id: 9, category: 'Characters', src: ShizukaImg, title: 'Shizuka Minamoto', desc: 'The sweet and smart girl.' },
    { id: 10, category: 'Characters', src: Gian, title: 'Takeshi Goda (Gian)', desc: 'The neighborhood bully with a soft spot.' },
    { id: 11, category: 'Characters', src: Suneo, title: 'Suneo Honekawa', desc: 'Rich, boastful, and quick-witted.' },
    { id: 12, category: 'Characters', src: Dorami, title: 'Dorami', desc: 'Doraemon\'s capable younger sister.' },
    { id: 13, category: 'Characters', src: Dekisugi, title: 'Hidetoshi Dekisugi', desc: 'The ace student and perfect boy.' },
    { id: 14, category: 'Characters', src: Jaiko, title: 'Jaiko', desc: 'Gian\'s younger sister who loves manga.' },
    { id: 34, category: 'Characters', src: GrandpaImg, title: 'Nobiru Nobi', desc: 'Nobita\'s stern but wise grandfather.' },
    { id: 35, category: 'Characters', src: GrandmaImg, title: 'Grandma Nobi', desc: 'The kindest grandmother.' },
    { id: 36, category: 'Characters', src: FatherImg, title: 'Nobisuke Nobi', desc: 'Nobita\'s hardworking father.' },
    { id: 37, category: 'Characters', src: TamakoImg, title: 'Tamako Nobi', desc: 'Nobita\'s strict but loving mother.' },
    { id: 45, category: 'Characters', src: TamakoFamily, title: 'Tamako (Portrait)', desc: 'Tamako in her best dress.' },
    { id: 38, category: 'Characters', src: UncleImg, title: 'Uncle Nobirou', desc: 'The adventurous uncle.' },
    { id: 39, category: 'Characters', src: SonImg, title: 'Nobisuke Jr.', desc: 'Nobita\'s strong son from the future.' },
    { id: 40, category: 'Characters', src: SewashiImg, title: 'Sewashi Nobi', desc: 'Doraemon\'s owner from the 22nd century.' },
    { id: 15, category: 'Characters', src: DoraemonChatAvatar, title: 'Doraemon Avatar', desc: 'Cute Doraemon close-up.' },
    { id: 16, category: 'Characters', src: NobitaAvatar, title: 'Nobita Avatar', desc: 'Nobita looking surprised.' },
    { id: 17, category: 'Characters', src: ShizukaAvatar, title: 'Shizuka Avatar', desc: 'Shizuka smiling sweetly.' },
    { id: 18, category: 'Characters', src: GianAvatar, title: 'Gian Avatar', desc: 'Gian looking tough.' },
    { id: 19, category: 'Characters', src: SuneoAvatar, title: 'Suneo Avatar', desc: 'Suneo planning something.' },

    // Gadgets
    { id: 20, category: 'Gadgets', src: AgDoor, title: 'Anywhere Door', desc: 'Go anywhere instantly!' },
    { id: 21, category: 'Gadgets', src: BambooCopter, title: 'Bamboo Copter', desc: 'Fly freely through the sky.' },
    { id: 22, category: 'Gadgets', src: BigLight, title: 'Big Light', desc: 'Make anything bigger!' },
    { id: 23, category: 'Gadgets', src: TimeMachine, title: 'Time Machine', desc: 'Travel through time via the desk drawer.' },
    { id: 24, category: 'Gadgets', src: TimeCloth, title: 'Time Cloth', desc: 'Make things new or old.' },
    { id: 25, category: 'Gadgets', src: MemoryBread, title: 'Memory Bread', desc: 'Memorize exams by eating bread!' },
    { id: 26, category: 'Gadgets', src: IfPhone, title: 'What-If Phone Box', desc: 'Experience a parallel world.' },
    { id: 27, category: 'Gadgets', src: GadgetMiniatures, title: 'Gadget Collection', desc: 'A collection of pocket gadgets.' },

    // Fun & Toys (Friendship & Fun)
    { id: 28, category: 'Friendship & Fun', src: DoraemonNobitaToys, title: 'Play Time', desc: 'Having fun with toys.' },
    { id: 29, category: 'Friendship & Fun', src: DoraemonStackingToy, title: 'Stacking Doraemon', desc: 'Balance game fun!' },
    { id: 30, category: 'Friendship & Fun', src: DoraemonRobotToy, title: 'Robot Figures', desc: 'Cool robotic figures.' },
    { id: 31, category: 'Friendship & Fun', src: DorayakiCushion, title: 'Dorayaki Cushion', desc: 'Giant comfy Dorayaki!' },
    { id: 32, category: 'Friendship & Fun', src: DoraemonBambooToy, title: 'Flying Toy', desc: 'Toy version of bamboo copter.' },
    { id: 33, category: 'Friendship & Fun', src: DoraemonBiteToy, title: 'Bite Toy', desc: 'Funny biting toy.' },
];

const categories = ['All', 'Moments', 'Characters', 'Gadgets', 'Friendship & Fun'];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = useMemo(() => {
        if (activeCategory === 'All') return galleryData;
        return galleryData.filter(img => img.category === activeCategory);
    }, [activeCategory]);

    const handleNext = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        if (currentIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentIndex + 1]);
        }
    };

    const handlePrev = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        if (currentIndex > 0) {
            setSelectedImage(filteredImages[currentIndex - 1]);
        }
    };

    const hasNext = selectedImage && filteredImages.findIndex(img => img.id === selectedImage.id) < filteredImages.length - 1;
    const hasPrev = selectedImage && filteredImages.findIndex(img => img.id === selectedImage.id) > 0;

    return (
        <div id="gallery" className="min-h-screen bg-gradient-to-b from-light to-white py-24 relative overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 pt-12" data-aos="fade-up">
                    <p className="text-primary font-bold tracking-widest uppercase mb-3">Magical Memories</p>
                    <h1 className="text-4xl md:text-6xl font-black text-dark mb-4 drop-shadow-sm">
                        Please Visit <span className="text-primary">Doraemon Gallery</span>
                    </h1>
                    <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
                        Relive the cutest, funniest, and most adventurous moments from the Doraemon universe.
                    </p>
                </div>

                <GalleryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />

                <GalleryGrid
                    images={filteredImages}
                    onImageClick={setSelectedImage}
                />
            </div>

            {selectedImage && (
                <LightboxModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    hasNext={hasNext}
                    hasPrev={hasPrev}
                />
            )}
        </div>
    );
};

export default Gallery;
