import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Store from "./stores/Store";
import PaginationStore from "./stores/PaginationStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store} pagination={PaginationStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
