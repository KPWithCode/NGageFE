/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      NeonG: "#36b819",
      NeonG2: "#06c730",
      RichBlack: "#020402",
      Gold: "#FFD700",
      LamboGreen: "#d0ff00",
      brightOrange: "#ff9900",
      eerieBlack: "#191716",
      darkPurple: "#0F0326"
    },
    fontSize: {
      '2xs': "0.625rem", /* 10px */
      '3xs': "0.5rem", /* 8px */
      '10xl': "9rem", /* 144px */
      '11xl': "10.5rem", /* 168px */
      '12xl': "12rem", /* 192px */
      '13xl': "13.5rem", /* 216px */
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      EBgaramond: ['EBGaramond', 'serif'],
      lora:['Lora', 'sans-serif']
    },
    extend: {

    }
  },
  plugins: []
};