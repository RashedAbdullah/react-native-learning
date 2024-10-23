/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#C5DEFE',
      },
      fontFamily: {
        bangla: ['TiroBangla-Regular'],
      },
    },
  },

  plugins: [],
};