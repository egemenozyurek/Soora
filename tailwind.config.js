/** @type {import('tailwindcss').Config} */

const theme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [ 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...theme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
