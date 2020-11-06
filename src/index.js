import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/normalize.css";
import "./assets/styles/general.sass";

import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
