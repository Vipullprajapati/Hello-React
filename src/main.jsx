import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const rootEl = document.querySelector("#root");
const root = createRoot(rootEl);

// hosting  create function first and then render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
