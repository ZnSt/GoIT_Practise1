import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/style.css";
import App from "./App";
import { AppState } from "./context";
import state from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppState.Provider value={state}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState.Provider>
  </React.StrictMode>
);
