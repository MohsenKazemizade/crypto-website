// src/layouts/PrimaryLayout/components/HeaderVariants/MobileHeader.tsx
import React, { Suspense } from "react";

const NavBarMobile = React.lazy(() => import("../Navbar/NavBarMobile"));

const MobileHeader: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <NavBarMobile />
    </Suspense>
  );
};

export default MobileHeader;
