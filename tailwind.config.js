/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bGreen: "#01A64B",
        bGold: "#F7D801",
        bGray: "#2C2C2C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jockey: ["Jockey One", "sans-serif"],
      },
    },
  },
  plugins: [],
}