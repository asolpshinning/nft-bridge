import FormCard from "../src/containers/FormCard";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../src/components/NavigationBar";
import React from "react";
import SwapForm from "../src/components/SwapForm";
import type { NextPage } from "next";

const Application: NextPage = () => {
  return (
    <div
      data-test="component-landing"
      className="bg-gradient-to-r from-white via-sky-50 to-blue-50 dark:from-slate-800 dark:via-sky-900 dark:to-blue-900 flex flex-col w-screen min-h-screen"
    >
      <Head>
        <title>{`Eth <> Algo NFT Bridge`}</title>
        <meta name="description" content="Bridge your Ethereum and Algo NFTs" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <div className="my-auto items-center h-full mt-24 md:mt-28">
        <FormCard center>
          <SwapForm />
        </FormCard>
      </div>

      <footer className={" p-2"}>
        <a
          href="https://cooperativ.io?utm_source=eth_algo_nft_bridge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={"flex items-center"}>
            Powered by{" "}
            <Image
              src="/logos/Cooperativ_Main Logo_Full_Yellow.svg"
              alt="Cooperativ Logo"
              width={150}
              height={25}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Application;
