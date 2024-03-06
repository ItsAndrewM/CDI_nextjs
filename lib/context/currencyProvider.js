import { useState, useEffect } from "react";
import { getCurrencyRates } from "../helpers";
import { CurrencyContext } from "./currencyContext";

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useState({ USD: 1 });
  const [currentRate, setCurrentRate] = useState({ rate: 1, code: "USD" });

  const fetchRates = async () => {
    const response = await getCurrencyRates();
    if (response) {
      setRates({ ...rates, ...response.response.rates });
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <CurrencyContext.Provider value={{ rates, setCurrentRate, currentRate }}>
      {children}
    </CurrencyContext.Provider>
  );
};
