

# 🌟 Doraemon 3D Universe

Welcome to **Doraemon 3D Universe** — a modern, interactive, and immersive web experience inspired by the iconic robotic cat from the 22nd century.
This project blends **animation, 3D-style interactions, and modern UI design** to re-imagine the Doraemon world for the web.

Built with **React**, **Framer Motion**, and **CSS-based 3D effects**, the project focuses on smooth animations, playful interactions, and a premium, anime-inspired look.

---

## 🚀 Overview

**Doraemon 3D Universe** is not just a static fan website — it’s an **interactive experience**.

Users can:

* Explore Doraemon characters in animated, character-themed pages
* Interact with chat-style interfaces (DoraChat & CharacterChat)
* Browse episodes, movies, gadgets, toys, and merchandise
* Enjoy 3D hover effects, parallax motion, and glassmorphism UI

The goal is to deliver a **cinematic, playful, and modern Doraemon experience** while keeping everything fast, responsive, and user-friendly.

---

## ✨ Key Features

### 🌌 Immersive 3D Experience

* **3D Hero Section** with depth, motion, and visual impact
* **Interactive Cards** with tilt & hover effects using CSS 3D + Framer Motion
* **Parallax Scrolling** for layered backgrounds and smooth movement

### 🎭 Character & Content Showcase

* **Dynamic Character Pages** (Suneo, Gian, Nobita, Shizuka, Doraemon)
* **Episodes & Movies Pages** with rich layouts and animations
* **Gadget Gallery** showcasing Doraemon’s iconic tools

### 💬 Interactive Features

* **DoraChat** – chat-style interaction with Doraemon
* **CharacterChat** – character-specific chat experiences
* **Toy Store & Gallery** – animated showcase of Doraemon toys and items

### 🎨 Modern UI / UX

* **Glassmorphism Design** with blur, glow, and depth
* **Dark / Light Mode** support
* **Fully Responsive Layout** (desktop, tablet, mobile)
* **Smooth Animations** using Framer Motion & AOS

---

## 🛠️ Tech Stack

### Core

* **React 18**
* **Vite** – lightning-fast development & builds

### Styling

* **Tailwind CSS**
* `clsx` & `tailwind-merge` for clean dynamic class handling

### Animations & Effects

* **Framer Motion** – advanced animations & gestures
* **AOS (Animate On Scroll)** – scroll-based animations

### Routing & UI

* **React Router DOM**
* **React Icons**

---

## 📂 Project Structure

```bash
doremon/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── assets/             # Project assets
│   ├── components/
│   │   ├── Characters/     # Character pages (Suneo, Gian, etc.)
│   │   ├── Gallery/        # Image & gadget galleries
│   │   ├── Hero/           # Hero section
│   │   ├── Navbar/         # Navigation
│   │   ├── Pages/          # Main routes
│   │   │   ├── DoraChat.jsx
│   │   │   ├── CharacterChat.jsx
│   │   │   ├── Episodes.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── Store.jsx
│   │   │   └── Toys.jsx
│   │   ├── Shared/         # Reusable UI & 3D cards
│   │   └── ThemeToggle.jsx # Dark/Light mode switch
│   ├── data/               # Static JSON data
│   ├── App.jsx             # App layout & routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
└── package.json
