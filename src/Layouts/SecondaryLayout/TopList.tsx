// src/Layouts/SecondaryLayout/TopLists.tsx
import React from "react";
import { useCoinData } from "../../Context/CoinDataContext";
import TopListReview from "./Components/TopListReview";
import { Row, Col, Spin } from "antd";

const TopLists: React.FC = () => {
  const { coins, loading, error } = useCoinData();

  if (loading) return <Spin />;
  if (error || !coins) return <div>{error ?? "No data available"}</div>;

  const hotCoins = coins.slice(0, 3);
  const newListings = coins.slice(3, 6);
  const topGainers = [...coins]
    .sort(
      (a, b) =>
        parseFloat(b.changePercent24Hr) - parseFloat(a.changePercent24Hr)
    )
    .slice(0, 3);
  const topVolume = [...coins]
    .sort((a, b) => parseFloat(b.volumeUsd24Hr) - parseFloat(a.volumeUsd24Hr))
    .slice(0, 3);

  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[24, 24]}>
        <Col md={12} xl={6}>
          <TopListReview title="🔥 Hot Coins" coins={hotCoins} />
        </Col>
        <Col md={12} xl={6}>
          <TopListReview title="🆕 New Listings" coins={newListings} />
        </Col>
        <Col md={12} xl={6}>
          <TopListReview title="📈 Top Gainers" coins={topGainers} />
        </Col>
        <Col md={12} xl={6}>
          <TopListReview title="📊 Top Volume" coins={topVolume} />
        </Col>
      </Row>
    </div>
  );
};

export default TopLists;
