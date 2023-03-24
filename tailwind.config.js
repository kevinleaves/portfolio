/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        pulsemore: 'pulsemore 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulsemore: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
          '75%': { opacity: 0.25 },
        },
      },
    },
    colors: {
      darkPrimary: '#2C3333',
      darkSecondary: '#395B64',
      lightPrimary: '#E7F6F2',
      lightSecondary: '#A5C9CA',
    },
  },
  plugins: [],
}
