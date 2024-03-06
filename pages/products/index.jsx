import Layout from "@/components/ui/layout/layout";
import { getProducts } from "@/lib/operations/operations-woocommerce";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { SITE_DESCRIPTION } from "@/lib/helpers";
import usePagination from "@/lib/hooks/usePagination";
import { ProductLayout } from "@/components/component/product-layout";
import Head from "next/head";
import { SkeletonProductLayout } from "@/components/component/skeleton-product-layout";
import { CategoryChildrenContext } from "@/lib/context/categoryChildrenContext";

export const getServerSideProps = async (context) => {
  const products = await getProducts(context.query);
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      products: products ? products.products : null,
      pagesTotal: products ? products.total_pages : null,
    },
  };
};

const Page = ({ products, pagesTotal }) => {
  const product_page_title = "CDI Furlers | Products";
  const router = useRouter();
  const [pages, setPages] = useState([1]);
  const categoriesWithChildren = useContext(CategoryChildrenContext);

  try {
    usePagination(
      router.query.page ? Number(router.query.page) : 1,
      pagesTotal
    ).then((data) => {
      if (pages.length !== data.length) {
        setPages(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      {" "}
      <Head>
        <title>{product_page_title}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:title" content={product_page_title} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta
          property="og:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <meta property="og:url" content="https://cdifurlers.com" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product_page_title} />
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
        {/* <SortBy /> */}
        <ProductLayout
          products={products}
          categoriesWithChildren={
            !categoriesWithChildren ? [] : categoriesWithChildren
          }
          pages={pages}
        />
      </Layout>
    </>
  );
};

export default Page;
