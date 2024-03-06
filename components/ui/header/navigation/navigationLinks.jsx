import { menuItems } from "@/data/navigation/desktop/menuItems";
import { useCart } from "@/lib/hooks/useCart";
import Link from "next/link";
import { Button } from "../../button";
import { CartSidebar } from "@/components/component/cart-sidebar";
import { useContext, useEffect, useRef, useState } from "react";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuSub,
} from "../../navigation-menu";
import SearchBox from "../../searchBox/searchBox";
import { MobileHeader } from "@/components/component/mobile-header";
import { ShoppingCartIcon } from "@/components/icons/shoppingCartIcon";
import { Badge } from "../../badge";
import { CartContext } from "@/lib/context/cartContext";

const NavigationLinks = () => {
  const { cart } = useContext(CartContext);
  const [cartQuantity, setCartQuantity] = useState(0);
  const dialogRef = useRef();
  const handleDialog = () => {
    if (dialogRef.current.open) {
      dialogRef.current.close();
    } else {
      dialogRef.current.showModal();
    }
  };

  useEffect(() => {
    if (cart) {
      if (cart.line_items.length > 0) {
        let total = 0;
        cart.line_items.forEach((item) => {
          total += item.quantity;
        });
        setCartQuantity(total);
      }
    }
  }, [cart]);

  return (
    <div className="w-full flex items-center justify-center ">
      <MobileHeader dialogRef={dialogRef} cartQuantity={cartQuantity} />
      <NavigationMenu className="hidden lg:flex lg:justify-between lg:items-center lg:w-full  [&>div]:w-full">
        <NavigationMenuList className="w-full ">
          {/* <ul className="flex w-full space-x-4 items-center justify-between"> */}
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
          <NavigationMenuItem className="w-full max-w-sm">
            <SearchBox />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              className="bg-inhereit hover:bg-inhereit"
              onClick={handleDialog}
            >
              <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
              {!cart ? null : !cart.line_items.length ? null : (
                <Badge className="absolute top-0 right-0 transform  -translate-y-1 h-5 w-5 text-xs flex items-center justify-center rounded-full bg-cdiBlue text-white">
                  {cartQuantity}
                </Badge>
              )}
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <CartSidebar dialogRef={dialogRef} />
    </div>
  );
};

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

export default NavigationLinks;
