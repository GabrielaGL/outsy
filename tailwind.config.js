const { Roboto } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      aqua: '#5CE1E6',
      blue: '#42AAAD',
      pink: '#F542A7',
      purple: '#7847BE',
      darkPurple: '#44006B',
      black: '#333333',
      white: '#FEFEF6',
    },
    fontFamily: {
      sans: 'Roboto',
    },
    extend: {
      fontFamily: Roboto,
      textColor: '#333333'
    }
  },
  plugins: [],
}
