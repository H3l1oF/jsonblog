import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import Routs from "./components/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
      <Routs />
  </BrowserRouter>
);