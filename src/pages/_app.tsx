import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as StoreProvider } from 'react-redux';

import { api } from "../utils/api";
import store from "../store/store";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/globals.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
    return (
        <StoreProvider store={store}>
            <SessionProvider session={session}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </SessionProvider>
        </StoreProvider>
    );
};

export default api.withTRPC(MyApp);
