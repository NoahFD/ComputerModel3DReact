/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', "cursive"],
      },
      colors: {
        terminalGreen: "#4AF626",
        terminalGreenDark: "rgba(74,246,38,0.8)",
        darkGrey: "#353845", // Example color code
      },
    },
  },
  plugins: [],
};
