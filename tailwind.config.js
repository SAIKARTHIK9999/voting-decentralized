/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",     
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor : "#ffffff",
        textColor : "#03262b",
        primaryButton : "#0da7bf",
        secondaryColor : "#cff6fc"
      },
      fontFamily: {
        custom: ['CustomFontName', 'sans-serif'],
      },
      maxWidth: {
        '1/6': '15%',
      },
      height: {
        '158': '40rem',
      },
      width: {
        '258': '80rem',
      }
    },
  },
  plugins: [],
}