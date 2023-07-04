import { Button } from '@mui/material'
import { useState } from 'react';
import {ModalProduct} from './ModalProduct'
export function ProductCreator (){
  const [updatedProduct, setUpdatedProduct] = useState({
    nombre_producto: "",
    sku: "",
    precio: "",
    categoria:{
      nombre: "",
    },
    descripcion: "",
    estado:{
      nombre: "",
    }
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputChange = (e) => {
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  }
  const handleModifyClick = () => {
    try {
      console.log(updatedProduct)
      setOpen(false);
      setUpdatedProduct({
        nombre_producto: "",
        sku: "",
        precio: "",
        categoria:{
          nombre: "",
        },
        descripcion: "",
        estado:{
          nombre: "",
        }
      })
    } catch (error) {
      console.error('Error al modificar el producto:', error);
    }
  }

  return(
    <>
    <Button variant="contained" color="primary" onClick={handleOpen}>
      Crear Producto
    </Button>
    <ModalProduct 
      open={open} 
      handleClose={handleClose} 
      handleInputChange={handleInputChange}
      handleModifyClick={handleModifyClick}
      updatedProduct={updatedProduct}
      title="Crear Producto"
    />
    </>
  )
}