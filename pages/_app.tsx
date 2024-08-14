import '../styles/reset.css';
import '../styles/colors.css';
import '../styles/fonts.css';
import '../styles/layout.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import PageWithFooter from '../components/generic/PageWithFooter';
import Footer from '../components/Footer';
import s from './_app.module.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">Phillip Miles - Frontend Web Developer</title>
        <meta
          key="description"
          name="description"
          content="Front-end web developer portfolio by Phillip Miles. Versatile, performant, documented react components."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:url" content="https://www.phillipmiles.com" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:title"
          content="Phillip Miles - Frontend Web Developer"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Front-end web developer portfolio by Phillip Miles. Versatile, performant, documented react components."
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://www.phillipmiles.com/images/projects/thought-stream/thought-stream_thumbnail_01.jpg"
          key="og:image"
        />
      </Head>
      <PageWithFooter>
        <main className={s.main}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </PageWithFooter>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
