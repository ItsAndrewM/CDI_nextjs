import {
  getCategoryPaths,
  getPostPaths,
  getProductPaths,
} from "@/lib/operations/operations-woocommerce";

const EXTERNAL_DATA_URL = "https://www.cdifurlers.com";

const generateSiteMap = (collections, products, posts) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
                <url>
                <loc>${EXTERNAL_DATA_URL}/</loc>
                </url>
                <url>
                <loc>${EXTERNAL_DATA_URL}/terms-conditions</loc>
                </url>
                <url>
                <loc>${EXTERNAL_DATA_URL}/privacy-policy</loc>
                </url>
                    <url>
                    <loc>${EXTERNAL_DATA_URL}/product-category</loc>
                    </url>
                    <url>
                    <loc>${EXTERNAL_DATA_URL}/product-information</loc>
                    </url>
                    ${posts.map((post) => {
                      return `
                            <url>
                            <loc>${`${EXTERNAL_DATA_URL}/product-information/${post.slug}`}</loc>
                            <lastmod>${new Date()
                              .toISOString()
                              .slice(0, 10)}</lastmod>
                            </url>
                        `;
                    })}
                    <url>
                    <loc>${EXTERNAL_DATA_URL}/contact-us</loc>
                    </url>
                    <url>
                    <loc>${EXTERNAL_DATA_URL}/meet-the-team</loc>
                    </url>
                    <url>
                    <loc>${EXTERNAL_DATA_URL}/faq</loc>
                    </url>
                    <url>
                    <loc>${EXTERNAL_DATA_URL}/products</loc>
                    </url>
                    ${collections
                      .map((collection) => {
                        return `
                            <url>
                            <loc>${`${EXTERNAL_DATA_URL}/product-category/${collection}`}</loc>
                            <lastmod>${new Date()
                              .toISOString()
                              .slice(0, 10)}</lastmod>
                            <changefreq>daily</changefreq>
                                <priority>0.8</priority>
                            </url>
                        `;
                      })
                      .join("")}
                      ${products
                        .map((product) => {
                          return `
                              <url>
                              <loc>${`${EXTERNAL_DATA_URL}/product-category/${product}`}</loc>
                              <lastmod>${new Date()
                                .toISOString()
                                .slice(0, 10)}</lastmod>
                              <changefreq>daily</changefreq>
                                <priority>0.8</priority>
                              </url>
                          `;
                        })
                        .join("")}

                </urlset>`;
};

const SiteMap = () => {};

export default SiteMap;

export async function getServerSideProps({ res }) {
  const products = await getProductPaths();
  const collections = await getCategoryPaths();
  const posts = await getPostPaths();
  const sitemap = generateSiteMap(collections, products, posts);

  res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
