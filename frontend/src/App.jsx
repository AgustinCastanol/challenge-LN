
import './assets/App.css'
import { ListOfProducts } from './components/ListOfProducts'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { useProduct } from './hooks/useProduct'
import { Pagination } from '@mui/material'
import { usePagination } from './hooks/usePagination'
import { DropDownProvider } from './context/dropdown';
function App() {
  const limit = 100;
  const [productos, loading] = useProduct();
  const [filterProducts,] = useFilters();
  const filteredProducts = filterProducts(productos);
  const [size, , setPagination] = usePagination();
  const pages = Math.ceil(size / limit);
  return (
    <>
      <DropDownProvider>
      <Header />
        {
          loading ? <p>Cargando...</p> : <ListOfProducts productos={filteredProducts} />
        }
      </DropDownProvider>
      <Pagination
        className='pagination'
        shape="rounded"
        size="large"
        color='primary'
        onChange={(e, page) => setPagination(page, limit)}
        count={pages}
      />
    </>
  )
}



export default App
