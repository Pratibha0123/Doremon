# Doraemon Fan Website Project

A magical, nostalgic, and interactive fan website dedicated to the Doraemon universe, built with React and Tailwind CSS.

## 🌟 Features

### 1. **Complete Storytelling Homepage (`/`)**
The homepage is designed as a narrative journey through Doraemon's world:
- **Hero Section**: Welcoming banner with animated visuals.
- **Running Animation**: Interactive running Doraemon dividing sections.
- **Origins**: History of Fujiko F. Fujio and the manga's creation.
- **Movie Timeline**: A visual journey through iconic Doraemon films.
- **Character Meetup**: Introduction to the main cast.
- **Gadget Showcase**: Interactive slider of famous gadgets.
- **Gallery Preview**: Glimpse into the memory album.
- **Voice Interaction**: Buttons to hear Doraemon and Nobita (requires audio files).
- **Fun Facts**: Trivia cards about the series.

### 2. **Family Tree (`/parents`)**
A deeper look into the Nobi family legacy spanning 4 generations:
- **Ancestors**: Nobiru & Grandma Nobi.
- **Parents**: Nobisuke & Tamako (with custom AI portraits).
- **Nobita's Era**: Present day adventures.
- **Future**: Nobisuke Jr. and Sewashi Nobi.

### 3. **Interactive Gallery (`/gallery`)**
- Filterable image grid (Moments, Characters, Gadgets, Toys).
- Lightbox modal for full-screen viewing.
- "Show All" functionality to browse the entire asset collection.

### 4. **Detailed Sections**
- **Characters (`/characters`)**: Detailed profiles for friends and family.
- **Gadgets (`/gadgets`)**: Explored list of futuristic tools.
- **Movies (`/movies`)**: Cinema history timeline.
- **About (`/about`)**: Background on the anime's cultural impact.

---

## ⚠️ Known Issues & Missing Assets

### 1. **Missing Audio Files**
The **VoiceButtons** feature requires the following files to be manually added to the `public/sounds/` directory:
- `doraemon.mp3`
- `nobita.mp3`
*Current Status*: Buttons will likely fail or show errors if clicked without these files.

### 2. **Placeholder Assets**
- **Running Animation**: The `doraemon_reel.png` is currently a placeholder (duplicate of the standard Doraemon image) as the specific "holding a reel" animation frame was not generated.
- **Grandfather Image**: Uses a generated asset, but other minor extended family members might still use placeholders if not explicitly updated.

### 3. **Unused/Redundant Code**
- **App.jsx Imports**: The `Hero` and `Characters` components are imported in `App.jsx` but are technically rendered inside `Home.jsx`. These imports in `App.jsx` are redundant.
- **Duplicate Images**: `doraemon_reel.png` is a copy of `doraemon.png`.

---

## 🛠️ Tech Stack
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll), Custom CSS animations
- **Icons**: React Icons
- **Routing**: React Router DOM

## 📂 Project Structure
- `src/components/`: Reusable UI blocks (Hero, Navbar, FamilyTree, etc.)
- `src/pages/`: Route-specific page wrappers.
- `src/assets/`: Images and static resources.
- `src/data/`: Static data files for gadgets/characters.

## 🚀 How to Run
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Visit: `http://localhost:5173`
