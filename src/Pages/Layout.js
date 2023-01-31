import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Sidebar, Navbar } from "../Components/Components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
