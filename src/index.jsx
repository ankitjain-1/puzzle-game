import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import rootReducer from "./reducers/store";

import App from "./App";

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
