/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",     
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor : "#ecfbfe",
        textColor : "#03262b",
        primaryButton : "#0da7bf",
        secondaryColor : "#cff6fc"
      },
      fontFamily: {
        custom: ['CustomFontName', 'sans-serif'],
      }
    },
  },
  plugins: [],
}