import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

export default function Layout() {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
