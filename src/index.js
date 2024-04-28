import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// this root is linked to html file

// so to apply changes => we render it

root.render(<App />);
