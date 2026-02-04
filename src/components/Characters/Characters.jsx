import React from "react";
import DoraemonImg from "../../assets/doraemon.png";
import NobitaImg from "../../assets/nobita.png";
import ShizukaImg from "../../assets/shizuka.png";
import GianImg from "../../assets/gian.png";
import SuneoImg from "../../assets/suneo.png";
import DoramiImg from "../../assets/dorami.png";
import DekisugiImg from "../../assets/dekisugi.png";
import JaikoImg from "../../assets/jaiko.png";

const charactersData = [
    {
        name: "Doraemon",
        img: DoraemonImg,
        color: "bg-blue-100",
        desc: "A cat-type robot from the 22nd century to help Nobita.",
    },
    {
        name: "Nobita Nobi",
        img: NobitaImg,
        color: "bg-yellow-100",
        desc: "A kind-hearted but lazy boy who is bad at sports and studying.",
    },
    {
        name: "Shizuka Minamoto",
        img: ShizukaImg,
        color: "bg-pink-100",
        desc: "A sweet, kind, and pretty girl who Nobita loves.",
    },
    {
        name: "Takeshi Goda (Gian)",
        img: GianImg,
        color: "bg-orange-100",
        desc: "A strong and bullying classmate, but known for his terrible singing.",
    },
    {
        name: "Suneo Honekawa",
        img: SuneoImg,
        color: "bg-green-100",
        desc: "A wealthy and arrogant boy who loves to show off his toys.",
    },
    {
        name: "Dorami",
        img: DoramiImg,
        color: "bg-yellow-50",
        desc: "Doraemon's younger sister. She is smarter and more capable than him!",
    },
    {
        name: "Hidetoshi Dekisugi",
        img: DekisugiImg,
        color: "bg-indigo-50",
        desc: "The ace student. Good at everything, making Nobita jealous.",
    },
    {
        name: "Jaiko Goda",
        img: JaikoImg,
        color: "bg-red-50",
        desc: "Gian's younger sister. She loves writing manga and is Gian's soft spot.",
    }
];

const Characters = () => {
    return (
        <div id="characters" className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up" className="text-center mb-16">
                    <p className="text-primary text-lg font-bold uppercase tracking-widest mb-2">My Best Friends</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800">Meet the Characters</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {charactersData.map((char, index) => (
                        <div
                            key={char.name}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className={`group relative rounded-3xl p-6 ${char.color} hover:bg-white border-2 border-transparent hover:border-primary transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer`}
                        >
                            <div className="h-64 w-full flex items-center justify-center mb-6 relative z-10">
                                <img
                                    src={char.img}
                                    alt={char.name}
                                    className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                                />
                            </div>

                            <div className="text-center relative z-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{char.name}</h3>
                                <p className="text-sm text-gray-600 line-clamp-3">{char.desc}</p>
                            </div>

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Characters;
