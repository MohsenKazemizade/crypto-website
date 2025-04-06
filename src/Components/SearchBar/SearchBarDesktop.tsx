// src/Components/SearchBar/SearchBarDesktop.tsx
import { Input } from "antd";
import { useState } from "react";

const SearchBarDesktop: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Input
        placeholder="Search coins..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        allowClear
        style={{
          borderRadius: 4,
          height: 32,
        }}
      />
    </div>
  );
};

export default SearchBarDesktop;
