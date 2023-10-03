/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
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
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scale: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fade: "fade 0.4s",
        scale: "scale 0.2s",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
