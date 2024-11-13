module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./index.html"], // Update with the path to your files
  darkMode: "selector",
  theme: {
    extend: {},
    supports: {
      grid: "display: grid", //custom supports-*
    },
  },
  plugins: [],
};
