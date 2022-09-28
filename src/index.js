import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import App from "./App";
// Css
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* <Route path="/favorites" element={<Favorites />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
