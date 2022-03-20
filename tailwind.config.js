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
        'logo': 'Century Gothic, CenturyGothic, Geneva, AppleGothic, sans-serif',
      },
      animation: {
        'fade-in': '1s fadeIn',
        'shake': 'shake 0.25s',
        'logo-shake': 'logoShake 1s',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {visibility: 'visible', opacity: '1'}
        },
        shake: {
          '0%': {transform: 'translate(1px, 1px) rotate(0deg)'},
          '20%': {transform: 'translate(-1px, 0px) rotate(1deg)'},
          '40%': {transform: 'translate(1px, -1px) rotate(1deg)'},
          '60%': {transform: 'translate(-1px, 1px) rotate(0deg)'},
          '80%': {transform: 'translate(-1px, -1px) rotate(1deg)'},
          '100%': {transform: 'translate(1px, -1px) rotate(-1deg)'},
        },
        logoShake: {
          '0%': {transform: 'translate(0px, 0px)'},
          '20%': {transform: 'translate(0px, -5px)'},
          '40%': {transform: 'translate(0px, -5px)'},
          '60%': {transform: 'translate(0px, 5px)'},
          '80%': {transform: 'translate(0px, 5px)'},
          '100%': {transform: 'translate(0px, 0px)'},
        }
      },
      backgroundColor: {
        skills: "#FAF5F0",
      }
    },
  },
  plugins: [],
}
