import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";

export const useCart = () => {
  const { cart, setCart, nonce, setNonce } = useContext(CartContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getCart();
  //       if (result.status === 200) {
  //         setCart(result);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const token = localStorage.getItem("woocommerce-cart-nonce");
    //     if (token && token !== "undefined" && nonce) {
    //       const nonceData = JSON.parse(token);
    //       const oldCart = await getCartByKey(nonceData);
    //       setCart(oldCart);
    //     } else {
    //       const newCart = await getCart();
    //       setCart(newCart);
    //       setNonce(newCart.cart_key);
    //     }
    //     const result = await getCart();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
  }, []);
  return cart;
};
