import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutComponent } from "../Components/Layout/LayoutComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
