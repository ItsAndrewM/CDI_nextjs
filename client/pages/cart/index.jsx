import { CartLayout } from "@/components/component/cart-layout";
import Layout from "@/components/ui/layout/layout";
import { CartContext } from "@/lib/context/cartContext";
import Head from "next/head";
import { useContext } from "react";

const Page = () => {
  const { cart, orderId } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>CDI Furlers | Cart</title>
      </Head>
      <Layout>
        <CartLayout
          cart={!cart ? null : cart}
          orderId={!orderId ? null : orderId}
        />
      </Layout>
    </>
  );
};

export default Page;
