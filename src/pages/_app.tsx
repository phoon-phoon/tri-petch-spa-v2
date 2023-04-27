import '@/styles/resets.css'
import '@/styles/globals.css'
import '@/styles/swipper.css'

import type { AppProps } from 'next/app'

import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={roboto.className}>
    <Head>
      <title>Tri-Petch SPA</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </main>
}
