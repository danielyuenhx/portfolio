module.exports = {
  content: [
    "./src/App.js",
    "./src/index.js",
    "./src/App.test.js",
    "./src/components/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': 'Montserrat, Helvetica, Arial, sans-serif',
        'header': 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, Arial, sans-serif',
        'logo': 'Century Gothic, CenturyGothic, Geneva, AppleGothic, sans-serif;',
      },
      animation: {
        'fade-in': '1s fadeIn',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {visibility: 'visible', opacity: '1'}
        }
      },
      backgroundColor: {
        cyan: "#9cdbff",
      }
    },
  },
  plugins: [],
}
