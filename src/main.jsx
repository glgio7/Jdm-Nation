import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "./styles/GlobalCSS";
import Cars from "./pages/Cars";
import Home from "./pages/Home/index";
import Header from "./components/Header";
import Watch from "./pages/Watch";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalCSS />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  </BrowserRouter>
);
