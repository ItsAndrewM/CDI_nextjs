import Layout from "@/components/ui/layout/layout";
import { CartContext } from "@/lib/context/cartContext";
import { useContext } from "react";

const Page = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <Layout>
      {!cart ? (
        "loading..."
      ) : (
        <iframe src={cart.payment_url} title="Payments page"></iframe>
      )}
    </Layout>
  );
};

export default Page;
