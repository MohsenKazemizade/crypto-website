import React from "react";
import { useTheme } from "../../Context/ThemeContext";

const tickerData = [
  { name: "BTC", price: 67000, change: 1.2 },
  { name: "ETH", price: 3200, change: -0.5 },
  { name: "BNB", price: 420, change: 0.8 },
  { name: "SOL", price: 150, change: 3.1 },
  { name: "ADA", price: 1.25, change: -1.2 },
  { name: "XRP", price: 0.85, change: 0.5 },
  { name: "DOT", price: 27.6, change: 1.8 },
  { name: "DOGE", price: 0.32, change: -0.7 },
  { name: "SHIB", price: 0.0000078, change: 2.5 },
  { name: "Market Cap", price: "2.71T", change: null },
];

const Ticker: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: isDark ? "#F0B90B" : "#ffffff",
        borderBottom: isDark ? "none" : "1px solid #f0f0f0",
        padding: "10px 0",
      }}
    >
      <div
        className="ticker-scroll"
        style={{
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        {tickerData.map((item, index) => (
          <span
            key={index}
            style={{
              marginRight: "32px",
              fontSize: "16px",
              fontWeight: 600,
              color: isDark ? "#1E2329" : "#1E2329",
            }}
          >
            {item.name}{" "}
            <span style={{ fontWeight: 700 }}>
              {typeof item.price === "number"
                ? `$${item.price.toLocaleString()}`
                : `$${item.price}`}
            </span>
            {item.change !== null && (
              <span
                style={{
                  marginLeft: "8px",
                  color: item.change > 0 ? "#44d62c" : "#f44336",
                }}
              >
                {item.change > 0 ? "+" : ""}
                {item.change}%
              </span>
            )}
          </span>
        ))}
      </div>

      <style>
        {`
        .ticker-scroll {
            animation: scroll 15s linear infinite; /* سرعت کمتر از قبل */
          }
        .ticker-scroll:hover {
            animation-play-state: paused;
          }
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Ticker;
