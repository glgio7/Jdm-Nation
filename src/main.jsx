import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "./styles/GlobalCSS";
import CarsPage from "./pages/Cars";
import Home from "./pages/Home/index";
import Navigation from "./components/Navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalCSS />
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
    </Routes>
  </BrowserRouter>
);
