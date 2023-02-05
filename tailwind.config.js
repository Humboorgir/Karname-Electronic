/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#007bff",
        link: "#1271ff",
        white: "#ffffff",
        whiteStrong: "#ffff",
        whiteLight: "#d7d7d7",
        whiteExtraLight: "#afafaf",
      },
    },
  },
  plugins: [],
};
