import Layout from "@/components/ui/layout/layout";
import { SITE_DESCRIPTION } from "@/lib/helpers";
import Head from "next/head";
import DesignedForSailors from "@/components/ui/designedForSailors/designedForSailors";

const Page = () => {
  return (
    <>
      <Head>
        <title>{"CDI Furlers | Designed For Sailors"}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          property="og:title"
          content={"CDI Furlers | Designed For Sailors"}
        />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta
          property="og:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <meta
          property="og:url"
          content="https://cdifurlers.com/designed-for-sailors"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"CDI Furlers | Designed For Sailors"}
        />
        <meta
          name="twitter:site"
          content="https://cdifurlers.com/designed-for-sailors"
        />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta
          name="twitter:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <link rel="canonical" href="/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="NOINDEX, NOINDEX" />
      </Head>
      <Layout>
        <DesignedForSailors />
      </Layout>
    </>
  );
};

export default Page;
