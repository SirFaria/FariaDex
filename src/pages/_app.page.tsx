import type { AppProps } from "next/app";
import { useState } from "react";

import Navbar from "../Components/Navbar";
import CardSection from "../Components/CardSection";
import "react-virtualized/styles.css";

import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import GlobalStyle from "../styles/global";
import { SearchContextProvider } from "../contexts/searchContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <SearchContextProvider>
        <div className="App">
          <GlobalStyle />

          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Component {...pageProps} />
        </div>
      </SearchContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
