import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
