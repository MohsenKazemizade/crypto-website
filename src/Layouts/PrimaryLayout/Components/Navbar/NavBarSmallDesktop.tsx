// src/Components/Navbar/NavBarDesktop.tsx
import React from "react";
import { Layout, Menu } from "antd";
import { deskTopLeftItems, smallDesktopRightitems } from "./NavbarItems";
const { Header: AntdHeader } = Layout;
const NavBarDesktop: React.FC = () => {
  return (
    <AntdHeader
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Menu
        mode="horizontal"
        items={deskTopLeftItems}
        selectable={false}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
          background: "transparent",
        }}
      />
      <Menu
        mode="horizontal"
        items={smallDesktopRightitems}
        selectable={false}
        overflowedIndicator={null}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1px",
        }}
      />
    </AntdHeader>
  );
};

export default NavBarDesktop;
