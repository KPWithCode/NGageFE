/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      NeonG: "#36b819",
      NeonG2: "#06c730",
      RichBlack: "#020402",
      Gold: "#FFD700",
      DarkGold:"#f5d505"
    },
    fontSize: {
      '10xl': "9rem", /* 144px */
      '11xl': "10.5rem", /* 168px */
      '12xl': "12rem", /* 192px */
      '13xl': "13.5rem", /* 216px */
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      EBgaramond: ['EB Garamond', 'serif']
    },
    extend: {
      
    }
  },
  plugins: []
};