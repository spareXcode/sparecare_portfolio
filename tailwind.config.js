/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: "#25313d",
        customgreen: '#5ca2a6',
        customgray: '#99959B'
      }
    },
  },
  plugins: [require('tailwindcss-primeui')]
};

