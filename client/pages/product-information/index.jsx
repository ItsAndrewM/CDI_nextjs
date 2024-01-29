// export const getServerSideProps = async () => {
//     return {
//         props: {},
//     };
// };

import Layout from "@/components/ui/layout/layout";
import { SITE_DESCRIPTION } from "@/lib/helpers";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>{"CDI Furlers | Product Information"}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          property="og:title"
          content={"CDI Furlers | Product Information"}
        />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta
          property="og:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <meta
          property="og:url"
          content="https://cdifurlers.com/product-information"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"CDI Furlers | Product Information"}
        />
        <meta
          name="twitter:site"
          content="https://cdifurlers.com/product-information"
        />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta
          name="twitter:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <link rel="canonical" href="/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout></Layout>
    </>
  );
};

export default Page;
