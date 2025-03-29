import { ThemeConfig } from "antd";

// Binance brand color
const binanceYellow = "#F0B90B";

// Dark Mode Colors
const darkBody = "#0B0E11";
const darkHeader = "#12161C";
const darkContainer = "#1E2329";
const darkText = "#EAECEF";

// Light Mode Colors
const lightBody = "#ffffff";
const lightHeader = "#ffffff";
const lightContainer = "#f5f5f5";
const lightText = "#1E2329";

const baseTheme: ThemeConfig = {
  token: {
    colorPrimary: binanceYellow,
    colorError: "#ff4d4f",
    colorTextBase: lightText,
    colorBgBase: lightBody,
    borderRadius: 4,
    colorBgContainer: lightContainer,
  },
  components: {
    Layout: {
      headerBg: lightHeader,
    },
    Button: {
      colorPrimary: binanceYellow,
      borderRadius: 4,
    },
    Input: {
      colorBgContainer: "#ffffff",
      borderRadius: 4,
      colorBorder: "#d9d9d9",
      colorInfoBorderHover: "#c0c0c0",
      activeBorderColor: binanceYellow,
      boxShadow: "none",
    },
    Switch: {
      colorPrimary: binanceYellow,
    },
    Menu: {
      itemColor: lightText,
      itemHoverColor: binanceYellow,
      itemSelectedColor: binanceYellow,
      itemBg: "transparent",
      itemHoverBg: "transparent",
      itemSelectedBg: "transparent",
    },
    Dropdown: {
      colorBgElevated: "#ffffff",
      colorText: lightText,
      colorBgTextHover: binanceYellow,
    },
  },
};

const lightTheme: ThemeConfig = {
  ...baseTheme,
  token: {
    ...baseTheme.token,
    colorTextBase: lightText,
    colorBgBase: lightBody,
    colorBgContainer: lightContainer,
  },
};

const darkTheme: ThemeConfig = {
  ...baseTheme,
  token: {
    ...baseTheme.token,
    colorTextBase: darkText,
    colorBgBase: darkBody,
    colorBgContainer: darkContainer,
  },
  components: {
    ...baseTheme.components,
    Layout: {
      headerBg: darkHeader,
    },
    Button: {
      colorPrimary: binanceYellow,
      colorText: darkText,
    },
    Input: {
      colorBgContainer: darkContainer,
      colorText: darkText,
      borderRadius: 4,
      colorBorder: "#444",
      activeBorderColor: binanceYellow,
      boxShadow: "none",
    },
    Menu: {
      itemColor: darkText,
      itemHoverColor: binanceYellow,
      itemSelectedColor: binanceYellow,
      itemBg: "transparent",
      itemHoverBg: "transparent",
      itemSelectedBg: "transparent",
    },
    Dropdown: {
      colorBgElevated: darkContainer,
      colorText: darkText,
      colorBgTextHover: binanceYellow,
    },
  },
};

export { lightTheme, darkTheme };
