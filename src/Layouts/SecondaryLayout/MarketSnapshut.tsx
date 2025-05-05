// src/Layouts/SecondaryLayout/MarketSnapshot.tsx
import React from "react";
import { Row, Col } from "antd";
import { useTheme } from "../../Context/ThemeContext";

const snapshotData = [
  { label: "MARKET CAP", value: "$2.71T" },
  { label: "EXCHANGE VOL", value: "$31.88B" },
  { label: "ASSETS", value: "2,340" },
  { label: "EXCHANGES", value: "81" },
  { label: "MARKETS", value: "9,188" },
  { label: "BTC DOM INDEX", value: "62.4%" },
];

const MarketSnapshot: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Row
      justify="space-around"
      align="middle"
      gutter={[16, 16]}
      style={{
        display: "flex",
        padding: "16px 24px",
        margin: "0",
        backgroundColor: isDark ? "#12161C" : "#fff",
      }}
    >
      {snapshotData.map((item) => (
        <Col
          key={item.label}
          xs={24}
          sm={12}
          md={8}
          lg={4}
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              fontSize: "12px",
              color: isDark ? "#999" : "#666",
              fontWeight: 500,
            }}
          >
            {item.label}
          </div>
          <div
            style={{
              fontSize: "16px",
              color: isDark ? "#fff" : "#000",
              fontWeight: "bold",
            }}
          >
            {item.value}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default MarketSnapshot;
