/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#037b7',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1 rem ',
                    sm: "3rem",
                },
            },
        },
    },
    plugins: [],
}