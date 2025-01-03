import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

console.log = function () {};

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
  <SpeedInsights />
  <Analytics /> 
  <App />
  </>
);
