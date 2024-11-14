const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "100px",
      sm: "200px",
      md: "548px",
      lg: "1080px",
    },
    colors: {
      "primary-1": "#75716c",
      "primary-2": "#676840",
    },
    extend: {},
  },
  plugins: [],
});
