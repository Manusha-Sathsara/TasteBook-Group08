import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Cards />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
