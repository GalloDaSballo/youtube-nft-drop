// import App from "next/app";
import type { AppProps /* , AppContext */ } from "next/app";
import Header from "../components/Header";
import "../styles/globals.scss";
import { UserContextProvider } from "../context/UserContext";
// eslint-disable-next-line import/order
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

// eslint-disable-next-line import/order
import { ThemeProvider as SCThemeProvider } from "styled-components";
import styledTheme from "../lib/theme/styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SCThemeProvider theme={styledTheme}>
      <UserContextProvider>
        <Header />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </UserContextProvider>
    </SCThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
