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
      'kb-green-dark': '#483f35',
      'kb-green-light': '#55A254',
      'kb-orange': '#A27D54',
      'kb-red': '#A25454'
    },
    extend: {},
  },
  plugins: [],
}
