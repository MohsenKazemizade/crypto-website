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
    <>
      <MarketSnapshut />
      {isMobile && <TopList />}
      <Ticker />
      <Outlet />
    </>
  );
};

export default AuthLayout;
