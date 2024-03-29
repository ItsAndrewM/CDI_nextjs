import { Input } from "../input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchProducts } from "@/lib/operations/operations-woocommerce";

const SearchBoxProductLayout = () => {
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
    </div>
  );
};

export default SearchBoxProductLayout;

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
