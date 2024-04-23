import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import SinginPage from "./pages/SinginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AdminSigninPage from "./pages/AdminSigninPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CartContextProvider from './context/UserContext.jsx'

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SinginPage />} />
            <Route path="/admin/signin" element={<AdminSigninPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </main>
  );
}
