/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FDB813',
          blue: '#0A1828',
        },
        secondary: {
          sky: '#38BDF8',
          orange: '#FB923C',
        },
      },
    },
  },
  plugins: [],
};
