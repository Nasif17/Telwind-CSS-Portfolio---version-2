module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        screen: {
           sm: "480px",
        },
        spacing:{
          big:"48rem",
        }
    },
    fontFamily: {
        nunito: ["Nunito", "sans-serif"],
    }
  },
  plugins: [],
}


module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
