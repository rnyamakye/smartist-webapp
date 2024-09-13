const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "360px",
      md: "768px",
      lg: "1080px",
    },
    colors: {
      "primary-1": "#454734",
      "primary-2": "#313225",
    },
    extend: {},
  },
  plugins: [],
});
