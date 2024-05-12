/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // #f8c12c
        'brand-blue' : '#180C88',
        'brand-pink' : '#EB1B74',
        'brand-pink-light' : '#e8d4',
        'light-gray' : '#F8F8F8',
        'green-light' :' #90EE90',
      },
      fontFamily: { 
        "circular": ['Circular', 'sans-serif'],
        "roboto": ['Roboto', 'sans-serif'],
      } 
    },
  },
  plugins: [],
}

