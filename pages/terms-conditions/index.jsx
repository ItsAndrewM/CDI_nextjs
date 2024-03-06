import Layout from "@/components/ui/layout/layout";
import { getPageData } from "@/lib/operations/operations-woocommerce";
import Head from "next/head";

export const getServerSideProps = async () => {
  const response = await getPageData(52);
  return {
    props: { data: response },
  };
};

const Page = ({ data }) => {
  return (
    <>
      <Head>
        <title>CDI Furlers | Terms & Conditions</title>
      </Head>
      <Layout>
        <div
          className="container mx-auto px-4"
          dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        />
      </Layout>
    </>
  );
};

export default Page;
