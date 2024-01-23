import { useAddItemToCart } from "@/lib/hooks/useAddItemToCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/lib/context/cartContext";
import Link from "next/link";
import { formatPrice } from "@/lib/helpers";

const ProductCard = ({ item, parent }) => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState(item.add_to_cart.text);
  const addItem = useAddItemToCart();

  const addToCart = async (product, quantity, variant) => {
    setLoading(true);
    try {
      await addItem(product.id, quantity);
      setButtonText("Added");
      setTimeout(() => {
        setButtonText("Add to Cart");
      }, 2000);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <li key={item.id}>
      {!parent ? (
        <p>{item.name}</p>
      ) : (
        <Link href={`/product-category/${parent}/${item.slug}`}>
          <p>{item.name}</p>
        </Link>
      )}
      <small>
        {item.prices.currency_code} {formatPrice(item.prices)}
      </small>

      {/* <button onClick={() => addToCart(item, 1)}>
        {!loading ? buttonText : "loading..."}
      </button> */}
    </li>
  );
};

export default ProductCard;
