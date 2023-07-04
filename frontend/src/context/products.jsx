/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import * as api from '../helper/api';
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProductos = async () => {
      try {
        const response = await api.getProductList(signal);
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
    return () => {
      controller.abort();
    }
  }, []);
  const addProduct = (product) => {
    return setProducts([...products, product]);
  }
  const deleteProduct = (id) => {
    return setProducts(products.filter(product => product.id !== id));
  }
  const modifyProduct = (id, updatedProduct) => {
    return setProducts(products.map(product => product.id === id ? updatedProduct : product));
  }

  return (
    <ProductsContext.Provider value={{ products,loading,deleteProduct,modifyProduct,addProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}

