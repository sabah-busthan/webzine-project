/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans Malayalam', 'sans-serif'],
        'manjari': ['manjari', 'sans-serif']
      }
    },
  },
  plugins: [],
}



