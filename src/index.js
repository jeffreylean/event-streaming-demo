import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./assets/css/style.css";
import "./assets/css/overwrite.css";
import reportWebVitals from "./reportWebVitals";
import Route from "./routes";

ReactDOM.render(Route, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
