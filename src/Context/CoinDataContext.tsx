// src/Context/CoinDataContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCoinList } from "../Services/Coincap";

type Coin = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  priceUsd: string;
  marketCapUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
};

type CoinContextType = {
  coins: Coin[] | null;
  loading: boolean;
  error: string | null;
};

const CoinDataContext = createContext<CoinContextType>({
  coins: null,
  loading: true,
  error: null,
});

export const useCoinData = () => useContext(CoinDataContext);

export const CoinDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coins, setCoins] = useState<Coin[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await getCoinList();
        console.log("Coin data fetched:", response);
        setCoins(response);
      } catch {
        setError("Failed to fetch coin data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <CoinDataContext.Provider value={{ coins, loading, error }}>
      {children}
    </CoinDataContext.Provider>
  );
};
