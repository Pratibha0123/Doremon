import React from 'react';
import { FaClock, FaHeart, FaLeaf, FaRobot } from 'react-icons/fa';

import GrandmaImg from "../../assets/family/Grandma Nobi.png";
import GrandpaImg from "../../assets/family/Nobiru Nobi.png";
import FatherImg from "../../assets/family/Nobisuke Nobi,.png";
import NobitaImg from "../../assets/family/Nobita Nobi.png";
import UncleImg from "../../assets/family/Nobirou Nobi.png";
import SonImg from "../../assets/family/Nobisuke Jr..png";
import SewashiImg from "../../assets/family/Sewashi Nobi.png";
import TamakoMetaImg from "../../assets/tamako.png";

const familyData = [
    {
        generation: "The Roots (Past)",
        theme: "bg-amber-50 border-amber-200",
        icon: <FaLeaf className="text-amber-500" />,
        description: "The wise foundation of the Nobi family in calm, traditional Tokyo.",
        members: [
            {
                name: "Nobiru Nobi",
                role: "Grandfather",
                img: GrandpaImg,
                desc: "Stern but wise. A strong, disciplined man with a traditional spirit, providing the calm aura of the Nobi ancestry."
            },
            {
                name: "Grandma Nobi",
                role: "Grandmother",
                img: GrandmaImg,
                desc: "A gentle, comforting soul with a warm smile. She is Nobita's greatest emotional refuge and source of unconditional love."
            }
        ]
    },
    {
        generation: "The Pillars (Parents)",
        theme: "bg-pink-50 border-pink-200",
        icon: <FaHeart className="text-pink-500" />,
        description: "The hardworking couple building a home and raising Nobita.",
        members: [
            {
                name: "Nobisuke Nobi",
                role: "Father",
                img: FatherImg,
                desc: "A calm, laid-back salaryman. Though tired from office work, he offers a peaceful, supportive presence to the family."
            },
            {
                name: "Tamako Nobi",
                role: "Mother",
                img: TamakoMetaImg,
                desc: "Strict yet caring housewife. The emotional backbone of the home, balancing discipline with deep motherly love."
            }
        ]
    },
    {
        generation: "The Present (Nobita's Era)",
        theme: "bg-blue-50 border-blue-200",
        icon: <FaClock className="text-blue-500" />,
        description: "Childhood adventures, school struggles, and life with Doraemon.",
        members: [
            {
                name: "Nobita Nobi",
                role: "The Protagonist",
                img: NobitaImg,
                desc: "Kind-hearted and emotional. Though clumsy, his innocent spirit and empathy are his greatest strengths."
            },
            {
                name: "Nobirou Nobi",
                role: "Uncle",
                img: UncleImg,
                desc: "The adventurous world-traveler. Cheerful and confident, he brings stories of the wider world to Nobita."
            }
        ]
    },
    {
        generation: "The Future (Legacy)",
        theme: "bg-purple-50 border-purple-200",
        icon: <FaRobot className="text-purple-500" />,
        description: "A brighter future made possible by Doraemon's intervention.",
        members: [
            {
                name: "Nobisuke Jr.",
                role: "Son",
                img: SonImg,
                desc: "A confident, athletic, and spirited future generation, representing the growth and hope of the family."
            },
            {
                name: "Sewashi Nobi",
                role: "Descendant",
                img: SewashiImg,
                desc: "The intelligent 22nd-century descendant. Responsible and thoughtful, he ensures the family legacy survives."
            }
        ]
    }
];

const FamilyTree = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-200 via-pink-200 to-purple-300 transform -translate-x-1/2 z-0 hidden md:block rounded-full opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">The Nobi Family Legacy</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From the humble roots of the past to the futuristic skyline of the 22nd century, follow the generations of the Nobi family.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    {familyData.map((gen, index) => (
                        <div key={gen.generation} className="relative" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <span className="bg-white p-3 rounded-full shadow-md text-2xl">{gen.icon}</span>
                                <h3 className="text-2xl font-bold text-gray-700">{gen.generation}</h3>
                            </div>

                            <div className={`p-8 rounded-3xl border-4 ${gen.theme} shadow-lg relative bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500`}>
                                <p className="text-center text-gray-500 italic mb-8">{gen.description}</p>

                                <div className="flex flex-wrap justify-center gap-8">
                                    {gen.members.map((member) => (
                                        <div key={member.name} className="flex flex-col items-center text-center group w-64">
                                            <div className="relative mb-4">
                                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md transform group-hover:scale-110 transition-transform duration-300">
                                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                                </div>
                                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm text-gray-600 whitespace-nowrap">
                                                    {member.role}
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
                                            <p className="text-sm text-gray-600 leading-snug">{member.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FamilyTree;
