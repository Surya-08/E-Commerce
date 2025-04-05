/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#5d7ad3',
        'beige': '#f4f4de',
        'navy-blue': '#1e264b',
        'purple': '#98a5b6',
      }
    },
  },
  plugins: [],
}

