import { useContext } from "react";
import { ProductsContext } from "../context/products";

export function useProduct() {
  const context = useContext(ProductsContext);

  if(context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return [context.products,context.loading ,context.addProduct];
}