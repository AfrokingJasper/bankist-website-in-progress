/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
      colors: {
        primary: "#5ec576",
        secondary: "#ffcb03",
        tertiary: "#ff585f",
        primaryDarker: "#4bbb7d",
        secondaryDarker: "#ffbb00",
        tertiaryDarker: "#fd424b",
        primaryOpacity: "#5ec5763a",
        secondaryOpacity: "#ffcd0331",
        tertiaryOpacity: "#ff58602d",
        gradientPrimary: "linear-gradient(to top left, #39b385, #9be15d)",
        gradientSecondary: "linear-gradient(to top left, #ffb003, #ffcb03)",
      },
    },
  },
  plugins: [],
};
