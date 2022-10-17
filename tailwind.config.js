/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': {'raw': '(max-width: 380px)'},
        'large': {'raw': '(max-width: 1024px)'},
        'smallmin': {'raw': '(min-width: 180px)'},
      }
    },
  },
  plugins: [],
}
