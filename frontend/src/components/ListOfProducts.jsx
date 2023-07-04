import { Producto } from "./Product"
import PropTypes from 'prop-types';
import '../assets/ListOfProducts.css'
export function ListOfProducts({productos}) {
  return (
    <div className="container-products" spacing={2}>
      {productos.map((producto) => (
        <div className="product" key={producto.id}>
          <Producto producto={producto} />
        </div>
      ))}
    </div>
  )
}

ListOfProducts.propTypes = {
  productos: PropTypes.array.isRequired,
};