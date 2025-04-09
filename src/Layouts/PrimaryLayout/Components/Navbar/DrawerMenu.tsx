// src/Components/Navbar/DrawerMenu.tsx
import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { mobileItems, tabletItems } from "./NavbarItems";
interface DrawerProps {
  isMobile?: boolean;
}
const DrawerMenu: React.FC<DrawerProps> = ({ isMobile = true }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}> */}
      <Button
        icon={<MenuOutlined />}
        type="text"
        onClick={() => setDrawerOpen(true)}
      />
      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu
          mode="vertical"
          items={isMobile ? mobileItems : tabletItems}
          selectable={false}
        />
      </Drawer>
      {/* </div> */}
    </>
  );
};

export default DrawerMenu;
