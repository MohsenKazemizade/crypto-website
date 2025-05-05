import React from "react";
import { Outlet } from "react-router";
import { Grid } from "antd";
import MarketSnapshut from "./MarketSnapshut";
import Ticker from "./Ticker";
const { useBreakpoint } = Grid;
const TopList = React.lazy(() => import("./TopList"));
const AuthLayout: React.FC = () => {
  const screens = useBreakpoint();
  const isMobile = screens.md;
  return (
    <div className="secondary-layout" style={{ padding: "0 24px" }}>
      <MarketSnapshut />
      {isMobile && <TopList />}
      <Ticker />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
