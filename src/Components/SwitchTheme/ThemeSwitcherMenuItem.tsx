// src/Components/Navbar/ThemeSwitcherMenuItem.tsx
import { Switch } from "antd";
import { useTheme } from "../../Context/ThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const ThemeSwitcherMenuItem: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
  );
};

export default ThemeSwitcherMenuItem;
