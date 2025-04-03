// src/layouts/PrimaryLayout/components/HeaderVariants/DesktopHeader.tsx
import React, { Suspense } from "react";

const NavBarDesktop = React.lazy(() => import("../Navbar/NavBarDesktop"));

const DesktopHeader: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <NavBarDesktop />
    </Suspense>
  );
};

export default DesktopHeader;
