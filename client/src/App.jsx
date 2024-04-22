import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import SinginPage from "./pages/SinginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AdminSigninPage from "./pages/AdminSigninPage.jsx";
import CartPage from "./pages/CartPage.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SinginPage />} />
          <Route path="/admin/signin" element={<AdminSigninPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
