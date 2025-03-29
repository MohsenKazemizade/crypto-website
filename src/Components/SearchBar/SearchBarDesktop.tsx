// src/Components/SearchBar/SearchBarDesktop.tsx
import { Input } from "antd";
import { useState } from "react";
// import { useTheme } from "../../Context/ThemeContext";

const SearchBarDesktop: React.FC = () => {
  const [query, setQuery] = useState("");
  //   const { theme } = useTheme();

  return (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <Input
        placeholder="Search coins..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        allowClear
        style={{ borderRadius: 4, height: "32px" }}
      />
    </div>
  );
};

export default SearchBarDesktop;
