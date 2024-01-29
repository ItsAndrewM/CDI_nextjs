import CartCheckoutCard from "./cart-checkout-card";

const CartCheckoutTotal = ({ cart }) => {
  return (
    <div className="col-span-1 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Review your items before checkout
        </p>
      </div>
      <div className="space-y-4">
        {!cart
          ? null
          : cart.line_items.map((item) => {
              return <CartCheckoutCard item={item} key={item.id} />;
            })}

        <div className="flex justify-between items-center pt-4">
          <h2 className="text-xl font-bold">Subtotal</h2>
          <p className="text-xl font-bold">
            $
            {!cart
              ? (0.0).toFixed(2)
              : (
                  Number(cart.total) -
                  Number(cart.total_tax) -
                  Number(cart.shipping_total)
                ).toFixed(2)}
          </p>
        </div>
        {!cart ? null : Number(cart.shipping_total) === 0 ? null : (
          <div className="flex justify-between items-center pt-4">
            <h2 className="text-xl font-bold">Shipping</h2>
            <p className="text-xl font-bold">
              $
              {!cart
                ? (0.0).toFixed(2)
                : Number(cart.shipping_total).toFixed(2)}
            </p>
          </div>
        )}
        <div className="flex justify-between items-center pt-4">
          <h2 className="text-xl font-bold">Tax</h2>
          <p className="text-xl font-bold">
            ${!cart ? (0.0).toFixed(2) : Number(cart.total_tax).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between items-center pt-4">
          <h2 className="text-xl font-bold">Total</h2>
          <p className="text-xl font-bold">
            ${!cart ? (0.0).toFixed(2) : Number(cart.total).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCheckoutTotal;
