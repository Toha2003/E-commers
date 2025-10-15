import React from "react";
import Header from "../Components/header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <Header/>
      <main className="w-[1170px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
