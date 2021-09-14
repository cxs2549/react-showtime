module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        borderColor: '#262626',
        brandRed: '#A31C12'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
