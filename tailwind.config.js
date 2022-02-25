module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          green: "#1db954",
          purple: "rgb(91,87,115)",
          black: {
            body: "rgba(0,0,0,1)",
            sidebar: "#040404",
            footer: "#282828",
          },
        },
      },
    },
  },
  plugins: [],
};
