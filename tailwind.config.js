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
        'light-peach': '#FFDDB1',
        'pale-peach': '#F6EEE0',
        'gray-beige': '#B8A889',
        'pale-beige': '#ddd2c5',
        'dark-charcoal': '#48453e',
        'dark-grayish-brown': '#524E47',
        'dark-vanilla': '#b8af9d',
        'dark-teal': '#122A2C'
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/background.png')",
        'dlc-hero-pattern': "url('src/assets/images/backgroundDlc.png')",
        'dlc-hero-pattern-mobile': "url('src/assets/images/backgroundDlc-mobile.png')"
      },
      fontFamily: {
        'orpheus-pro': 'Orpheus Pro',
        'poppins': 'Poppins',
        'rye': 'Rye'
      }

    },
  },
  plugins: [],
}

