// src/Components/Header/Header.tsx
import React, { Suspense } from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const MobileHeader = React.lazy(
  () => import("./Components/HeaderVariants/MobileHeader")
);
const DesktopHeader = React.lazy(
  () => import("./Components/HeaderVariants/DesktopHeader")
);

const Header: React.FC = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Suspense fallback={null}>
      {isMobile && <MobileHeader />}
      {!isMobile && <DesktopHeader />}
    </Suspense>
  );
};

export default Header;
