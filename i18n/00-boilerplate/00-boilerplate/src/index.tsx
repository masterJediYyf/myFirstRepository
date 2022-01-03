import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import './i18n/i18n';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Suspense fallback={<>Loading.....</>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
