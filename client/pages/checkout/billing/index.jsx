import { BillingPage } from "@/components/component/billingPage";
import Layout from "@/components/ui/layout/layout";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>CDI Furlers | Billing Address</title>
      </Head>
      <Layout>
        <BillingPage />
      </Layout>
    </>
  );
};

export default Page;
