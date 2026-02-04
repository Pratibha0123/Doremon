import AnywhereDoorImg from "../assets/anywhere-door.png";
import BambooCopterImg from "../assets/bamboo-copter.png";
import TimeMachineImg from "../assets/time-machine.png";
import TimeClothImg from "../assets/time-cloth.png";
import BigLightImg from "../assets/big-light.png";
import MemoryBreadImg from "../assets/memory-bread.png";
import IfPhoneImg from "../assets/if-phone.png";
// Placeholders for those not generated yet, using similar style
const KonjacImg = "https://placehold.co/400x400/808080/FFFFFF?text=Konjac+Jelly";
const ToastImg = "https://placehold.co/400x400/f5deb3/8b4513?text=Duplication+Toast";
const SmallLightImg = BigLightImg; // Reusing big light but we can rotate it or just use same icon
const ColdPillImg = "https://placehold.co/400x400/afeeee/00008b?text=Cold+Pill";
const PerfumeImg = "https://placehold.co/400x400/ff69b4/ffffff?text=Mood+Perfume";
const PassLoopImg = "https://placehold.co/400x400/ff0000/ffffff?text=Pass+Loop";
const ShockGunImg = "https://placehold.co/400x400/ffff00/000000?text=Shock+Gun";
const SparePocketImg = "https://placehold.co/400x400/ffffff/000000?text=Spare+Pocket";


export const coreGadgets = [
    {
        id: "anywhere-door",
        name: "Anywhere Door",
        img: AnywhereDoorImg,
        power: "Teleports the user to any location instantly.",
        bg: "bg-pink-100",
        border: "border-pink-300",
        fullDesc: "One of Doraemon's most frequently used gadgets. By simply declaring a destination while opening the door, the user can travel to any place they desire instantly.",
        usage: "Traveling to school, vacation spots, or even other planets!"
    },
    {
        id: "bamboo-copter",
        name: "Bamboo Copter",
        img: BambooCopterImg,
        power: "Enables free flight through the sky.",
        bg: "bg-yellow-100",
        border: "border-yellow-300",
        fullDesc: "A small headgear with a propeller. When placed on the head, it allows the user to fly at speeds up to 80 km/h with a battery life of 8 hours.",
        usage: "Flying to school to avoid being late or escaping Giant!"
    },
    {
        id: "time-machine",
        name: "Time Machine",
        img: TimeMachineImg,
        power: "Travels across past and future timelines.",
        bg: "bg-blue-100",
        border: "border-blue-300",
        fullDesc: "Located in Nobita's desk drawer, this machine allows travel to any point in time. It navigates through the time-space tunnel.",
        usage: "Visiting ancestors, seeing the future, or fixing past mistakes."
    },
    {
        id: "time-cloth",
        name: "Time Cloth",
        img: TimeClothImg,
        power: "Erases or restores objects by covering them.",
        bg: "bg-red-100",
        border: "border-red-300",
        fullDesc: "A cloth with clocks on it. The red side advances time (aging objects), while the blue side reverses time (making objects new again).",
        usage: "Fixing broken toys, turning old electronics into new ones."
    },
    {
        id: "translation-konjac",
        name: "Translation Konjac",
        img: KonjacImg,
        power: "Instantly understand and speak any language.",
        bg: "bg-gray-100",
        border: "border-gray-300",
        fullDesc: "A piece of konjac jelly. When eaten, it allows the user to understand and speak any language, including alien languages.",
        usage: "Talking to animals or aliens."
    },
    {
        id: "duplication-toast",
        name: "Duplication Toast",
        img: MemoryBreadImg, // Using Memory Bread Image as they are often conflated or similar
        power: "Copies any written knowledge after eating.",
        bg: "bg-orange-100",
        border: "border-orange-300",
        fullDesc: "Press this toast against a page of a book, and the content is printed on it. Eating the toast allows you to memorize the content perfectly.",
        usage: "Cramming for tests!"
    },
    {
        id: "big-light",
        name: "Big Light",
        img: BigLightImg,
        power: "Enlarges people and objects.",
        bg: "bg-yellow-50",
        border: "border-yellow-400",
        fullDesc: "A flashlight that enlarges anything its beam hits. Useful for making small food big or turning toys into real vehicles.",
        usage: "Making dorayaki huge!"
    },
    {
        id: "small-light",
        name: "Small Light",
        img: SmallLightImg,
        power: "Shrinks people and objects.",
        bg: "bg-blue-50",
        border: "border-blue-400",
        fullDesc: "A flashlight that shrinks anything its beam hits. Useful for storage or exploring small places.",
        usage: "Sneaking into places or easier storage."
    }
];

export const secondaryGadgets = [
    {
        id: "stone-cold-pill",
        name: "Stone-Cold Pill",
        img: ColdPillImg,
        power: "Freezes people or objects instantly."
    },
    {
        id: "mood-perfume",
        name: "Mood-Change Perfume",
        img: PerfumeImg,
        power: "Alters emotions and personality."
    },
    {
        id: "if-phone",
        name: "If-Phone",
        img: IfPhoneImg,
        power: "Makes hypothetical 'if' situations real."
    },
    {
        id: "pass-loop",
        name: "Pass Loop",
        img: PassLoopImg,
        power: "Creates invisible looping pathways."
    },
    {
        id: "memory-bread",
        name: "Memory Bread",
        img: MemoryBreadImg,
        power: "Copies book knowledge into memory."
    },
    {
        id: "shock-gun",
        name: "Shock Gun",
        img: ShockGunImg,
        power: "Shoots mini lightning bolts."
    },
    {
        id: "spare-pocket",
        name: "Spare Pocket",
        img: SparePocketImg,
        power: "Backup storage for extra gadgets."
    }
];
