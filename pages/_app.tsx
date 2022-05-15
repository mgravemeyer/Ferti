import '../styles/tailwind.css';
import Head from 'next/head'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {

  const favIconPath = '/favicon';

  return (
      <>
        <Head>
            <title>Gülle-Nährstoffe</title>
            <link rel="apple-touch-icon" sizes="76x76" href={`${favIconPath}/apple-touch-icon.png`}/>
            <link rel="icon" type="image/png" sizes="32x32" href={`${favIconPath}/favicon-32x32.png`}/>
            <link rel="icon" type="image/png" sizes="16x16" href={`${favIconPath}/favicon-16x16.png`}/>
            <link rel="manifest" href={`${favIconPath}/site.webmanifest`}/>
            <link rel="mask-icon" href={`${favIconPath}/safari-pinned-tab.svg`} color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#FCF7EB"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default App
