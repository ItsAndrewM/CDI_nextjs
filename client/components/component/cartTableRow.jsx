import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import {
  deleteItemInCart,
  updateItemInCart,
} from "@/lib/operations/operations-woocommerce";
import { CartContext } from "@/lib/context/cartContext";
import LoadingSpinner from "../ui/loadingSpinner";
import { TrashIcon } from "../icons/trashIcon";
import { MinusIcon } from "../icons/minusIcon";
import { PlusIcon } from "../icons/plusIcon";

const CartTableRow = ({ item }) => {
  const { orderId, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleUpdate = async () => {
      if (quantity > 0 && Number(item.quantity) !== quantity) {
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
      item.id,
      item.product_id,
      item.variation_id
    );
    if (newCart) {
      setCart(newCart);
      setLoading(false);
    }
  };

  const handleQuantity = (e) => {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= min) {
      setQuantity(val);
      if (handleRemove && val === 0) {
        handleRemove();
      }
    }
  };

  const increaseQuantity = async (n = 1) => {
    const val = Number(quantity) + n;
    if (Number.isInteger(val) && val >= min) {
      setQuantity(val);
      if (handleRemove && val === 0) {
        await handleRemove();
      }
    }
  };
  return (
    <TableRow>
      <TableCell>
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="/placeholder.svg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{item.name}</TableCell>
      <TableCell>${item.price}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              increaseQuantity(-1);
            }}
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
          {loading ? (
            <span className="w-12 h-10 text-center border border-gray-200 flex justify-center item-center rounded-md  bg-white ">
              <LoadingSpinner />
            </span>
          ) : (
            <Input
              className="w-16"
              defaultValue="1"
              type="number"
              value={Number(item.quantity)}
              onChange={handleQuantity}
            />
          )}
          <Button
            size="icon"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              increaseQuantity(1);
            }}
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
      <TableCell>${Number(item.subtotal).toFixed(2)}</TableCell>
      <TableCell>
        <Button size="icon" variant="outline">
          <TrashIcon className="h-4 w-4" />
          <span className="sr-only">Remove</span>
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CartTableRow;
