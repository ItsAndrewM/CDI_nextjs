import { BlogPostPageLayout } from "@/components/component/blog-post-page-layout";
import Layout from "@/components/ui/layout/layout";
import { SITE_DESCRIPTION } from "@/lib/helpers";
import {
  findPostIdBySlug,
  getPostById,
  getPostImage,
  getPostPaths,
} from "@/lib/operations/operations-woocommerce";
import Head from "next/head";
import { useRouter } from "next/router";

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
  const image = await getPostImage(post._links["wp:featuredmedia"][0].href);
  return {
    props: {
      post: post || null,
      image: image || null,
    },
  };
};

const Page = ({ post, image }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`CDI Furlers | ${post ? post.title.rendered : null}`}</title>
        <meta
          name="description"
          content={post ? post.excerpt.rendered : SITE_DESCRIPTION}
        />
        <meta
          property="og:title"
          content={`CDI Furlers | ${post ? post.title.rendered : null}`}
        />
        <meta
          property="og:description"
          content={post ? post.excerpt.rendered : SITE_DESCRIPTION}
        />
        <meta
          property="og:image"
          content={
            image
              ? image.media_details.sizes.full.source_url
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
          content={`CDI Furlers | ${post ? post.title.rendered : null}`}
        />
        <meta
          name="twitter:site"
          content={router ? router.asPath : "https://cdifurlers.com/"}
        />
        <meta
          name="twitter:description"
          content={post ? post.excerpt.rendered : SITE_DESCRIPTION}
        />
        <meta
          name="twitter:image"
          content={
            image
              ? image.media_details.sizes.full.source_url
              : "/images/meta/og_image_cdiFurlers.png"
          }
        />
        <link rel="canonical" href="/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout>
        {!post || !image ? null : (
          <BlogPostPageLayout post={post} image={image} />
        )}
      </Layout>
    </>
  );
};

export default Page;
