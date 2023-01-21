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
        link: "#1271ff",
        white: "#ececec",
        whiteStrong: "#ffff",
        whiteLight: "#d7d7d7",
        whiteExtraLight: "#afafaf",
      },
    },
  },
  plugins: [],
};
