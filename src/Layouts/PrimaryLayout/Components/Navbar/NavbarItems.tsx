// src/Components/Navbar/NavItems.tsx
import { Link } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Menu, Space } from "antd";
import SearchBarMobile from "../../../../Components/SearchBar/SearchBarMobile";
import SearchBarDesktop from "../../../../Components/SearchBar/SearchBarDesktop";
import ThemeSwitcherMenuItem from "../../../../Components/SwitchTheme/ThemeSwitcherMenuItem";
import LoginLink from "../../../../Components/Auth/LoginLink";
import SignupLink from "../../../../Components/Auth/SignupLink";
import DrawerMenu from "./DrawerMenu";
import HeaderLogo from "../HeaderLogo";
export const currenciesItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export const mobileItems: MenuProps["items"] = [
  {
    key: "auth-links",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Menu.Item key="login">
          <LoginLink />
        </Menu.Item>
        <Menu.Item key="signup">
          <SignupLink />
        </Menu.Item>
      </div>
    ),
  },
  {
    key: "search-bar",
    label: <SearchBarMobile />,
  },
  {
    key: "theme",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Theme</span>
        <ThemeSwitcherMenuItem />
      </div>
    ),
  },
  { key: "/", label: <Link to="/">Coins</Link> },
  { key: "/projects", label: <Link to="/projects">Exchanges</Link> },
  {
    key: "/currencies",
    label: (
      <Dropdown menu={{ items: currenciesItems }} placement="bottom" arrow>
        <Space>
          USD
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
  },
];
export const tabletItems: MenuProps["items"] = [
  {
    key: "theme",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Theme</span>
        <ThemeSwitcherMenuItem />
      </div>
    ),
  },
  { key: "/", label: <Link to="/">Coins</Link> },
  { key: "/projects", label: <Link to="/projects">Exchanges</Link> },
  {
    key: "/currencies",
    label: (
      <Dropdown menu={{ items: currenciesItems }} placement="bottom" arrow>
        <Space>
          USD
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
  },
];
export const deskTopLeftItems: MenuProps["items"] = [
  { key: "logo", label: <HeaderLogo /> },
  { key: "/", label: <Link to="/">Coins</Link> },
  { key: "/projects", label: <Link to="/projects">Exchanges</Link> },
  {
    key: "/currencies",
    label: (
      <Dropdown menu={{ items: currenciesItems }} placement="bottom" arrow>
        <Space>
          USD
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
  },
];
export const tabletLeftItems: MenuProps["items"] = [
  { key: "logo", label: <HeaderLogo /> },
];
export const mobileLeftItems: MenuProps["items"] = [
  { key: "logo", label: <HeaderLogo /> },
];
export const deskTopRightItems: MenuProps["items"] = [
  { key: "search-bar", label: <SearchBarDesktop /> },
  { key: "login", label: <LoginLink /> },
  { key: "signup", label: <SignupLink /> },
  { key: "theme", label: <ThemeSwitcherMenuItem /> },
];
export const tabletRightItems: MenuProps["items"] = [
  { key: "search-bar", label: <SearchBarMobile rtl={false} /> },
  { key: "login", label: <LoginLink /> },
  { key: "signup", label: <SignupLink /> },
  { key: "/drawer", label: <DrawerMenu isMobile={false} /> },
];
export const mobileRightItems: MenuProps["items"] = [
  { key: "/drawer", label: <DrawerMenu /> },
];
