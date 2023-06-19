import Head from 'next/head';
import RootLayout from '../components/layout';
import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>Aberration Co.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  )
}