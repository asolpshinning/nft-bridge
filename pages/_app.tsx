import "../styles/main.css";
import "../styles/tailwind.css";
import React from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="outer-container" className="bg-gray-500 flex flex-col">
      <main id="page-wrap flex-grow h-full">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
