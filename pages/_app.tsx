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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">Phillip Miles React Portfolio</title>
        <meta
          key="description"
          name="description"
          content="React component library specialist porfolio by Phillip Miles. Versatile, performant, documented react components."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PageWithFooter>
        <main className={s.main}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </PageWithFooter>
    </>
  );
}

export default MyApp;
