/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          dark: '#0f0f0f',
          light: '#2d2d2d',
        },
        ivory: {
          DEFAULT: '#F9F6F0',
          alt: '#F0EDE6',
        },
        accent: {
          DEFAULT: '#B87333',
          light: '#c98b4d',
          dark: '#9a6029',
        },
        smoke: {
          DEFAULT: '#4A4A4A',
          light: '#5c5c5c',
          dark: '#3a3a3a',
        },
        secondary: {
          DEFAULT: '#4A4A4A',
          light: '#5c5c5c',
          dark: '#3a3a3a',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
