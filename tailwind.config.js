/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "snas": ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
    colors:{
      "white": "#FFFFFF",
      "black": "#000000",
      "yellow": "#F8B10E",
      "blue":"#21325F",
      "gray":{"light":"#CCCCCC",
    "dark":"#333333"}
    },
    extend: {},
  },
  plugins: [],
}
