module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
      extend: {
        colors: {
          primary: "#1e90ff",
          "primary-dark": "#1565c0"
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-in',
          'bounce-in': 'bounceIn 1s'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 }
          },
          bounceIn: {
            '0%': { transform: 'scale(0.8)', opacity: 0 },
            '60%': { transform: 'scale(1.05)', opacity: 1 },
            '100%': { transform: 'scale(1)', opacity: 1 }
          }
        }
      }
    },
    plugins: [],
  }