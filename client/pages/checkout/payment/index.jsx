import { PaymentsPage } from "@/components/component/paymentsPage";
import Layout from "@/components/ui/layout/layout";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>CDI Furlers | Payment</title>
      </Head>
      <Layout>
        <PaymentsPage />
      </Layout>
    </>
  );
};

export default Page;
