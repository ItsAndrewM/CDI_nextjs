/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DydEFF8UYLc
 */
import { getPostImage } from "@/lib/operations/operations-woocommerce";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function BlogPostLayout({ posts }) {
  const [imagesArr, setImagesArr] = useState([]);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const fetchPostImages = async () => {
      const postImages = [];
      for (const post of posts) {
        const image = await getPostImage(
          post._links["wp:featuredmedia"][0].href
        );
        postImages.push(image);
      }
      setImagesArr(postImages);
    };
    if (posts && posts.length) {
      fetchPostImages();
    }
  }, [posts]);

  return (
    <div key="1" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Most recent post */}
      {!posts[0] ? null : (
        <article className="mb-12">
          <Link
            href={`/product-information/${posts[0].slug}/`}
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              alt={
                !imagesArr[0] ? "Featured post image" : imagesArr[0].alt_text
              }
              className="w-full h-64 md:h-96 object-cover rounded-lg"
              height={600}
              src={
                !imagesArr[0]
                  ? "/placeholder.svg"
                  : imagesArr[0].media_details.sizes.full.source_url
              }
              style={{
                aspectRatio: "1200/600",
                objectFit: "cover",
              }}
              width={1200}
            />
          </Link>
          <div className="mt-6">
            <Link
              href={`/product-information/${posts[0].slug}/`}
              className="hover:opacity-70 transition-opacity"
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                {posts[0].title.rendered}
              </h1>
            </Link>
            <p className="mt-2 text-gray-500">
              Published on{" "}
              {new Date(posts[0].date).toLocaleDateString("en-US", dateOptions)}{" "}
              {/* by
              <span className="font-medium"> John Doe</span> */}
            </p>
            {/* <p className="mt-4 text-lg text-gray-700">
              Artificial Intelligence (AI) is rapidly transforming our world.
              Remarkable breakthroughs in machine learning have led to...
            </p> */}
            <div
              className="mt-4 text-lg text-gray-700"
              dangerouslySetInnerHTML={{ __html: posts[0].excerpt.rendered }}
            />
            <Link
              className="mt-4 inline-block bg-cdiBlue text-white py-2 px-4 rounded hover:bg-cdiLightBlue hover:text-black duration-200 font-semibold"
              href={`/product-information/${posts[0].slug}/`}
            >
              Read More
            </Link>
          </div>
        </article>
      )}
      {!posts.length > 4 ? null : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href={`/product-information/${posts[1].slug}/`}
            className="hover:opacity-70 transition-opacity"
          >
            <article className="flex flex-col">
              <Image
                alt={!imagesArr[1] ? "Post image" : imagesArr[1].alt_text}
                className="w-full h-40 object-cover rounded-lg "
                height={200}
                src={
                  !imagesArr[1]
                    ? "/placeholder.svg"
                    : imagesArr[1].media_details.sizes.full.source_url
                }
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
              <h2 className="mt-4 text-xl font-bold">
                {posts[1].title.rendered}
              </h2>
              <p className="mt-2 text-gray-500">
                Published on{" "}
                {new Date(posts[1].date).toLocaleDateString(
                  "en-US",
                  dateOptions
                )}{" "}
              </p>
            </article>
          </Link>
          <Link
            href={`/product-information/${posts[2].slug}/`}
            className="hover:opacity-70 transition-opacity"
          >
            <article className="flex flex-col">
              <Image
                alt={!imagesArr[2] ? "Post image" : imagesArr[2].alt_text}
                className="w-full h-40 object-cover rounded-lg "
                height={200}
                src={
                  !imagesArr[2]
                    ? "/placeholder.svg"
                    : imagesArr[2].media_details.sizes.full.source_url
                }
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
              <h2 className="mt-4 text-xl font-bold">
                {posts[2].title.rendered}
              </h2>
              <p className="mt-2 text-gray-500">
                Published on{" "}
                {new Date(posts[2].date).toLocaleDateString(
                  "en-US",
                  dateOptions
                )}{" "}
              </p>
            </article>
          </Link>{" "}
          <Link
            href={`/product-information/${posts[3].slug}/`}
            className="hover:opacity-70 transition-opacity"
          >
            <article className="flex flex-col">
              <Image
                alt={!imagesArr[3] ? "Post image" : imagesArr[3].alt_text}
                className="w-full h-40 object-cover rounded-lg "
                height={200}
                src={
                  !imagesArr[3]
                    ? "/placeholder.svg"
                    : imagesArr[3].media_details.sizes.full.source_url
                }
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
              <h2 className="mt-4 text-xl font-bold">
                {posts[3].title.rendered}
              </h2>
              <p className="mt-2 text-gray-500">
                Published on{" "}
                {new Date(posts[3].date).toLocaleDateString(
                  "en-US",
                  dateOptions
                )}{" "}
              </p>
            </article>
          </Link>
        </div>
      )}
      {!posts.length > 5 ? null : (
        <div className="flex flex-col gap-6 mt-6 w-full">
          {posts.slice(4).map((post, index) => {
            return (
              <div className="flex flex-col md:flex-row w-full" key={post.id}>
                <Image
                  alt={
                    !imagesArr[index] ? "Post image" : imagesArr[index].alt_text
                  }
                  className="w-full h-64 md:w-1/2 object-cover rounded-lg"
                  height={300}
                  src={
                    !imagesArr[index]
                      ? "/placeholder.svg"
                      : imagesArr[index].media_details.sizes.full.source_url
                  }
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="mt-4 md:mt-0 md:ml-4 w-4/5">
                  <h2 className="text-xl font-bold">{post.title.rendered}</h2>
                  <p className="mt-2 text-gray-500">
                    Published on{" "}
                    {new Date(post.date).toLocaleDateString(
                      "en-US",
                      dateOptions
                    )}
                    {/* by
                    <span className="font-medium">John Doe</span> */}
                  </p>
                  <div
                    className="mt-2 text-gray-700 w-"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  {/* <p className="mt-2 text-gray-700">
                    Discover how 5G technology is revolutionizing communication
                    and the potential impact it could have on our daily lives.
                  </p> */}
                  <Link
                    className="mt-4 inline-block bg-cdiBlue text-white py-2 px-4 rounded hover:bg-cdiLightBlue hover:text-black duration-200 font-semibold"
                    href={`/product-information/${post.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
