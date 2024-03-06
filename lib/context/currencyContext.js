import { createContext } from "react";

export const CurrencyContext = createContext({
  rates: null,
  setRates: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
});
