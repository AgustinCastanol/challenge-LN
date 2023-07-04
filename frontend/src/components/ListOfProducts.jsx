import { Producto } from "./Product"
import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
export function ListOfProducts({productos}) {

  if (productos.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <Grid container spacing={2}>
      {productos.map((producto) => (
        <Grid item xs={8} sm={6} md={4} key={producto.id}>
          <Producto producto={producto} />
        </Grid>
      ))}
    </Grid>
  )
}

ListOfProducts.propTypes = {
  productos: PropTypes.array.isRequired,
};