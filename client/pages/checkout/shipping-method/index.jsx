import { ShippingMethodPage } from "@/components/component/shippingMethodPage";
import Layout from "@/components/ui/layout/layout";
import Head from "next/head";

const Page = () => {
  return (
    <>
      {" "}
      <Head>
        <title>CDI Furlers | Shipping Method</title>
      </Head>
      <Layout>
        <ShippingMethodPage />
      </Layout>
    </>
  );
};

export default Page;
