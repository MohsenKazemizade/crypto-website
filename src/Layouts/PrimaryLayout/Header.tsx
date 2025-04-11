// src/Components/Header/Header.tsx
import React, { Suspense } from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const MobileHeader = React.lazy(
  () => import("./Components/HeaderVariants/MobileHeader")
);
const SmallDesktopHeader = React.lazy(
  () => import("./Components/HeaderVariants/SmallDesktopHeader")
);
const TabletHeader = React.lazy(
  () => import("./Components/HeaderVariants/TabletHeader")
);
const DesktopHeader = React.lazy(
  () => import("./Components/HeaderVariants/DesktopHeader")
);

const Header: React.FC = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const isTablet = screens.md && !screens.lg;
  const isSmallDesktop = screens.lg && !screens.xl;
  const isLargeDesktop = screens.xl || screens.xxl;
  return (
    <Suspense fallback={null}>
      {isMobile && <MobileHeader />}
      {isTablet && <TabletHeader />}
      {isSmallDesktop && <SmallDesktopHeader />}
      {isLargeDesktop && <DesktopHeader />}
    </Suspense>
  );
};

export default Header;
