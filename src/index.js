import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
