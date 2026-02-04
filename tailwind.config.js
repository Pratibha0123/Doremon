/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00A0E9', // Doraemon Blue
                secondary: '#EF3D43', // Red
                accent: '#FFD700', // Yellow (Bell)
                dark: '#333333',
                light: '#F4F9FC', // Soft Sky Blueish White
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
        },
    },
    plugins: [],
}