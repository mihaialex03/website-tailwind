/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#EDF2F4',
        accent: '#D90429',
        primary: '#2B2D42',
        secondary: '#8D99AE',
      },
    },
  },
  plugins: [],
}

