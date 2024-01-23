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
  // const [nonce, setNonce] = useState(null);
  const [orderId, setOrderId] = useState(null);

  // const fetcher = (...args) =>
  //   fetch(...args).then((res) => {
  //     // const order_id = res.headers.get("nonce");
  //     const token = localStorage.getItem("woocommerce-cart-order-id");
  //     // if (cartToken) {
  //     if (token) {
  //       setCart(res.data);
  //       setOrderId(JSON.parse(token));
  //     } else {
  //       setCart(res.data);
  //       setOrderId(res.data.id);
  //       localStorage.setItem(
  //         "woocommerce-cart-order-id",
  //         JSON.stringify(res.data.id)
  //       );
  //       // setNonce(cartToken);

  //       // localStorage.setItem("woocommerce-cart-nonce", JSON.stringify(nonce));
  //     }
  //     res.json();
  //   });

  // const { data, isLoading, error } = useSWR(
  //   !orderId ? "/api/wc/store/cart" : `/api/wc/store/cart/id/${orderId}`,
  //   fetcher
  // );

  // const fetchCart = async () => {
  //   try {
  //     const newCart = await getNewCart();
  //     if (newCart) {
  //       setCart(newCart);
  //       // localStorage.setItem("woocommerce-cart", JSON.stringify(newCart));
  //       if (newCart.cart_key) {
  //         setNonce(newCart.cart_key);
  //         localStorage.setItem(
  //           "woocommerce-cart-nonce",
  //           JSON.stringify(newCart.cart_key)
  //         );
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchOldCart = async (token) => {
  //   try {
  //     const oldCart = await getCartByKey(token);
  //     if (oldCart) {
  //       setCart(oldCart);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   // const localCartData = localStorage.getItem("woocommerce-cart");
  //   const token = localStorage.getItem("woocommerce-cart-nonce");

  //   // if (localCartData && localCartData !== "undefined") {
  //   //   const cartData = JSON.parse(localCartData);
  //   //   setCart(cartData);
  //   // }
  //   if (token && token !== "undefined") {
  //     const nonceData = JSON.parse(token);
  //     setNonce(nonceData);
  //     fetchOldCart(nonceData);
  //   } else {
  //     // if (!isLoading && data) {
  //     //   localStorage.setItem("woocommerce-cart", JSON.stringify(data.data));
  //     //   setCart(data.data);
  //     // }
  //     // if (error) {
  //     //   throw new Error("Error in fetching cart");
  //     // }
  //     fetchCart();
  //   }
  //   // window.addEventListener("storage", fetcher);
  //   // return () => {
  //   //   window.removeEventListener("storage", fetcher);
  //   // };
  //   // }, [data]);
  // }, []);

  // if (nonce) console.log(nonce);
  // //"413de70015"

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
        // nonce,
        // setNonce,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
