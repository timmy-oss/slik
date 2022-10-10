/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#ffffff',
        'prim-color': '#ee3a46',
        'sec-color': '#d4af37',
        'c-1': '#0f6194',
        'c-2': '#0b8fe0'
      },
    },
  },
  plugins: [],
}
