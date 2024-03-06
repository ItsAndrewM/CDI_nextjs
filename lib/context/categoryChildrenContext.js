import { createContext } from "react";

export const CategoryChildrenContext = createContext({
  categoriesWithChildren: null,
  setCategoriesWithChildren: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
});
