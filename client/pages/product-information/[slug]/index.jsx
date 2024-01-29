import { BlogPostPageLayout } from "@/components/component/blog-post-page-layout";
import Layout from "@/components/ui/layout/layout";
import {
  findPostIdBySlug,
  getPostById,
  getPostPaths,
} from "@/lib/operations/operations-woocommerce";
import Head from "next/head";

export const getStaticPaths = async () => {
  const paths = await getPostPaths();
  return {
    paths: paths.map((path) => ({ params: path })) ?? [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const id = await findPostIdBySlug(params.slug);
  const post = await getPostById(id);
  return {
    props: {
      post: post || null,
    },
  };
};

const Page = ({ post }) => {
  console.log(post);
  return (
    <>
      <Head></Head>
      <Layout>{!post ? null : <BlogPostPageLayout post={post} />}</Layout>
    </>
  );
};

export default Page;
