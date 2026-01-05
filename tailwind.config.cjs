const { fontFamily } = require('tailwindcss/defaultTheme');
const animate = require('tailwindcss-animate');

/**************************************************************/
/** If you change the content paths, also update app.css!!!  **/
/**************************************************************/

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        background: 'hsl(222.2, 84%, 4%)',
        foreground: 'hsl(210, 40%, 98%)',
        muted: 'hsl(217.2, 32.6%, 17.5%)'
      },
      boxShadow: {
        glow: '0 0 80px rgba(139, 92, 246, 0.25)'
      }
    }
  },
  plugins: [animate, require('@tailwindcss/typography')]
};
