import { CategoryPage } from "@/components/component/categoryPage";
import Layout from "@/components/ui/layout/layout";
import Link from "next/link";
import ProductLayout from "../products/layout";
import {
  formatCategoriesWithChildren,
  getCategoryPaths,
  getPaginatedCategories,
} from "@/lib/operations/operations-woocommerce";
import { useRouter } from "next/router";
import { useState } from "react";
import usePagination from "@/lib/hooks/usePagination";
import Head from "next/head";
import { SITE_DESCRIPTION } from "@/lib/helpers";

export const getServerSideProps = async (context) => {
  const data = await getPaginatedCategories(
    context.query.sort ? context.query.sort : "name-asc",
    context.query.page ? context.query.page : 1
  );
  console.log(data);
  return {
    props: {
      categories: data.data.categories || null,
      pagesTotal: data.data.total_pages || null,
    },
  };
};

const Page = ({ categories, pagesTotal }) => {
  const router = useRouter();
  const [pages, setPages] = useState([1]);

  try {
    usePagination(
      router.query.page ? Number(router.query.page) : 1,
      Number(pagesTotal)
    ).then((data) => {
      if (pages.length !== data.length) {
        setPages(data);
      }
    });
  } catch (error) {
    console.log(error);
  }

  const product_page_title = "CDI Furlers | Product Categories";
  return (
    <>
      <Head>
        <title>{product_page_title}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:title" content={product_page_title} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta
          property="og:image"
          content="/images/meta/og_image_cdiFurlers.png"
        />
        <meta
          property="og:url"
          content="https://cdifurlers.com/product-category"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product_page_title} />
        <meta
          name="twitter:site"
          content="https://cdifurlers.com/product-category"
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
      <Layout>
        {/* <ProductLayout categoriesWithChildren={categoriesWithChildren}> */}
        <CategoryPage categories={categories} pages={pages} />
        {/* </ProductLayout> */}
      </Layout>
    </>
  );
};

export default Page;
