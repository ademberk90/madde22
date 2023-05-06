/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'cs-pink' : '#FF0D87'
      },
      fontFamily: {
        galanoReg: ["Galano Grotesque Regular"],
        galanoMed: ["Galano Grotesque Medium"],
        galanoBold: ["Galano Grotesque Bold"],
        galanoExtraBold: ["Galano Grotesque Extra Bold"],
      },
    },
  },
  plugins: [],
}

