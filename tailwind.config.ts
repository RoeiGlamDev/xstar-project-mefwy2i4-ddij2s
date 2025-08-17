import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#D5006D', // Custom pink
          light: '#FF4081', // Lighter pink for accents
        },
        black: {
          DEFAULT: '#000000', // Custom black
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideIn: 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode
  variants: {
    extend: {
      // Extend variants for dark mode
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
});