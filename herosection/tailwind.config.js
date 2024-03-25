/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/image/bgimg.jfif')",
      }
    },
  },
  plugins: [],
}

