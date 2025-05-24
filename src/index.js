// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // sin basename
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
