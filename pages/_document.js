// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html,Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
    }

    render() {
        return (
        <Html>
            <Head>
            <title>PancaEkawiraSanjaya</title>
            <link rel="icon" href="/iconbrand.svg" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
            <meta property="og:image" content="/Assets/hero.png" />
            <meta name="description" content="PT Panca Ekawira Sanjaya"/>
            </Head>
            <body className="custom_class">
            <Main />
            <NextScript />
            </body>
        </Html>
        )
    }
}