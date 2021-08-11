import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App";
import store from "./store";
import API from "./API";
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (
        err.response.status >= 401 &&
        err.response.status < 404 &&
        err.config &&
        !err.config.__isRetryRequest
      ) {
        originalReq._retry = true;
        let res = API.refreshToken()
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res));
            originalReq.headers["Authorization"] = `Bearer ${res.access_token}`;
            originalReq.headers["Device"] = "device";
            return axios(originalReq);
          })
          .catch((err) => {
            console.log("fetch Err", err);
          });

        resolve(res);
      }

      return Promise.reject(err);
    });
  }
);
