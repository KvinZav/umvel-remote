/** @type {import('tailwindcss').Config} */
const colors = require ('./tw-config/colors.js') 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato'],
      },
      borderStyle: ['hover'],
    },
    colors,
    screens: {
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"]
    },
    colors
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *');
      addVariant('children-hover', '& > *:hover');
    }
  ],
}
