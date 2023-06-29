import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta name="robots" content="all" />
          <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
          <meta name="google" content="notranslate" key="notranslate" />       
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" strategy="beforeInteractive" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;