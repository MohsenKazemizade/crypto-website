import { ThemeConfig } from "antd";

const baseTheme: ThemeConfig = {
  token: {
    colorPrimary: "#44d62c", // رنگ سبز مشابه Razer
    colorError: "#ff4d4f", // رنگ قرمز ملایم
    colorTextBase: "#000000",
    colorBgBase: "#ffffff",
    borderRadius: 8,
    colorBgContainer: "#f5f5f5",
  },
  components: {
    Button: {
      colorPrimary: "#44d62c",
      borderRadius: 8,
    },
    Input: {
      colorBgContainer: "#ffffff",
      borderRadius: 8,
    },
    Switch: {
      colorPrimary: "#44d62c",
    },
  },
};

const lightTheme: ThemeConfig = {
  ...baseTheme,
  token: {
    ...baseTheme.token,
    colorTextBase: "#000000",
    colorBgBase: "#ffffff",
    colorBgContainer: "#f5f5f5",
  },
};

const darkTheme: ThemeConfig = {
  ...baseTheme,
  token: {
    ...baseTheme.token,
    colorTextBase: "#ffffff",
    colorBgBase: "#1f1f1f",
    colorBgContainer: "#333333",
  },
};

export { lightTheme, darkTheme };
