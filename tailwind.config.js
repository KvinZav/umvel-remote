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
      }
    },
    colors,
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
}
