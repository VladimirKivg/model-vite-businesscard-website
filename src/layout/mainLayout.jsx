import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../pages/home/index.jsx";
import Header from "../component/header/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
);
