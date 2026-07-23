/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        'neon-blue': '#00f0ff',
        'neon-purple': '#bd00ff',
      }
    },
  },
  plugins: [],
};
