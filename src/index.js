import React from "react";
import ReactDOM from "react-dom";

import Provider from "./context/navContext";
import BuildingProvider from "./context/BuildingContext";
import App from "./App";
import "./styles/index.scss";

const WidgetDivs = document.querySelectorAll(".building-widget");

WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <Provider>
      <BuildingProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BuildingProvider>
    </Provider>,
    Div
  );
});
