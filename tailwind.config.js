const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.purple,
        tertiary: colors.lightBlue,
        neutral: colors.gray,
        violator: colors.rose
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        30: '30px',
        36: '36px',
        48: '48px',
        60: '60px',
        80: '80px',
      },
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
    transitionProperty: [
      'responsive',
      'hover',
      'focus',
      'motion-safe',
      'motion-reduce',
    ],
  },
  plugins: [],
};
