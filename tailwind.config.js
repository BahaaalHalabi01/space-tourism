import * as theme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      sm: '576px',
      md: '960px',
      lg: '1440px'
    },
    extend: {
      fontSize: {
        '8xl': '9.375rem',
        '7xl': '6.25rem',
        '6xl': '3.5rem',
        '4xl': '2rem',
        '3xl': '1.75rem'
      },
      letterSpacing: {
        wide: '.146rem',
        widest: '.3rem'
      },
      fontFamily: {
        sans: ['"Barlow Condensed"', ...theme.fontFamily.sans],
        serif: ['Bellefair', ...theme.fontFamily.serif]
      }
    }
  },
  plugins: []
};
