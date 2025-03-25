/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, ReactNode } from "react";
import { ConfigProvider, ThemeConfig } from "antd";
import { lightTheme, darkTheme } from "../Styles/theme";
type ThemeType = "light" | "dark";
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  currentTheme: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      <ConfigProvider theme={currentTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
