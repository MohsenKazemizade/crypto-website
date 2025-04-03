// src/Components/Navbar/NavItems.tsx
import { Link } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import SearchBarMobile from "../../../../Components/SearchBar/SearchBarMobile";
import SearchBarDesktop from "../../../../Components/SearchBar/SearchBarDesktop";
import ThemeSwitcherMenuItem from "../../../../Components/SwitchTheme/ThemeSwitcherMenuItem";

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
    key: "search-bar",
    label: <SearchBarMobile />,
  },
  { key: "theme", label: <ThemeSwitcherMenuItem /> },
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
export const deskTopItems: MenuProps["items"] = [
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
  {
    key: "search-bar",
    label: <SearchBarDesktop />,
  },
  { key: "theme", label: <ThemeSwitcherMenuItem /> },
];
