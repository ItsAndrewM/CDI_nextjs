import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { Checkbox } from "../checkbox";
import { Label } from "../label";
import { Currency } from "@/components/component/currency";

const Aside = ({ categoriesWithChildren }) => {
  return (
    <aside className="flex flex-col gap-4 items-start border-r border-gray-200">
      <Currency />
      <h2 className="text-2xl font-bold tracking-tight">Product Categories</h2>
      <nav className="grid gap-2 text-sm font-medium ">
        {!categoriesWithChildren.length
          ? null
          : categoriesWithChildren.map((category) => {
              if (category.name !== "Uncategorized") {
                return (
                  <div key={category.id}>
                    <Link
                      className="text-gray-500 hover:text-gray-900 "
                      href="#"
                    >
                      {category.name}
                    </Link>
                    {!category.children.length ? null : (
                      <ul className="list-disc list-inside pl-5 text-gray-400">
                        {category.children.map((child) => {
                          return (
                            <li key={child.id}>
                              <Link href="#">{child.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              }
            })}
        {/* <div>
          <Link className="text-gray-500 hover:text-gray-900 " href="#">
            Fashion
          </Link>
          <ul className="list-disc list-inside pl-5 text-gray-400">
            <li>Men's Fashion</li>
            <li>Women's Fashion</li>
            <li>Kids' Fashion</li>
          </ul>
        </div>
        <div>
          <Link className="text-gray-500 hover:text-gray-900 " href="#">
            Home & Kitchen
          </Link>
          <ul className="list-disc list-inside pl-5 text-gray-400">
            <li>Furniture</li>
            <li>Kitchen Appliances</li>
            <li>Home Decor</li>
          </ul>
        </div>
        <div>
          <Link className="text-gray-500 hover:text-gray-900 " href="#">
            Books
          </Link>
          <ul className="list-disc list-inside pl-5 text-gray-400">
            <li>Fiction</li>
            <li>Non-fiction</li>
            <li>Children's Books</li>
          </ul>
        </div>
        <div>
          <Link className="text-gray-500 hover:text-gray-900 " href="#">
            Toys & Games
          </Link>
          <ul className="list-disc list-inside pl-5 text-gray-400">
            <li>Action Figures</li>
            <li>Board Games</li>
            <li>Dolls & Accessories</li>
          </ul>
        </div> */}
      </nav>
      {/* <h2 className="text-2xl font-bold tracking-tight mt-8">Filters</h2>
      <Accordion className="w-full" collapsible type="single">
        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="price-under-25" />
                Under $25
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="price-25-50" />
                $25 to $50
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="price-50-100" />
                $50 to $100
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="price-100-200" />
                $100 to $200
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="price-200-above" />
                $200 & Above
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger className="text-base">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="brand-apple" />
                Apple
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="brand-samsung" />
                Samsung
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="brand-sony" />
                Sony
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="brand-microsoft" />
                Microsoft
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="brand-adidas" />
                Adidas
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </aside>
  );
};

export default Aside;
