import { CheckoutPage } from "@/components/component/checkoutPage";
import Layout from "@/components/ui/layout/layout";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>CDI Furlers | Shipping Address</title>
      </Head>
      <Layout>
        <CheckoutPage />
      </Layout>
    </>
  );
};

export default Page;
