import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='body'>
        <div className='page-wrapper'>
          <div className='w-embed'>
          <Main />
          <NextScript />
        </div>
        </div>
      </body>
    </Html>
  )
}
