import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import TimeAgo from "javascript-time-ago";
import fr from "javascript-time-ago/locale/fr.json";

TimeAgo.addDefaultLocale(fr);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
