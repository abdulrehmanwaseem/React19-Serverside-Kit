import "./index.css";
import ReactDom from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";

ReactDom.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <App />
  </StrictMode>
);
