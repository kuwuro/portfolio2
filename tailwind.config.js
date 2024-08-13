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
        "black": "#222222",
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

