
import './assets/App.css'
import { ListOfProducts } from './components/ListOfProducts'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { useProduct } from './hooks/useProduct'
import { Pagination } from './components/Pagination'

function App() {
  const [productos,loading] = useProduct();
  const [filterProducts,] = useFilters();
  const filteredProducts = filterProducts(productos);
  return (
    <>
      <Header />
      {
        loading ? <p>Cargando...</p> :<ListOfProducts productos={filteredProducts} />
      }
      <Pagination />
    </>
  )
}



export default App
