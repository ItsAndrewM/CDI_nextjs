/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ujcleB5Gp3t
 */

import { getPostImage } from "@/lib/operations/operations-woocommerce";
import Image from "next/image";
import { useEffect, useState } from "react";

export function BlogPostPageLayout({ post }) {
  const [image, setImage] = useState(null);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const fetchPostImage = async () => {
      const image = await getPostImage(post._links["wp:featuredmedia"][0].href);
      setImage(image);
    };
    if (post) {
      fetchPostImage();
    }
  }, [post]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          alt={!image ? "Featured image" : image.alt_text}
          className="absolute inset-0 object-cover w-full h-full"
          height={1080}
          src={
            !image
              ? "/placeholder.svg"
              : image.media_details.sizes.full.source_url
          }
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="relative h-full bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="space-y-4">
            <p className="text-white text-sm md:text-base">
              Published on{" "}
              {new Date(post.date).toLocaleDateString("en-US", dateOptions)}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              {post.title.rendered}
            </h1>
          </div>
        </div>
      </div>
      <main className="px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <article className="prose prose-lg mx-auto w-full lg:max-w-3xl">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
      </main>
    </div>
  );
}
