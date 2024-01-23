import { ProductLayout } from "@/components/component/product-layout";
import Layout from "@/components/ui/layout/layout";
import { SITE_DESCRIPTION } from "@/lib/helpers";
import usePagination from "@/lib/hooks/usePagination";
import {
  formatCategoriesWithChildren,
  getCategoryById,
  getCategoryId,
  getCategoryPaths,
} from "@/lib/operations/operations-woocommerce";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export const getStaticPaths = async () => {
  const paths = await getCategoryPaths();
  return {
    paths: paths.map((path) => `/product-category/${path}`) ?? [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const id = await getCategoryId(params.handle);
  const category = await getCategoryById(id);
  const categoriesWithChildren = await formatCategoriesWithChildren();
  return {
    props: {
      category: category.category || null,
      products: category.products || null,
      categoriesWithChildren: categoriesWithChildren || null,
      pagesTotal: category.total_pages || null,
    },
  };
};

const Page = ({ category, products, categoriesWithChildren, pagesTotal }) => {
  const router = useRouter();
  const [pages, setPages] = useState([1]);

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
      <Head>
        <title>{`CDI Furlers | ${category ? category.name : null}`}</title>
        <meta
          name="description"
          content={category ? category.description : SITE_DESCRIPTION}
        />
        <meta
          property="og:title"
          content={`CDI Furlers | ${category ? category.name : null}`}
        />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta
          property="og:image"
          content={
            category && category.images
              ? category.image[0].src
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
          content={`CDI Furlers | ${category ? category.name : null}`}
        />
        <meta
          name="twitter:site"
          content={router ? router.asPath : "https://cdifurlers.com/"}
        />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta
          name="twitter:image"
          content={
            category && category.images
              ? category.image[0].src
              : "/images/meta/og_image_cdiFurlers.png"
          }
        />
        <link rel="canonical" href="/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout>
        <ProductLayout
          products={products}
          categoriesWithChildren={categoriesWithChildren}
          pages={pages}
          title={category.name}
        />
      </Layout>
    </>
  );
};

export default Page;
