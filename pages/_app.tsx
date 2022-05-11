import '../styles/tailwind.css';
import Head from 'next/head'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <title>Gülle-Nährstoffe</title>
        <Component {...pageProps} />
      </>
  )
}

export default App
