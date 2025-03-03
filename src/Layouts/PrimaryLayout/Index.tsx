import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Header from "./Header";

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
