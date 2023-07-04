import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
export function useFilters() {
  const {filters, setFilters} = useContext(FiltersContext)
    const filterProducts = (products) => {
      return products.filter((product) => {
        return product.precio >= filters.minPrice && (filters.category === 'all' || product.categoria.nombre === filters.category)
      })
    }
    return [filterProducts, setFilters];
  }
  