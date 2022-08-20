import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* <link href="/dist/output.css" rel="stylesheet" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Ubuntu:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/site-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            html,
            body {
              min-height: 100%;
              width: 100%;
            }

            #__next {
              height: 100%;
              min-height: 100%;
              width: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
