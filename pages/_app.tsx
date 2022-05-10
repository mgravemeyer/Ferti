import '../styles/tailwind.css';
import Head from 'next/head'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <title>Kacke Ballern</title>
        <Component {...pageProps} />
      </>
  )
}

export default App
