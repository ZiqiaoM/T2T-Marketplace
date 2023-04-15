import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as StoreProvider } from "react-redux";

import { api } from "../utils/api";
import store from "../store/store.js"; // ZQ：for wishlist

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
            <StoreProvider store={store}>
        
            <Header />
            <Component {...pageProps} />
            <Footer />
        </StoreProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
