import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "virtual:svg-icons-register";
import "@styles/global.scss";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
