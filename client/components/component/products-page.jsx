/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/uqRiAxfQwjd
 */
import Link from "next/link";

import { formatPrice, removeCharsFromName } from "@/lib/helpers";
import Image from "next/image";

export function ProductsPage({ products }) {
  return (
    <div className="grid gap-6 md:gap-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {!products.length
          ? null
          : products.map((product) => {
              return (
                <div className="relative group" key={product.id}>
                  <Link
                    className="absolute inset-0 z-10"
                    href={`/product-category/${product.categories[0].slug}/${product.slug}`}
                  >
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    alt={removeCharsFromName(product.name)}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                    height={200}
                    src={
                      !product.images
                        ? `/placeholder.svg`
                        : product.images[0].src
                    }
                    width={200}
                  />
                  <div className="flex-1 py-4">
                    <Link
                      href={`/product-category/${product.categories[0].slug}/${product.slug}`}
                    >
                      <h3 className="font-semibold tracking-tight text-center">
                        {removeCharsFromName(product.name)}
                      </h3>

                      <h4 className="font-semibold text-center">
                        {formatPrice(product.prices)}
                      </h4>
                      <small className="block text-sm w-full leading-none text-gray-500 text-center">
                        Product Description
                      </small>
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
