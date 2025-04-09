// src/Components/Navbar/LoginLink.tsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";

const LoginLink: React.FC = () => {
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();

  return (
    <Link
      to="/login"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        textAlign: "center",
        padding: "4px 12px",
        borderRadius: "4px",
        backgroundColor: hover
          ? theme === "dark"
            ? "#3A3F45"
            : "#e6e6e6"
          : theme === "dark"
          ? "#2B3139"
          : "#f5f5f5",
        color: theme === "dark" ? "#EAECEF" : "#1E2329",
        fontSize: "14px",
        lineHeight: "22px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 500,
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
    >
      Login
    </Link>
  );
};

export default LoginLink;
