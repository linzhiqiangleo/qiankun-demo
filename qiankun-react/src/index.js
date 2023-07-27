/*
 * @FilePath: index.js
 * @Author: leo
 * @Descripttion:
 */
import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function render(props) {
  console.log("render", props);
  const { container } = props;
  const root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  root.render(<App />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

export async function mount(props) {
  console.log("mount", props);
  render(props);
}

export async function unmount(props) {
  console.log("unmount", props);
  const { container } = props;
  const root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  root.unmount();
}
