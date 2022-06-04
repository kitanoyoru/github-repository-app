import React from "react";
import { createRoot } from "react-dom/client";

import { store } from "./reduxStore/store";
import { Provider } from "react-redux";

import App from "./containers/App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
