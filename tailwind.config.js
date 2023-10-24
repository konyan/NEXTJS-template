/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
    './node_modules/pliny/**/*.js',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      spacing: {
        card_padding: ' 1.5rem',
      },
    },
    colors: {
      primary: '#3d1766',
      accent: '#ac59f0',
      white: '#fff',
      black: '#000',
      black_2: '#1a1a1a',
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      en: ['var(--font-en)', 'sans-serif'],
    },
  },
  plugins: [],
};
