/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
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
      gray: '#DFDFDF',
      black: '#000',
      black_2: '#1a1a1a',
    },
    fontFamily: {
      en: ['var(--font-en)', 'sans-serif'],
    },
  },
  plugins: [],
};
