module.exports = {
  content: [
    "./src/App.js",
    "./src/index.js",
    "./src/App.test.js",
    "./src/components/*.{html,js}",
  ],
  theme: {
    extend: {
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
