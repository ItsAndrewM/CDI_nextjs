import Link from "next/link";
import { Input } from "../input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchProducts } from "@/lib/operations/operations-woocommerce";
import { Button } from "../button";

const SearchBox = () => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      query: {
        search: e.target.value,
      },
    });
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (router.query.search !== "") {
        const res = await searchProducts(router.query.search);
        if (res) {
          console.log(res);
          setSearchResults(res);
        } else {
          setSearchResults([]);
        }
      }
    };
    if (router.query.search) {
      fetchSearchResults();
    }
  }, [router.query.search]);
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search products..."
        type="search"
        name="search"
        onChange={handleSearch}
      />
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
      {!searchResults.length || router.pathname.includes("/products") ? null : (
        <div className="absolute w-full mt-1 rounded-md bg-white shadow-lg ">
          <ul className="divide-y divide-gray-200 ">
            {searchResults.map((product, index) => {
              console.log(product);
              return (
                <li className="p-4 flex items-center gap-4" key={index}>
                  <Link
                    href={`/product-category/${product.categories[0].slug}/${product.slug}`}
                    className="flex items-center gap-4 hover:bg-gray-100  rounded transition-colors duration-200 ease-in-out w-full p-2"
                  >
                    <img
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                      height="50"
                      src={
                        !product.images.length
                          ? "/placeholder.svg"
                          : product.images[0].src
                      }
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width="50"
                    />
                    <div>
                      <h4 className="text-sm font-medium">{product.name}</h4>
                      {/* <p className="text-sm text-gray-500 ">
                        {product.price_html}
                      </p> */}
                      <div
                        className="text-sm font-medium"
                        dangerouslySetInnerHTML={{ __html: product.price_html }}
                      />
                    </div>
                    <Button
                      className="ml-auto bg-cdiBlue hover:bg-cdiLightBlue text-white hover:text-black rounded-md px-4 py-2"
                      onClick={() => {
                        router.push(
                          `/product-category/${product.categories[0].slug}/${product.slug}`
                        );
                      }}
                    >
                      {product.type !== "simple"
                        ? "Select from Options"
                        : "Add to Cart"}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
