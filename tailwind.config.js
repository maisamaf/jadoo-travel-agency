/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "volkhof": ['volkhof', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/images/decore.png')",
        'pink-circle': "url('/images/pink-circle.png')"
      },
      colors: {
        primary: "#DF6951",
        secondary: "#F1A501",
        'light-orange': "#FFF1DA"
      },
      dropShadow: {
        'primary-button': "0 15px 60px rgb(223, 105, 81, 30)",
        'secondary-button': "0 20px 70px rgb(241, 165, 1, 15)",
        'card': "0 21.85px 26.3px rgb(0,0,0, 10)",
      }
    },
  },
  plugins: [],
};
