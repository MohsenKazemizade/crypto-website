import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
