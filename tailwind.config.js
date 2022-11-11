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
    },
  },
  plugins: [],
};
