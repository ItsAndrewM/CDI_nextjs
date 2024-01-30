import { ThankYouPage } from "@/components/component/thank-you-page";
import Layout from "@/components/ui/layout/layout";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>CDI Furlers | Thank you for ordering!</title>
        <meta NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
      </Head>
      <Layout>
        <ThankYouPage />
      </Layout>
    </>
  );
};

export default Page;
