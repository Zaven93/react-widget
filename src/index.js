import React from "react";
import ReactDOM from "react-dom";

import Provider from "./context/navContext";
import App from "./App";
import "./index.css";

const WidgetDivs = document.querySelectorAll(".reddit_widget");

WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    Div
  );
});
