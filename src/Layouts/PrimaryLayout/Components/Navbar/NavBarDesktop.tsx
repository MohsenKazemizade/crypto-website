// src/Components/Navbar/NavBarDesktop.tsx
import React from "react";
import { Layout, Menu } from "antd";
import { deskTopRightItems, deskTopLeftItems } from "./NavbarItems";
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
        items={deskTopRightItems}
        selectable={false}
        overflowedIndicator={null}
        style={{
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
          overflow: "hidden",
          gap: "1px",
          display: "flex",
          background: "transparent",
          alignItems: "center",
        }}
      />
    </AntdHeader>
  );
};

export default NavBarDesktop;
