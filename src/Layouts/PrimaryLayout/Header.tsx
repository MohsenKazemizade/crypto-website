import React from "react";
import { Switch } from "antd";
import { useTheme } from "../../Context/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Switch checked={theme === "dark"} onChange={toggleTheme} />
    </div>
  );
};

export default Header;
