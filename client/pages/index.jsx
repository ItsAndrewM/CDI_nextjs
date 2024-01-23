import Head from "next/head";
import { useContext } from "react";
import { CartContext } from "@/lib/context/cartContext";
import Layout from "@/components/ui/layout/layout";
import { HomePage } from "@/components/component/home-page";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/helpers";
import {
  getCartByKey,
  getCoCart,
  getCoCartIndex,
  getProductByIdCoCart,
  getProducts,
  getProductsCoCart,
} from "@/lib/operations/operations-woocommerce";

// export const getStaticProps = async ({ params }) => {
//   const index = await getCoCartIndex();
//   return {
//     props: {
//       index: index || null,
//     },
//   };
// };

export default function Home({}) {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta
          property="og:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <meta property="og:url" content="https://cdifurlers.com" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:site" content="https://cdifurlers.com" />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta
          name="twitter:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <link rel="canonical" href="/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
