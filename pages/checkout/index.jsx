import CircularProgress from "@/components/ui/circularProgress/circularProgress";
import Layout from "@/components/ui/layout/layout";
import { CartContext } from "@/lib/context/cartContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export const getServerSideProps = async (context) => {
  const id = context.query.orderId;
  return {
    props: {
      id,
    },
  };
};

const Page = ({ id }) => {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  useEffect(() => {
    if (id && cart) {
      router.push({ pathname: "/checkout/shipping", query: { orderId: id } });
    } else {
      alert(
        "Something went wrong. Try adding a product to your cart and try again. You will be redirected shortly."
      );
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [id]);

  return (
    <Layout>
      <div className="w-full h-svh lg:h-vh flex justify-center items-center">
        <CircularProgress />
      </div>
    </Layout>
  );
};
export default Page;
