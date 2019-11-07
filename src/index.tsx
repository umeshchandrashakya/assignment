import React from "react";
import ReactDOM from "react-dom";
import BaseModule from "./components/typeless/module/index";
import { DefaultTypelessProvider } from "typeless";

ReactDOM.render(
  <DefaultTypelessProvider>
    <BaseModule />
  </DefaultTypelessProvider>,
  document.getElementById("root")
);
