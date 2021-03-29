import { AppProps } from "next/app";
import React from "react";
import { useFathom } from "../hooks/useFathom";
import { ThemeProvider } from "../styles/theme";
import { TwinGlobalStyles } from "../styles/TwinGlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // useFathom("DYTMHZIC", "jakerunzer.com");

  return (
    <ThemeProvider>
      <TwinGlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
