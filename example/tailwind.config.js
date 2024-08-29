/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","..//node_modules/flowbite/dist/flowbite.min.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}