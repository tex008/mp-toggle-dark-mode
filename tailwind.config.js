/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        moon: "moonGrow 0.2s linear 0.5s",
      },
      keyframes: {
        moonGrow: {
          "0%": { backgroundSize: "30px 30px" },
          "50%": { backgroundSize: "26px 26px" },
          "100%": { backgroundSize: "30px 30px" },
        },
      },
    },
  },
  plugins: [],
};
