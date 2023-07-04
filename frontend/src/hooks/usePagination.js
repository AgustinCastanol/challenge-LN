import { useContext } from "react";
import { ProductsContext } from "../context/products";

export function usePagination() {
  const context = useContext(ProductsContext);

  if(context === undefined) {
    throw new Error('usePagination must be used within a ProductProvider');
  }

  return [context.productsSize,context.pagination];
}