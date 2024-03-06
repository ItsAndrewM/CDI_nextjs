/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nCaHdwhCViW
 */
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import Image from "next/image";
import Link from "next/link";
import { formatHTMLString, removeCharsFromName } from "@/lib/helpers";
import { PaginationBar } from "./paginationBar";
import { useRouter } from "next/router";
import { Button } from "../ui/button";
import Filters from "../ui/filters";
import SearchBoxProductLayout from "../ui/searchBox/searchBoxProductLayout";
import { Currency } from "./currency";
import { useContext, useEffect } from "react";
import { CurrencyContext } from "@/lib/context/currencyContext";

export function ProductLayout({
  products,
  categoriesWithChildren,
  pages,
  title,
}) {
  const router = useRouter();
  const { currentRate } = useContext(CurrencyContext);
  return (
    <div key="1" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {!title ? "Products" : title}
          </h2>
          <nav className="mt-8 space-y-2 flex flex-col">
            {!categoriesWithChildren.length
              ? null
              : categoriesWithChildren.map((category) => {
                  if (category.name !== "Uncategorized") {
                    return (
                      // <div key={category.id}>
                      //   <div className="text-sm font-medium text-gray-900">
                      //     <Link
                      //       href={`/product-category/${category.slug}`}
                      //       className="text-sm font-medium text-gray-900 hover:text-gray-700"
                      //     >
                      //       {category.name}
                      //     </Link>
                      //   </div>
                      //   {!category.children.length
                      //     ? null
                      //     : category.children.map((child) => {
                      //         return (
                      //           <div>
                      //             <Link
                      //               href={`/product-category/${child.slug}`}
                      //               className="text-xs text-gray-700 pl-2 hover:text-gray-500"
                      //             >
                      //               {child.name}
                      //             </Link>
                      //           </div>
                      //         );
                      //       })}
                      // </div>
                      !category.children.length ? (
                        <Link
                          href={`/product-category/${category.slug}`}
                          className="text-sm font-medium text-gray-900 hover:text-gray-700 hover:underline py-4 transition-all border-b"
                          key={category.id}
                        >
                          {category.name}
                        </Link>
                      ) : (
                        <Accordion
                          key={category.id}
                          className="space-y-2"
                          collapsible
                          type="single"
                        >
                          <AccordionItem value="electronics">
                            <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                              <Link
                                href={`/product-category/${category.slug}`}
                                className="text-sm font-medium text-gray-900 hover:text-gray-700"
                              >
                                {category.name}
                              </Link>
                            </AccordionTrigger>
                            {!category.children.length ? null : (
                              <AccordionContent className="pl-4">
                                <ul className="list-disc list-inside">
                                  {category.children.map((child) => {
                                    return (
                                      <li key={child.id}>
                                        <Link
                                          href={`/product-category/${child.slug}`}
                                          className="text-xs text-gray-700 pl-2 hover:text-gray-500"
                                        >
                                          {removeCharsFromName(child.name)}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </AccordionContent>
                            )}
                          </AccordionItem>
                        </Accordion>
                      )
                    );
                  }
                })}
          </nav>

          <Filters />
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-end items-center pb-4 gap-4">
            <Currency />

            <SearchBoxProductLayout />
            <Select
              className="border-0 z-10"
              onValueChange={(value) =>
                router.push({
                  pathname: router.pathname,
                  query: { ...router.query, sort: value },
                })
              }
            >
              <SelectTrigger id="sort">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="date-asc">Newest</SelectItem>
                <SelectItem value="date-desc">Oldest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="title-asc">Name: A to Z</SelectItem>
                <SelectItem value="title-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
            {/* <LayoutGridIcon className="h-6 w-6 text-gray-900" /> */}
          </div>
          {/* <div className="border-dashed border-2 border-gray-300 rounded-lg h-96" /> */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {!products.length
              ? null
              : products.map((product) => {
                  const priceArr = formatHTMLString(product.price_html);
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
                      <div className="flex-1 py-4 ">
                        <Link
                          href={`/product-category/${product.categories[0].slug}/${product.slug}`}
                          className="flex flex-col items-center"
                        >
                          <h3 className="font-semibold tracking-tight text-center">
                            {removeCharsFromName(product.name)}
                          </h3>

                          <h4 className="font-semibold text-center">
                            {currentRate.code}{" "}
                            {!priceArr.length
                              ? `$${(
                                  currentRate.rate * Number(product.price)
                                ).toFixed(2)}`
                              : priceArr.length > 1
                              ? `$${(
                                  currentRate.rate * Number(priceArr[0])
                                ).toFixed(2)} - $${(
                                  currentRate.rate * Number(priceArr[1])
                                ).toFixed(2)}`
                              : `$${(
                                  currentRate.rate * Number(priceArr[0])
                                ).toFixed(2)}`}
                            {/* <div
                              dangerouslySetInnerHTML={{
                                __html: product.price_html,
                              }}
                            ></div> */}
                          </h4>
                          <Button
                            variant="solid"
                            className="bg-cdiBlue hover:bg-cdiLightBlue"
                          >
                            <small className="block text-sm w-full leading-none text-white text-center">
                              {product.type === "variations"
                                ? "Add to Cart"
                                : "Select From Options"}
                            </small>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
          </div>
          {pages.length > 1 ? <PaginationBar pages={pages} /> : null}
        </div>
      </div>
    </div>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}
