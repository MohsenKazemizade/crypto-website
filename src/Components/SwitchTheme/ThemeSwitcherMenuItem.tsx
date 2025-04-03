// src/Components/Navbar/ThemeSwitcherMenuItem.tsx
import { Switch } from "antd";
import { useTheme } from "../../Context/ThemeContext";

const ThemeSwitcherMenuItem: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checkedChildren="dark"
      unCheckedChildren="light"
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
  );
};

export default ThemeSwitcherMenuItem;
