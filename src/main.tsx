import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/reset.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
