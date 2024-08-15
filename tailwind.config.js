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
        "white": "#fafafa",
        "white20": "#fafafa20",
        "white50": "#fafafa50",
        "black": "#222222",
        "black80": "#22222280",
      },
      height: {
        "500": "200vh",
      },
      width: {
        "500": "200vw",
      },
    },
  },
  plugins: [],
}

