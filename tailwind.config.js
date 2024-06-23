/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: "'Satisfy', cursive",
        playfair: "'Playfair Display', serif",
      },
      screens: {
        ss: "350px",
      },
      colors: {
        "olive": "#808000",
        "olive-100":"#9DAA9B"
      },
    },
  },
  plugins: [],
};
