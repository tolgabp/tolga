/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2563eb', // custom blue
          light: '#60a5fa',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#14b8a6', // teal
          light: '#5eead4',
          dark: '#0f766e',
        },
        purple: {
          DEFAULT: '#a21caf',
          light: '#e879f9',
          dark: '#701a75',
        },
      },
    },
  },
  plugins: [],
}