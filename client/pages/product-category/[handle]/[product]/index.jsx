import Layout from "@/components/ui/layout/layout";
import {
  SITE_DESCRIPTION,
  formatPrice,
  variationToDropdown,
} from "@/lib/helpers";
import {
  getProductById,
  getProductPath,
  getProductPaths,
} from "@/lib/operations/operations-woocommerce";
import { useAddItemToCart } from "@/lib/hooks/useAddItemToCart";
import { Fragment, useContext, useEffect, useState } from "react";
import { ProductPage } from "@/components/component/product-page";
import Head from "next/head";
import { useRouter } from "next/router";
import { paths } from "@/data/paths/paths";

export const getStaticPaths = async () => {
  // const paths = await getProductPaths();
  return {
    paths: paths?.map((path) => `/product-category/${path}`) ?? [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  // const product = await getProductById(params.product);

  return {
    props: {
      // product: product || null,
      paths: paths || null,
    },
  };
};

const Page = ({
  // product,
  paths,
}) => {
  const router = useRouter();
  return (
    <>
      {/* <Head>
        <title>{`CDI Furlers | ${product ? product.name : null}`}</title>
        <meta
          name="description"
          content={product ? product.description : SITE_DESCRIPTION}
        />
        <meta
          property="og:title"
          content={`CDI Furlers | ${product ? product.name : null}`}
        />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta
          property="og:image"
          content={
            product && product.images.length
              ? product.images[0].src
              : "/images/meta/og_image_cdiFurlers.png"
          }
        />
        <meta
          property="og:url"
          content={router ? router.asPath : "https://cdifurlers.com/"}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`CDI Furlers | ${product ? product.name : null}`}
        />
        <meta
          name="twitter:site"
          content={router ? router.asPath : "https://cdifurlers.com/"}
        />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta
          name="twitter:image"
          content={
            product && product.images.length
              ? product.images[0].src
              : "/images/meta/og_image_cdiFurlers.png"
          }
        />
        <link rel="canonical" href="/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head> */}
      <Layout>
        {/* {!product ? null : <ProductPage product={product} />} */}
      </Layout>
    </>
  );
};

export default Page;
