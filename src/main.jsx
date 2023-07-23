import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayProvider } from "./contexts/Play";
import { ExpressionProvider } from './contexts/Expression'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayProvider>
      <ExpressionProvider>
        <App />
      </ExpressionProvider>
    </PlayProvider>
  </React.StrictMode>
);
