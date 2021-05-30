// import App from "next/app";
import type { AppProps /* , AppContext */ } from "next/app";
import { ThemeProvider as SCThemeProvider } from "styled-components";

import { ApolloProvider } from "@apollo/client";
import { UserContextProvider } from "../context/UserContext";
import Header from "../components/Header";
import "../styles/globals.scss";
import { client } from "../utils/graphql";

import styledTheme from "../lib/theme/styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SCThemeProvider theme={styledTheme}>
      <ApolloProvider client={client}>
        <UserContextProvider>
          <Header />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </UserContextProvider>
      </ApolloProvider>
    </SCThemeProvider>
  );
}

export default MyApp;
