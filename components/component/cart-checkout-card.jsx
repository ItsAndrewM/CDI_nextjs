import { CurrencyContext } from "@/lib/context/currencyContext";
import Image from "next/image";
import { useContext } from "react";

const CartCheckoutCard = ({ item }) => {
  const { currentRate } = useContext(CurrencyContext);
  return (
    <div className="flex justify-between items-center border-b-2 pb-2">
      <div className="flex items-center space-x-2">
        <Image
          alt={item.name}
          className="w-12 h-12"
          height="50"
          src={!item.image ? "/placeholder.svg" : item.image.src}
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width="50"
        />
        <p className="font-medium">{item.name}</p>
      </div>
      <p className="font-medium">
        ${(currentRate.rate * Number(item.total)).toFixed(2)}
      </p>
    </div>
  );
};

export default CartCheckoutCard;
