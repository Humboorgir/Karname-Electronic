/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        autofill: "0 0 0px 1000px inherit inset",
      },
      colors: {
        link: "#1271ff",
        bgColor: "#1e2025",
        bgColorStrong: "#17191d",
        bgColorWeak: "#262626",
        textColor: "#ececec",
        textColorStrong: "#ffff",
        textColorSemiWeak: "#d7d7d7",
        textColorWeak: "#afafaf",
        yellow: "#f5c400",
        yellowStrong: "#f59700",
        gradientYellow: "#f5c401",
        gradientOrange: "#ea4a00",
        gradientRed: "#ff7300",
      },
    },
  },
  plugins: [],
};
