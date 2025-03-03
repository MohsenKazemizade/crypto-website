import React from "react";
import { Outlet } from "react-router";
import MarketSnapshut from "./MarketSnapshut";
import TopList from "./TopList";
import Ticker from "./Ticker";

const AuthLayout: React.FC = () => {
  return (
    <div>
      <MarketSnapshut />
      <TopList />
      <Ticker />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
