/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    fontFamily: {
      "dmsans": ["DM Sans", "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"],
      "poppins": ["Poppins", "sans-serif"],
    },
    colors: {
      "white": "#fafafa",
    },
    extend: {},
  },
  plugins: [],
}
