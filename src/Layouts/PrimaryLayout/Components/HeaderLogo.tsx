// src/Components/HeaderLogo.tsx
import { Link } from "react-router-dom";
import { useTheme } from "../../../Context/ThemeContext";
import LogoDark from "../../../Assets/Logos/logo-dark.png";
import LogoLight from "../../../Assets/Logos/logo-light.png";

const HeaderLogo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src={theme === "dark" ? LogoDark : LogoLight}
        alt="Coinova Logo"
        style={{
          height: "64px",
          width: "auto",
          objectFit: "contain",
        }}
      />
    </Link>
  );
};

export default HeaderLogo;
