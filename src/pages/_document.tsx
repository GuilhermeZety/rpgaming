/* eslint-disable @next/next/no-css-tags */
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Sahitya:wght@400;700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" type='text/css' href="/nmprogress.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}