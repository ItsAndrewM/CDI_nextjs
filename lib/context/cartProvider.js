import { useEffect, useState } from "react";
import { CartContext } from "./cartContext";
import useSWR from "swr";
import {
  getCart,
  getCartByKey,
  getNewCart,
  getOldCart,
} from "../operations/operations-woocommerce";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const fetchNewCart = async () => {
    const newCart = await getCart();
    if (newCart.success === true) {
      setCart(newCart.data);
      setOrderId(newCart.data.id);
      localStorage.setItem(
        "woocommerce-cart-order-id",
        JSON.stringify(newCart.data.id)
      );
    } else {
      throw new Error("Error in fetching cart");
    }
  };

  const fetchOldCart = async (order_id) => {
    const oldCart = await getOldCart(order_id);
    if (oldCart.success === true) {
      if (oldCart.data.status !== "trash") {
        setCart(oldCart.data);
        setOrderId(oldCart.data.id);
        if (
          oldCart.data.id !==
          JSON.parse(localStorage.getItem("woocommerce-cart-order-id"))
        ) {
          localStorage.setItem(
            "woocommerce-cart-order-id",
            JSON.stringify(oldCart.data.id)
          );
        }
      } else {
        fetchNewCart();
      }
    } else {
      throw new Error("Error in fetching cart");
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("woocommerce-cart-order-id");
    if (id && id !== "undefined") {
      fetchOldCart(id);
    } else {
      fetchNewCart();
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        orderId,
        setOrderId,
        // nonce,
        // setNonce,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
