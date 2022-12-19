import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "antd";
import { HeaderComponent } from "../Components/Header/HeaderComponent";
import { FooterComponent } from "../Components/Footer/FooterComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </Layout>
  );
}
