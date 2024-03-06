import { NotFound } from "@/components/component/not-found";
import Layout from "@/components/ui/layout/layout";
import Head from "next/head";

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>CDI Furlers | Server-side error occurred</title>
      </Head>
      <Layout>
        <NotFound />
      </Layout>
    </>
  );
};

export default Custom500;
