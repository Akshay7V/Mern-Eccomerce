import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminSignIn from "../components/AdminSignin";

export default function AdminSigninPage() {
  return (
    <div>
      <Header />
      <div className="h-screen w-screen">
        <AdminSignIn />
      </div>
      <Footer />
    </div>
  );
}
