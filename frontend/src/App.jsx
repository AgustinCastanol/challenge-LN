
import './App.css'
import { ListOfProducts } from './components/ListOfProducts'
import { useEffect } from "react"
import { useState } from "react"
import * as api from './helper/api'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'


function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProductos = async () => {
      try {
        const response = await api.getProductList(signal);
        setProductos(response);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
    return () => {
      controller.abort();
    }
  }, []);
  const [filterProducts,] = useFilters();
  const filteredProducts = filterProducts(productos);
  return (
    <>
      <Header />
      <ListOfProducts productos={filteredProducts} />
    </>
  )
}



export default App
