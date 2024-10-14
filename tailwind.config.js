/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-midnight-blue': '#082136',
        'azure-blue': '#0C63A9',
        'sky-blue': '#3BD0F9',
        'medium-aquamarine': '#3FD8C4',
        'off-white': '#F5F5F5',
        'pale-peach': '#F6EEE0',
        'pale-beige': '#ddd2c5',
        'dark-charcoal': '#48453e',
        'dark-grayish-brown': '#524E47',
        'dark-vanilla': '#b8af9d'
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/seaOfStars_bg.jpg')"
      },
      fontFamily: {
        'orpheus-pro': 'Orpheus Pro',
        'poppins': 'Poppins',
      }

    },
  },
  plugins: [],
}

