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
      "gray":{"light":"#C8C8C8",
    "dark":"#333333"}
    },
    extend: {},
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      '4k': '2000px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
