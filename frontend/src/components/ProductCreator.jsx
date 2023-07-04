import '../assets/ProductCreator.css'
import { Button } from '@mui/material'
import { useState } from 'react';
import {ModalProduct} from './ModalProduct'
import { useProduct } from '../hooks/useProduct';
import { randomId, validateForm } from '../helper/utils';
export function ProductCreator (){
  const [,,addProduct] = useProduct();
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
      const errors = validateForm(updatedProduct)
      if(errors == null){
        return alert("Error en los datos ingresados, por favor vuelva a ingresarlos");//en este punto deberia de realizar un popup con los errores
      }
      setOpen(false);
      addProduct({
        id: randomId(),
        nombre: updatedProduct.nombre_producto,
        sku: parseInt(updatedProduct.sku),
        precio: parseInt(updatedProduct.precio),
        categoria:updatedProduct.categoria.nombre,
        descripcion: updatedProduct.descripcion,
        estado:updatedProduct.estado.nombre,
      });
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
    <Button className='button_products_creator' variant="contained" color="primary" onClick={handleOpen}>
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