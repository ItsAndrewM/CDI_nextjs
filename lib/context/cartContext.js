import { createContext } from "react";

export const CartContext = createContext({
  cart: null,
  setCart: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
});
