import { Input } from "@/components/ui/input";
import Layout from "@/components/ui/layout/layout";
import SearchBox from "@/components/ui/searchBox/searchBox";
import { searchProducts } from "@/lib/operations/operations-woocommerce";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  return (
    <Layout>
      <SearchBox />
    </Layout>
  );
};

export default Page;
