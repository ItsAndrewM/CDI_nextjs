import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";

export const useRemoveItemFromCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const removeItemFromCart = async (itemKey) => {
    if (itemKey === "" || itemKey == null) {
      throw new Error("ItemId must not be blank or null");
    }
    try {
      const data = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_DEV_URL
            : process.env.NEXT_PUBLIC_PUBLIC_URL
        }/api/wc/store/cart/add-item`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key: itemKey,
            token: cart.nonce,
          }),
        }
      );
      const newCart = await data.json();
      localStorage.setItem("woocommerce-cart", JSON.stringify(newCart.data));
      setCart(newCart.data);
      return newCart;
    } catch (err) {
      console.log(err);
    }
  };

  return removeItemFromCart;
};
