import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>

                <meta name="description" content="Slik is more than just logistics. We are building a truly connected ecosystem where goods and services can travel safely from any point in one country to another." />
                <meta name="author" content="Timileyin Pelumi" />
                <meta name="theme-color" content="#EE3A46" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#EE3A46" media="(prefers-color-scheme: dark)" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Mulish:wght@400;700;900&family=Roboto:wght@400;700;900&family=Work+Sans:wght@400;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/arial?styles=48885,48886,48890,51915" rel="stylesheet" />




            </Head>
            <body>
                <Main />
                <NextScript />

            </body>
        </Html>
    )
}