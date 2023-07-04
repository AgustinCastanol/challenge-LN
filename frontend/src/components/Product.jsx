import { Card, CardContent, Typography, Button } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalProduct } from './ModalProduct';
import { useProduct } from '../hooks/useProduct';
import '../assets/Product.css'
import { DropDownProvider } from '../context/dropdown';
export function Producto({ producto }) {
  const [open, setOpen] = useState(false);
  const [, , , deleteProduct, modifyProduct] = useProduct();
  const [updatedProduct, setUpdatedProduct] = useState(producto);
  const handleDeleteClick = async () => {
    try {
      await deleteProduct(producto.id);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };
  const handleModifyClick = () => {
    try {
      modifyProduct(producto.id, {
        id: updatedProduct.id,
        sku: updatedProduct.sku,
        nombre: updatedProduct.nombre_producto,
        estado: updatedProduct.estado.nombre,
        categoria: updatedProduct.categoria.nombre,
        descripcion: updatedProduct.descripcion,
        precio: parseFloat(updatedProduct.precio),
      });
      console.log(updatedProduct)
      setOpen(false);
    } catch (error) {
      console.error('Error al modificar el producto:', error);
    }
  };
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
            {producto.nombre_producto + ' - ' + producto.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.descripcion}
          </Typography>
          <Typography variant="body1" component="div">
            Precio: {producto.precio}
          </Typography>
          <Typography variant="body1" component="div">
            Categoría: {producto.categoria.nombre}
          </Typography>
          <Typography variant="body1" component="div">
            Estado: {producto.estado.nombre}
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
      <DropDownProvider>
        <ModalProduct title='Modificar Producto' open={open} handleOpen={handleOpen} handleClose={handleClose} handleInputChange={handleInputChange} handleModifyClick={handleModifyClick} updatedProduct={updatedProduct} />
      </DropDownProvider>
    </>
  )

}
Producto.propTypes = {
  producto: PropTypes.object.isRequired,
};
