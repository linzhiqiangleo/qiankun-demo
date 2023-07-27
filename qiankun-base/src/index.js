/*
 * @FilePath: index.js
 * @Author: leo
 * @Descripttion:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "qiankun-react", // app name registered
    entry: "//localhost:3011",
    container: "#qiankun-react-container",
    activeRule: "/qiankun-react",
  },
  {
    name: "qiankun-vue2",
    entry: "//localhost:3012",
    container: "#qiankun-vue2-container",
    activeRule: "/qiankun-vue2",
  },
  {
    name: "qiankun-vue3",
    entry: "//localhost:3013",
    container: "#qiankun-vue3-container",
    activeRule: "/qiankun-vue3",
  },
]);

start();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
