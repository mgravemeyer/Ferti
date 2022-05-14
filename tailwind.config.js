module.exports = {
  content: [
      './pages/*.tsx',
      './components/*.tsx'
  ],
  theme: {
    screens: {
      's': '370px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'kb-white': '#fff',
      'kb-green': '#005962',
      'kb-green-dark': '#000F00'
    },
    extend: {},
  },
  plugins: [],
}
