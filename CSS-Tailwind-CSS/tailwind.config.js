module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./index.html"], // Update with the path to your files
  darkMode: "selector",
  theme: {
    supports: {
      grid: "display: grid", //custom supports-*
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "3xl": "1600px", // // Adds a new `3xl:` screen variant
    },
    fontFamily: {
      fantasy: ["fantasy", "serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [],
};
