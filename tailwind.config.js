/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: "'Satisfy', cursive",
        playfair: "'Playfair Display', serif",
      },
      screens:{
        'ss': '350px'
      }
    },
  },
  plugins: [],
};
