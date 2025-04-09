// src/Components/SearchBar/SearchBarMobile.tsx
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Input } from "antd";
import { useTheme } from "../../Context/ThemeContext";
interface SearchBarMobileProps {
  rtl?: boolean;
}
const SearchBarMobile: React.FC<SearchBarMobileProps> = ({ rtl = true }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const [query, setQuery] = useState("");

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        direction: rtl ? "unset" : "rtl",
      }}
    >
      {!open && (
        <SearchOutlined
          onClick={() => setOpen(true)}
          style={{
            fontSize: "16px",
            marginRight: rtl ? "8px" : "unset",
            marginLeft: rtl ? "unset" : "8px",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: theme === "dark" ? "#EAECEF" : "#1E2329",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F0B90B")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color =
              theme === "dark" ? "#EAECEF" : "#1E2329")
          }
        />
      )}

      {open && (
        <CloseOutlined
          onClick={() => setOpen(false)}
          style={{
            fontSize: "16px",
            marginRight: rtl ? "8px" : "unset",
            marginLeft: rtl ? "unset" : "8px",
            cursor: "pointer",
            color: theme === "dark" ? "#EAECEF" : "#1E2329",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F0B90B")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color =
              theme === "dark" ? "#EAECEF" : "#1E2329")
          }
        />
      )}
      <div
        style={{
          width: open ? "100%" : 0,
          overflow: "hidden",
          transition: "width 0.3s ease",
          display: "flex",
        }}
      >
        <Input
          placeholder="Search coins..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          allowClear
          style={{
            borderRadius: 4,
            width: "100%",
            direction: rtl ? "unset" : "ltr",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBarMobile;
