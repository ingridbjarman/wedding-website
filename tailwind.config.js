/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brittany:  ['Brittany', 'serif'],
        montserrat: ['Montserrat', 'light']
      },
      colors: {
        'terracotta': '#A86E4D',
        'olive': '#e1e3cf'
      },
      container: {
        center: true
      }
    }
  },
  plugins: [
    require('tailwind-hamburgers'),
  ],
}
