// src/Components/Navbar/SignupLink.tsx
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupLink: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to="/signup"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        textAlign: "center",
        padding: "4px 12px",
        borderRadius: "4px",
        backgroundColor: hover ? "#e4aa07" : "#F0B90B",
        color: "#000000",
        fontSize: "14px",
        lineHeight: "22px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 500,
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
    >
      Sign Up
    </Link>
  );
};

export default SignupLink;
