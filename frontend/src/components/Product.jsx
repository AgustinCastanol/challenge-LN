import { Card, CardContent, Typography,Button } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import * as api from '../helper/api';
import { ModalProduct } from './ModalProduct';
import '../assets/Product.css'
export function Producto({ nombre_producto, precio, descripcion,estado, categoria, id, sku }) {
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    nombre_producto: nombre_producto,
    precio: precio,
    descripcion: descripcion,
    estado: estado.nombre,
    categoria: categoria.nombre,
    sku: sku,
  });
  const handleDeleteClick = async () => {
    try {
      await api.deleteProduct(id);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };
  const handleModifyClick = () => {};
  const handleOpen = () => {
    setOpen(true);
  };
  const handleInputChange = (e) => {
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {nombre_producto + ' - ' + id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
        <Typography variant="body1" component="div">
          Precio: {precio}
        </Typography>
        <Typography variant="body1" component="div">
          Categoría: {categoria.nombre}
        </Typography>
        <Typography variant="body1" component="div">
          Estado: {estado.nombre}
        </Typography>
        <div className='container-btn-products'>
        {/* <AddToCart handlerAddToCart={handleAddToCart} /> */}
        <Button variant="outlined" color="error" onClick={handleDeleteClick}>
          Eliminar
        </Button>
        <Button color="secondary" variant="outlined" onClick={handleOpen}>
          Modificar
        </Button>
        </div>
      </CardContent>
    </Card>
    <ModalProduct open={open} handleOpen={handleOpen} handleClose={handleClose} handleInputChange={handleInputChange} handleModifyClick={handleModifyClick} updatedProduct={updatedProduct}/>
    </>
  )

}
Producto.propTypes = {
  nombre_producto: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired,
  categoria: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  estado: PropTypes.object.isRequired,
  sku: PropTypes.number.isRequired,
};
