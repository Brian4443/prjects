const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities })  
{
  addUtilities({
    ".my-rotate-y-180":{
    tranform: "rotateY(180deg)", 

    },
  });
});



/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [Myclass],
}

