import '../assets/Filters.css'
import { useId } from 'react';
import { Typography, Slider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useFilters } from '../hooks/useFilters';
import { useDropdown } from '../hooks/useDropdown';
// eslint-disable-next-line react/prop-types
export function Filters() {
  const [,setFilters, valueFilters] = useFilters();
  const [valuesCategory,valuesState] = useDropdown(); //este hook se deberia de llamar formValues
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const stateFilterId = useId();
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
        value={valueFilters.minPrice}
        onChange={handleChangeMinPrice}
        min={0}
        max={10000}
        aria-labelledby={minPriceFilterId}
        id={minPriceFilterId}
      />
      <Typography>{valueFilters.minPrice}</Typography>
    </div>
    <div className='filters-category'>
      <FormControl>
        <InputLabel id={categoryFilterId} >Categoría</InputLabel>
        <Select
          labelId={categoryFilterId}
          id={categoryFilterId}
          value={valueFilters.category}
          onChange={handlerChangeCategory}
        >
          <MenuItem value="all">Todos</MenuItem>
          {
            valuesCategory.map((value) => (
              <MenuItem key={value.label} value={value.label}>{value.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
    <div className='filters-state'>
      <FormControl>
        <InputLabel id={stateFilterId}>Estado</InputLabel>
        <Select
          labelId={stateFilterId}
          id={stateFilterId}
          value={valueFilters.state}
          onChange={(event) => setFilters(prevState => ({ ...prevState, state: event.target.value }))}
        >
          <MenuItem value="all">Todos</MenuItem>
          {
            valuesState.map((value) => (
              <MenuItem key={value.label} value={value.label}>{value.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  </section>
  )
}

