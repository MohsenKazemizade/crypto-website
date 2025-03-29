// src/Components/Header/Header.tsx
import React, { Suspense } from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const SearchBarMobile = React.lazy(
  () => import("../../Components/SearchBar/SearchBarMobile")
);
const SearchBarDesktop = React.lazy(
  () => import("../../Components/SearchBar/SearchBarDesktop")
);

const Header: React.FC = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Suspense fallback={null}>
      {isMobile && <SearchBarMobile />}
      {!isMobile && <SearchBarDesktop />}
    </Suspense>
  );
};

export default Header;
