/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    },
  },
  plugins: [],
};
