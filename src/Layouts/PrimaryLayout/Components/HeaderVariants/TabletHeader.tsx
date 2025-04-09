// src/layouts/PrimaryLayout/components/HeaderVariants/TabletHeader.tsx
import React, { Suspense } from "react";

const NavBarTablet = React.lazy(() => import("../Navbar/NavBarTablet"));

const TabletHeader: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <NavBarTablet />
    </Suspense>
  );
};

export default TabletHeader;
