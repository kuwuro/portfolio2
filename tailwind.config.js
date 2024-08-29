/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        "dmsans": ["DM Sans", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "primary": "#8e8eeb",
        "secondary": "#e3ade9",
        "white": "#fafafa",
        "white10": "#fafafa10",
        "white20": "#fafafa20",
        "white30": "#fafafa30",
        "white50": "#fafafa50",
        "black": "#222222",
        "black20": "#22222220",
        "black80": "#22222280",
      },
      height: {
        "500": "200vh",
        "120": "30rem",
      },
      width: {
        "500": "200vw",
        "120": "30rem",
      },
    },
  },
  plugins: [],
}

