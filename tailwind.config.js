/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '1120px',
      xxl: '1480px',
    },

    extend: {
      fontFamily: {
        sans: 'var(--sr-font)',
      },
      colors: {
        contrast: 'var(--contrast)',
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--primary))',
        border: 'hsl(var(--border))',
        text: {
          default: '#454749',
          bold: '#000',
          contrast: '#fff',
        },
        primary: {
          light: '#af9e8e',
          default: '#825a41',
          dark: '#262223',
        },
        neutral: {
          light: '#e0e3ea',
        },
      },
      borderRadius: {
        '4xl': '1.75rem',
      },
      boxShadow: {
        small:
          '0px 0px 5px 0px rgba(0,0,0,.02),0px 2px 10px 0px rgba(0,0,0,.06),0px 0px 1px 0px rgba(0,0,0,.3)',
        medium:
          '0px 0px 15px 0px rgba(0,0,0,.03),0px 2px 30px 0px rgba(0,0,0,.08),0px 0px 1px 0px rgba(0,0,0,.3)',
        large:
          '0px 0px 30px 0px rgba(0,0,0,.04),0px 30px 60px 0px rgba(0,0,0,.12),0px 0px 1px 0px rgba(0,0,0,.3)',
      },
      transitionDuration: {
        '12s': '12s',
        '6s': '6s',
        '4s': '4s',
      },
      data: {
        open: 'state="open"',
        closed: 'state="closed"',
        checked: 'state="checked"',
        'delayed-open': 'state="delayed-open"',
        'instant-open': 'state="instant-open"',
        'slide-bottom': 'slide="bottom"',
        'slide-top': 'slide="top"',
        animate: 'animate="true"',
        'animate-stop': 'animate="false"',
      },
      zIndex: { 1: 1 },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/aspect-ratio'),
  ],
};
