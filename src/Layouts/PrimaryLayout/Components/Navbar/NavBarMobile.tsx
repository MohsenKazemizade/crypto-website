// src/Components/Navbar/NavBarMobile.tsx
import React from "react";
// import { Drawer, Button, Menu, Layout } from "antd";
// import { MenuOutlined } from "@ant-design/icons";
import { mobileLeftItems, mobileRightItems } from "./NavbarItems";
import { Layout, Menu } from "antd";
const { Header: AntdHeader } = Layout;

const NavBarMobile: React.FC = () => {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AntdHeader
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu
        mode="horizontal"
        items={mobileLeftItems}
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
        items={mobileRightItems}
        selectable={false}
        style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}
      />
    </AntdHeader>
  );
};

export default NavBarMobile;
