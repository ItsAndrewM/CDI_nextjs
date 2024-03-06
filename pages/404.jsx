import Layout from "@/components/ui/layout/layout";
import { NotFound } from "@/components/component/not-found";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>CDI Furlers | Page Not Found</title>
      </Head>
      <Layout>
        <NotFound />
      </Layout>
    </>
  );
};

export default Page;
