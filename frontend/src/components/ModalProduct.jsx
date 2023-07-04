import { Modal, Typography, TextField, Button  } from "@mui/material"
import PropTypes from 'prop-types';

export function ModalProduct ({open,handleClose,handleInputChange,handleModifyClick, updatedProduct}){
  return (
    <Modal open={open} onClose={handleClose}>
    <div style={{ margin: 'auto', width: 300, height: 300, backgroundColor: 'white', padding: 16 }}>
      <Typography variant="h6">Modificar Producto</Typography>
      <TextField
        label="Nombre"
        name="nombre_producto"
        value={updatedProduct.nombre_producto}
        onChange={handleInputChange}
      />
      <TextField label="SKU" name="sku" value={updatedProduct.sku} onChange={handleInputChange} />
      <TextField
        label="Descripción"
        name="descripcion"
        value={updatedProduct.descripcion}
        onChange={handleInputChange}
      />
      <TextField
        label="Precio"
        type="number"
        name="precio"
        value={updatedProduct.precio}
        onChange={handleInputChange}
      />
      <TextField
        label="Categoría"
        name="categoria"
        value={updatedProduct.categoria}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleModifyClick}>
        Guardar cambios
      </Button>
    </div>
  </Modal>
  )
}
ModalProduct.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  updatedProduct: PropTypes.object.isRequired,
  handleModifyClick: PropTypes.func.isRequired,
}