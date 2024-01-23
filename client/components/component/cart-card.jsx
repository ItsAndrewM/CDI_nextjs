import { formatCartItemTotal } from "@/lib/helpers";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Quantity } from "./quantity";
import { CartContext } from "@/lib/context/cartContext";
import {
  deleteItemInCart,
  updateItemInCart,
} from "@/lib/operations/operations-woocommerce";

const CartCard = ({ product }) => {
  const { cart, orderId, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleUpdate = async () => {
      if (quantity > 0 && Number(product.quantity) !== quantity) {
        setLoading(true);
        const newCart = await updateItemInCart(orderId, product, quantity);
        if (newCart) {
          setCart(newCart);
          setLoading(false);
        }
      }
    };
    handleUpdate();
  }, [quantity]);

  const handleRemove = async () => {
    setLoading(true);
    const newCart = await deleteItemInCart(
      orderId,
      product.id,
      product.product_id,
      product.variation_id
    );
    console.log(newCart);
    if (newCart) {
      setCart(newCart);
      setLoading(false);
    }
  };

  console.log(product);

  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 ">
      <Image
        alt={product.name}
        className="aspect-square rounded-md object-cover"
        height="64"
        src={!product.image ? "/placeholder.svg" : product.image.src}
        width="64"
      />
      <div className="flex flex-col">
        <span className="font-medium">
          {product.name}{" "}
          {product.type === "variation"
            ? `- ${product.variation[0].value}`
            : null}
        </span>
        <span className="text-sm">${Number(product.total).toFixed(2)}</span>
        <span className="text-sm">
          <Quantity
            setQuantity={setQuantity}
            quantity={quantity}
            min={0}
            loading={loading}
            handleRemove={handleRemove}
          />
        </span>
      </div>
    </div>
  );
};

export default CartCard;
