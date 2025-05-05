// src/Services/coincap.ts
import axios from "axios";

const API_BASE_URL = "https://rest.coincap.io/v3";
const API_KEY = import.meta.env.VITE_COINCAP_API_KEY;
const headers = {
  Authorization: `Bearer ${API_KEY}`,
};

export const getCoinList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/assets`, { headers });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching CoinCap assets:", error);
    throw error;
  }
};
