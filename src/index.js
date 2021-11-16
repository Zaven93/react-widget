import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const WidgetDivs = document.querySelectorAll(".reddit_widget");

WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    Div
  );
});
