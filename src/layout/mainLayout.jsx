import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../pages/home/index.jsx";
import Header from "../component/header/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "../pages/about/index.jsx";
import Programs from "../pages/programs/index.jsx";
import Goals from "../pages/goals/index.jsx";
import Contacts from "../pages/contacts/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path={"programs"} element={<Programs />} />
          <Route path={"goals"} element={<Goals />} />
          <Route path={"contacts"} element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
