// src/Components/Navbar/NavBarDesktop.tsx
import React from "react";
import { Menu } from "antd";
import { deskTopRightItems, deskTopLeftItems } from "./NavbarItems";

const NavBarDesktop: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
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
          background: "transparent", // بدون بکگراند اضافی
        }}
      />
      <Menu
        mode="horizontal"
        items={deskTopRightItems}
        selectable={false}
        overflowedIndicator={null} // جلوگیری از ایجاد ...
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
    </div>
  );
};

export default NavBarDesktop;
