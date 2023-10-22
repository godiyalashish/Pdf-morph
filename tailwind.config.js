/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#F9F7F7',
        secondary: '#112D4E',
        tertiary: '#3F72AF',
        bor: '#DBE2EF'
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      fontWeight: {
        light: 300,
        bold:700
      },
    },
  },
  plugins: [],
}
