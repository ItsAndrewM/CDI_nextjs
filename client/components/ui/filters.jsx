import { Label } from "./label";
import { Checkbox } from "./checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import {
  boatMakeFilter,
  priceFilter,
  shippingFilter,
  tagFilters,
} from "@/data/filters/filters";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteKeyReturnObject, getIfChecked, getQuery } from "@/lib/helpers";
import FilterRow from "./filterRow";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const Filters = () => {
  const router = useRouter();

  const handleValueChange = (value) => {
    router.push(
      {
        pathname: router.pathname,
        query: getQuery(router.query, value),
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight mt-4">Filters</h2>
      <Accordion className="w-full" collapsible type="single">
        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price</AccordionTrigger>
          <AccordionContent>
            <form className="grid gap-2">
              <RadioGroup
                defaultValue={priceFilter[0].query}
                onValueChange={handleValueChange}
              >
                {priceFilter.map((filter) => {
                  return (
                    <FilterRow filter={filter} key={filter.id} group="price" />
                  );
                })}
              </RadioGroup>
            </form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Boat Make">
          <AccordionTrigger className="text-base">Boat Make</AccordionTrigger>
          <AccordionContent>
            <form className="grid gap-2">
              <RadioGroup
                defaultValue={boatMakeFilter[0].query}
                onValueChange={handleValueChange}
              >
                {boatMakeFilter.map((filter) => {
                  return (
                    <FilterRow
                      filter={filter}
                      key={filter.id}
                      group="boat_make"
                    />
                  );
                })}
              </RadioGroup>
            </form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Product Tags">
          <AccordionTrigger className="text-base">
            Product Tags
          </AccordionTrigger>
          <AccordionContent>
            <form className="grid gap-2">
              <RadioGroup
                defaultValue={tagFilters[0].query}
                onValueChange={handleValueChange}
              >
                {tagFilters.map((filter) => {
                  return (
                    <FilterRow filter={filter} key={filter.id} group="tags" />
                  );
                })}
              </RadioGroup>
            </form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Shipping Classes">
          <AccordionTrigger className="text-base">
            Product Classes
          </AccordionTrigger>
          <AccordionContent>
            <form className="grid gap-2">
              <RadioGroup
                defaultValue={shippingFilter[0].query}
                onValueChange={handleValueChange}
              >
                {shippingFilter.map((filter) => {
                  return (
                    <FilterRow
                      filter={filter}
                      key={filter.id}
                      group="shipping_classes"
                    />
                  );
                })}
              </RadioGroup>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Filters;
