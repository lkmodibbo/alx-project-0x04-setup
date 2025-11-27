import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";
import Layout from "@/components/layouts/layout"; // lowercase `layout`


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  )
}