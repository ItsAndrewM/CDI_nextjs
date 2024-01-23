import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";

export const useAddItemToCart = () => {
  const { cart, setCart, nonce } = useContext(CartContext);
  const addItemToCart = async (product_id, quantity, variant) => {
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
            Nonce: nonce,
          },
          body: JSON.stringify({
            id: product_id,
            quantity: !quantity ? 1 : quantity,
            variant: !variant.length ? [] : variant,
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

  return addItemToCart;
};
