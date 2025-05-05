import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router/Index";
import { ThemeProvider } from "./Context/ThemeContext";
import { CoinDataProvider } from "./Context/CoinDataContext";
import "./Styles/global.css";
createRoot(document.getElementById("root")!).render(
  <Fragment>
    <ThemeProvider>
      <CoinDataProvider>
        <Router />
      </CoinDataProvider>
    </ThemeProvider>
  </Fragment>
);
