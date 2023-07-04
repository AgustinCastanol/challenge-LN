/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import * as api from '../helper/api';
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsSize, setProductsSize] = useState(0);
  useEffect(() => {
    const controller = new AbortController();

    fetchProductos();
    return () => {
      controller.abort();
    }
  }, []);

  const fetchProductos = async (page=1,limit=100 ) => {
    try {
      const response = await api.getProductList({page,limit});
      setProducts(response);
      setLoading(false);
      setProductsSize(response.length);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

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

  const pagination = (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const productsPagination = fetchProductos(startIndex, endIndex);
    return setProducts(productsPagination);
  }

  return (
    <ProductsContext.Provider value={{ products,loading,addProduct,deleteProduct,modifyProduct,productsSize,pagination}}>
      {children}
    </ProductsContext.Provider>
  )
}
