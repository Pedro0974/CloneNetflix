/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {

      backgroundImage: theme=>({
        'netflix-theme': "url('imagens/netflixBackground.jpg')",
      }),
      backgroundSize:{
        '175%': '175%',
        '195%': '195%',
      },
    },
  },
  plugins: [],
}
