/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./public/index.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  purge: [
    "./src/**/*.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/MT/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/types/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontSize: {
      'xs': '0.3rem',
      'sm': '0.5rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    fontFamily: {
      'sans': ['PT Sans', 'system-ui' ],
    },
    extend: {
      colors : {
        'dark': '#004d65',
        'medium': '#008cb4',
        'light': '#f4f7fa',
        'gray': '#9CA3AF',
        'black': '#000000'
      },
      spacing: {
        '300': '300px',
        '480': '480px',
        '560': '560px',
      },
      keyframes: {
        'button_pulsing': {
          '0%, 100%': { 'box-shadow': '0 0 0 0px rgba(255, 255, 255, 0.5)' },
          '50%': { 'box-shadow': '0 0 0 14px rgba(255, 255, 255, 0.5)' },
        },
      },
      animation: {
        'button_pulse': 'button_pulsing 2s ease-in-out infinite',
      }
    }
  },
  plugins: [],
});

