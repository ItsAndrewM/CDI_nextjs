import { useState, useEffect } from "react";
import { CategoryChildrenContext } from "./categoryChildrenContext";
import { formatCategoriesWithChildren } from "../operations/operations-woocommerce";

export const CategoryChildrenProvider = ({ children }) => {
  const [categoriesWithChildren, setCategoriesWithChildren] = useState(null);

  const fetchCategories = async () => {
    const response = await formatCategoriesWithChildren();
    if (response) {
      setCategoriesWithChildren(response);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryChildrenContext.Provider value={categoriesWithChildren}>
      {children}
    </CategoryChildrenContext.Provider>
  );
};
