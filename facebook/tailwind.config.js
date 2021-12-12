module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          650: '#1877f2'
        },
        red: {
          550: '#fa3e3e'
        },
        'green-vivid': '#42b72a',
      },
      transform: ['hover', 'focus'],
    },
    
  },  
  variants: {
    extend: {},
  },
  plugins: [],
}
