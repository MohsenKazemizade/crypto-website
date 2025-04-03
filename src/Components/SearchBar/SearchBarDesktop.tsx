// src/Components/SearchBar/SearchBarDesktop.tsx
import { Input } from "antd";
import { useState } from "react";
// import { useTheme } from "../../Context/ThemeContext";

const SearchBarDesktop: React.FC = () => {
  const [query, setQuery] = useState("");
  //   const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center", // عمودی وسط
        justifyContent: "center", // افقی وسط (در صورت نیاز)
        height: "100%", // اطمینان از پر کردن ارتفاع والد
      }}
    >
      <Input
        placeholder="Search coins..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        allowClear
        style={{
          borderRadius: 4,
          height: 32, // ارتفاع ثابت برای هم‌ترازی بهتر با آیتم‌ها
        }}
      />
    </div>
  );
};

export default SearchBarDesktop;
