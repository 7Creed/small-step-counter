import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Counter from "./Counter";
import CounterII from "./CounterII";
import TextExpander from "./TextExpander";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <CounterII />
    <TextExpander />
  </React.StrictMode>
);
