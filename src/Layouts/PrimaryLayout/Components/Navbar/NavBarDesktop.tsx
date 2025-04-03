// src/Components/Navbar/NavBarDesktop.tsx
import React from "react";
import { Menu } from "antd";
import { deskTopItems } from "./NavbarItems";

const NavBarDesktop: React.FC = () => {
  return (
    <Menu
      mode="horizontal"
      items={deskTopItems}
      selectable={false}
      style={{ display: "flex", overflow: "visible" }}
    />
  );
};

export default NavBarDesktop;
