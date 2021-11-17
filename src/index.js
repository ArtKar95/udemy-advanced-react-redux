import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import Root from "./Root";
ReactDom.render(
  <Root>
    <Router>
      <App />
    </Router>
  </Root>,
  document.querySelector("#root")
);
