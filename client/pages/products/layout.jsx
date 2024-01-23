import { PaginationBar } from "@/components/component/paginationBar";
import Aside from "@/components/ui/products/aside";
import { SITE_DESCRIPTION, removeCharsFromName } from "@/lib/helpers";
import usePagination from "@/lib/hooks/usePagination";
import styles from "@/styles/products.module.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductLayout = ({ categories, children, categoriesWithChildren }) => {
  const product_page_title = "CDI Furlers | Products";

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
      <div
        key="1"
        className="md:grid md:grid-cols-[240px_1fr] flex items-start justify-center px-4 mx-auto py-6 flex"
      >
        <Aside categoriesWithChildren={categoriesWithChildren} />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </>
  );
};

export default ProductLayout;
