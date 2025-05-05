// src/Layouts/SecondaryLayout/Components/TopListReview.tsx

import React from "react";
import { Card, List, Typography } from "antd";

const { Title, Text } = Typography;

interface TopListReviewProps {
  title: string;
  coins: {
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    changePercent24Hr: string;
  }[];
}

const TopListReview: React.FC<TopListReviewProps> = ({ title, coins }) => {
  return (
    <Card
      style={{
        width: "100%",
        borderRadius: 8,
        background: "transparent",
        border: "1px solid rgba(240, 185, 11, 0.3)",
        margin: "0 0 24px",
      }}
      bodyStyle={{ padding: 16 }}
    >
      <Title level={5} style={{ color: "#F0B90B", marginBottom: 16 }}>
        {title}
      </Title>

      <List
        dataSource={coins.slice(0, 3)}
        renderItem={(coin, index) => (
          <List.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text>{`${index + 1}. ${coin.name} (${coin.symbol})`}</Text>
              <Text style={{ color: "#F0B90B" }}>
                ${Number(coin.priceUsd).toFixed(2)}
              </Text>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default TopListReview;
