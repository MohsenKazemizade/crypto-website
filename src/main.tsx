import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router/Index";
import { ThemeProvider } from "./Context/ThemeContext";
import "./Styles/global.css";
createRoot(document.getElementById("root")!).render(
  <Fragment>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </Fragment>
);
