/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import * as api from '../helper/api';
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
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

  const addProduct = async (product) => {
    const newProduct = await api.createProduct(product);
    return setProducts(prevState => [...prevState, newProduct]);
  }
  const deleteProduct = async (id) => {
    await api.deleteProduct(id);
    return fetchProductos(currentPage, 100);
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
    setCurrentPage(page);
    return setProducts(productsPagination);
  }

  return (
    <ProductsContext.Provider value={{ products,loading,addProduct,deleteProduct,modifyProduct,productsSize,pagination,currentPage}}>
      {children}
    </ProductsContext.Provider>
  )
}
