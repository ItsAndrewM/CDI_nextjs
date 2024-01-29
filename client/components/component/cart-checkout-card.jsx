import Image from "next/image";

const CartCheckoutCard = ({ item }) => {
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
      <p className="font-medium">${Number(item.total).toFixed(2)}</p>
    </div>
  );
};

export default CartCheckoutCard;
