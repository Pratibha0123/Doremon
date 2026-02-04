import DoraemonImg from "../assets/doraemon.png";
import NobitaImg from "../assets/nobita.png";
import ShizukaImg from "../assets/shizuka.png";
import GianImg from "../assets/gian.png";
import SuneoImg from "../assets/suneo.png";
import DoramiImg from "../assets/dorami.png";
import DekisugiImg from "../assets/dekisugi.png";
import JaikoImg from "../assets/jaiko.png";

export const mainCharacters = [
    {
        id: "doraemon",
        name: "Doraemon",
        img: DoraemonImg,
        color: "bg-blue-100",
        borderColor: "border-blue-400",
        text: "text-blue-600",
        desc: "A cat-type robot from the 22nd century to help Nobita.",
        personality: "Helpful, inventive, but afraid of mice!",
        fullDesc: "Blue robotic cat from the 22nd century, sent to help Nobita. Friendly and inventive with his 4D Pocket gadgets, but panics easily, fears mice (after losing his ears), and loves dorayaki.",
        highlight: [
            { text: "4D Pocket", icon: "👜" },
            { text: "Gadgets", icon: "🚀" },
            { text: "Love for Dorayaki", icon: "🥞" }
        ]
    },
    {
        id: "nobita",
        name: "Nobita Nobi",
        img: NobitaImg,
        color: "bg-yellow-100",
        borderColor: "border-yellow-400",
        text: "text-yellow-600",
        desc: "A kind-hearted but lazy boy who is bad at sports and studying.",
        personality: "Lazy and clumsy, but incredibly kind-hearted.",
        fullDesc: "Lazy, clumsy 10-year-old protagonist with poor grades and bad luck. Creative and kind-hearted at core, he grows through Doraemon's help, showing loyalty despite constant mishaps.",
        highlight: [
            { text: "Sharpshooting", icon: "🎯" },
            { text: "Cat's Cradle", icon: "🧶" },
            { text: "Loyalty", icon: "🤝" }
        ]
    },
    {
        id: "shizuka",
        name: "Shizuka Minamoto",
        img: ShizukaImg,
        color: "bg-pink-100",
        borderColor: "border-pink-400",
        text: "text-pink-600",
        desc: "A sweet, kind, and pretty girl who Nobita loves.",
        personality: "Sweet, smart, and loves playing the violin.",
        fullDesc: "Nobita's kind, smart crush and group moral guide. Loves baths, violin (poorly), and sweet potatoes; dislikes frogs. She's patient, pretty, and often helps calm the chaos.",
        highlight: [
            { text: "Kindness", icon: "💖" },
            { text: "Violin", icon: "🎻" },
            { text: "Baking", icon: "🍪" }
        ]
    },
    {
        id: "gian",
        name: "Takeshi Goda (Gian)",
        img: GianImg,
        color: "bg-orange-100",
        borderColor: "border-orange-400",
        text: "text-orange-600",
        desc: "A strong and bullying classmate, but known for his terrible singing.",
        personality: "Tough bully, but a loyal friend in danger.",
        fullDesc: "Bully with brute strength and awful singing he adores. Steals toys but turns loyal in crises, surprisingly sensitive and caring toward friends when it counts.",
        highlight: [
            { text: "Strength", icon: "💪" },
            { text: "Singing", icon: "🎤" },
            { text: "Loyalty", icon: "🛡️" }
        ]
    },
    {
        id: "suneo",
        name: "Suneo Honekawa",
        img: SuneoImg,
        color: "bg-green-100",
        borderColor: "border-green-400",
        text: "text-green-600",
        desc: "A wealthy and arrogant boy who loves to show off his toys.",
        personality: "Rich, boastful, but clever and artistic.",
        fullDesc: "Rich, boastful show-off with fox-like face and artistic talent. Bullies with Gian out of fear, but clever, self-centered, and secretly envious; joins adventures despite cowardice.",
        highlight: [
            { text: "Radio Control Toys", icon: "🎮" },
            { text: "Fashion", icon: "👕" },
            { text: "Artistic Skill", icon: "🎨" }
        ]
    }
];

export const supportingCharacters = [
    {
        id: "dekisugi",
        name: "Hidetoshi Dekisugi",
        img: DekisugiImg,
        color: "bg-indigo-50",
        borderColor: "border-indigo-200",
        personality: "Perfect student, polite, and intelligent.",
        desc: "Friendly rival for Shizuka."
    },
    {
        id: "jaiko",
        name: "Jaiko Goda",
        img: JaikoImg,
        color: "bg-red-50",
        borderColor: "border-red-200",
        personality: "Sweet, kind, aspiring manga artist.",
        desc: "Gian's younger sister."
    },
    {
        id: "dorami",
        name: "Dorami",
        img: DoramiImg,
        color: "bg-yellow-50", // Lighter yellow distinct from Nobita
        borderColor: "border-yellow-300",
        personality: "Smarter, calmer, more advanced robot cat.",
        desc: "Doraemon's younger sister."
    }
];
