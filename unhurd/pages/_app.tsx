import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Link rel='icon' href='/favicon.ico'/>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
