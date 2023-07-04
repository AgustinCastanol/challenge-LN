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
    return setProducts(prevState => [...prevState, product]);
  }
  const deleteProduct = async (id) => {
    await api.deleteProduct(id);
    return setProducts(prevState => prevState.filter(product => product.id !== id));
  }
  const modifyProduct = async (id, updatedProduct) => {
    console.log(typeof updatedProduct.precio)
    const newProduct = await api.updateProduct(id, updatedProduct);
    console.log(products)
    return setProducts(prevState => prevState.map(product => product.id === id ? newProduct : product));
  }

  return (
    <ProductsContext.Provider value={{ products,loading,addProduct,deleteProduct,modifyProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}

