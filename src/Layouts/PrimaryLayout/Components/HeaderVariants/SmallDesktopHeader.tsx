// src/layouts/PrimaryLayout/components/HeaderVariants/DesktopHeader.tsx
import React, { Suspense } from "react";

const NavBarSmallDesktop = React.lazy(
  () => import("../Navbar/NavBarSmallDesktop")
);

const SmallDesktopHeader: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <NavBarSmallDesktop />
    </Suspense>
  );
};

export default SmallDesktopHeader;
