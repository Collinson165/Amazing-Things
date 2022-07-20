/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
'./src/**/*.{html, js}',
'./public/**/*.{html, js}',
],
  theme: {
    extend: {
      colors: {
        nav: '#0f1231',
        primary: '#ca5716',
        secondary: '#dbdefd'
      },
      fontFamily: {
        montsserrat: ['Montserrat'],
        lato: ['Lato'],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}
