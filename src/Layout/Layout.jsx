import React, { useEffect } from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
