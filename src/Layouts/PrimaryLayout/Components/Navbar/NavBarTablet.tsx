// src/Components/Navbar/NavBarTablet.tsx
import React from "react";
import { Layout, Menu } from "antd";
import { tabletLeftItems, tabletRightItems } from "./NavbarItems";

const { Header: AntdHeader } = Layout;

const NavBarTablet: React.FC = () => {
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
        items={tabletLeftItems}
        selectable={false}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
          background: "transparent",
          gap: "8px",
        }}
      />

      <Menu
        mode="horizontal"
        items={tabletRightItems}
        selectable={false}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      />
    </AntdHeader>
  );
};

export default NavBarTablet;
