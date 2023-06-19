/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    transitionProperty: {
      transition: "300ms ease-in-out",
    },
    colors: {
      transparent: "transparent",
      title: "#303972",
      pm: {
        DEFAULT: "#3CB464",
        50: "#BEE9CD",
        100: "#AFE4C1",
        200: "#90DAA9",
        300: "#72D091",
        400: "#53C679",
        500: "#3CB464",
        600: "#2E8A4D",
        700: "#206035",
        800: "#12361E",
        900: "#040C06",
      },
      pm2: "#303972",
      white: "#ffffff",
      black: "#000000",
      offwhite: "#fafafa",
      gray: "#4b4b4b",
      gray3: "#A098AE",
      lgray: "#898989",
      llgray: "#e6e6e6",
      blue: "#0350b1",
      lblue: "#3573c1",
      green: "#00A15A",
      red: "#FF0000",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
