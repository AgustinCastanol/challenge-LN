
import './App.css'
import { ListOfProducts } from './components/ListOfProducts'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { useProduct } from './hooks/useProduct'

function App() {
  const [productos,] = useProduct();

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
