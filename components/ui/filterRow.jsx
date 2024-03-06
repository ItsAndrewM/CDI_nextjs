import { getIfChecked, getQuery } from "@/lib/helpers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Label } from "./label";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const FilterRow = ({ filter, group }) => {
  const router = useRouter();
  return (
    <Label className="flex items-center gap-2 font-normal">
      <RadioGroupItem id={filter.id} value={filter.query} />
      {filter.name}
    </Label>
  );
};

export default FilterRow;
