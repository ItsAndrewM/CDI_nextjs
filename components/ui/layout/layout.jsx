// import { useAcceptCookies } from "@/lib/hooks/useAcceptCookies";
import Script from "next/script";
import Footer from "../footer/footer";
import Header from "../header/header";
import Head from "next/head";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/helpers";

const Layout = ({ children }) => {
  // const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
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
      <Header />
      <main className="max-w-screen-3xl ">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
