import { menuItems } from "@/data/navigation/desktop/menuItems";
import { useCart } from "@/lib/hooks/useCart";
import Link from "next/link";
import { Button } from "../../button";
import { CartSidebar } from "@/components/component/cart-sidebar";
import { useRef } from "react";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuSub,
} from "../../navigation-menu";

const NavigationLinks = () => {
  const dialogRef = useRef();
  const handleDialog = () => {
    console.log(dialogRef.current.open);
    if (dialogRef.current.open) {
      dialogRef.current.close();
    } else {
      dialogRef.current.show();
    }
  };
  return (
    <div className="w-full flex items-center justify-center ">
      {/* <nav
        aria-label="Main navigation"
        className="w-full flex items-center justify-between"
      > */}
      {/* <ul className="flex w-full space-x-4 items-center justify-between">
          {menuItems.map((menuItem, index) => {
            return !menuItem.submenu.length ? (
              <li key={index + menuItem.title}>
                <Link
                  className="text-blue-600 hover:text-blue-800"
                  href={menuItem.url}
                >
                  {menuItem.title}
                </Link>
              </li>
            ) : (
              <li className="relative group" key={index + menuItem.title}>
                <Link
                  className="text-blue-600 hover:text-blue-800 flex items-center "
                  href={menuItem.url}
                >
                  {menuItem.title}
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg z-10">
                  <ul className="py-1">
                    {menuItem.submenu.map((subMenuItem, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            href={subMenuItem.url}
                          >
                            {subMenuItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
          <li>
            <div className="flex items-center space-x-4 hover:text-blue-600 transition-colors duration-200">
              <Link href={"/"}>
                <SearchIcon className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
              </Link>
              <Button
                className="bg-inhereit hover:bg-inhereit"
                onClick={handleDialog}
              >
                <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
              </Button>
            </div>
          </li>
        </ul> */}
      <NavigationMenu className="hidden lg:flex lg:justify-between lg:items-center lg:w-full">
        <NavigationMenuList>
          {menuItems.map((menuItem, index) => {
            if (!menuItem.submenu.length) {
              return (
                <NavigationMenuItem key={index + menuItem.title}>
                  <NavigationMenuLink className="px-4 py-2" href={menuItem.url}>
                    {menuItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={index + menuItem.title}>
                  <NavigationMenuTrigger className="px-4 py-2">
                    <Link href={menuItem.url} className="font-normal text-base">
                      {menuItem.title}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[500px]">
                    {menuItem.submenu.map((sub) => {
                      return (
                        <NavigationMenuLink asChild key={sub.title}>
                          <Link className="block px-4 py-2" href={sub.url}>
                            {sub.title}
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }
          })}
          <NavigationMenuItem>
            <Button
              className="bg-inhereit hover:bg-inhereit"
              onClick={handleDialog}
            >
              <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* </nav> */}
      <CartSidebar dialogRef={dialogRef} />
    </div>
  );
};

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

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

function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export default NavigationLinks;
