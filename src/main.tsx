import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router/Index";

createRoot(document.getElementById("root")!).render(
  <Fragment>
    <Router />
  </Fragment>
);
