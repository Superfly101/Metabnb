/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Red Rose", "cursive"],
    },

    extend: {
      colors: {
        black: "#434343",
        purple: "#a02279",
      },
      boxShadow: {
        bottom: "0 4px 10px 0 rgb(0 49 39 / 18%)",
      },
    },
  },
  plugins: [],
};
