import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700;900&family=Work+Sans:wght@400;700;900&display=swap" rel="stylesheet" />

            </Head>
            <body>
                <Main />
                <NextScript />
                <Script
                    src="https://kit.fontawesome.com/045bb8c628.js"
                    strategy="beforeInteractive"
                    crossOrigin='anonymous'
                ></Script>
            </body>
        </Html>
    )
}