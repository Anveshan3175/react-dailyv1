import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import SampleRoutes from "./reactComponents/sample-routes";

import "./vanillacss/CommonStyles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="appLayout">
      <div className="linksFlex">
        <App />
      </div>
      <div className="componentsFlex">
        <br />
        <SampleRoutes />
      </div>
    </div>
  </BrowserRouter>
);
