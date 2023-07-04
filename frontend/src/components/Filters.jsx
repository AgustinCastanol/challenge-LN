import '../assets/Filters.css'
import { useId } from 'react';
import { Typography, Slider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useFilters } from '../hooks/useFilters';
// eslint-disable-next-line react/prop-types
export function Filters() {
  const [filters,setFilters] = useFilters();


  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({ ...prevState, minPrice: event.target.value }));
  };
  const handlerChangeCategory= (event)=>{
    setFilters(prevState => ({ ...prevState, category: event.target.value }));
  }
  return (
    <section className="filters">
    <div className='filters-price'>
      <Typography id={minPriceFilterId} gutterBottom>
        Precio
      </Typography>
      <Slider
        value={filters.minPrice}
        onChange={handleChangeMinPrice}
        min={0}
        max={10000}
        aria-labelledby={minPriceFilterId}
        id={minPriceFilterId}
      />
      <Typography>{filters.minPrice}</Typography>
    </div>
    <div className='filters-category'>
      <FormControl>
        <InputLabel id={categoryFilterId} >Categoría</InputLabel>
        <Select
          labelId={categoryFilterId}
          id={categoryFilterId}
          value={filters.category}
          onChange={handlerChangeCategory}
        >
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="Escritura">Escritura</MenuItem>
          <MenuItem value="Deportes">Deportes</MenuItem>
        </Select>
      </FormControl>
    </div>
  </section>
  )
}

