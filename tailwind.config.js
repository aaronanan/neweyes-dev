module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#95C9A6",
        secondary: "#569E8D",
        secondaryDark: "#3C6E62",
        darkGreen: "#2E402B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
