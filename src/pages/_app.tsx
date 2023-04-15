import { type AppType } from "next/app";
import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'

import { Provider as StoreProvider } from "react-redux";

import { api } from "../utils/api";
import store from "../store/store.js"; // ZQ：for wishlist

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";

function MyApp({Component ,pageProps}: AppProps ){
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
            <StoreProvider store={store}>
        
            <Header />
            <Component {...pageProps} />
            <Footer />
        </StoreProvider>
    </SWRConfig>
  );
};

export default MyApp;
