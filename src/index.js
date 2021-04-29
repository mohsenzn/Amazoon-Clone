import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateContextProvider } from "./context/StateProvider";
import reducer,{ initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
