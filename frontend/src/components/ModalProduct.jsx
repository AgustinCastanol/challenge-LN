import { Modal, Typography, TextField, Button } from "@mui/material"
import PropTypes from 'prop-types';
import '../assets/Modal.css'
import { Dropdown } from "./DropDown";
import { useDropdown } from "../hooks/useDropdown";
export function ModalProduct({title, open, handleClose, handleInputChange, handleModifyClick, updatedProduct }) {
  const [optionsCategory,optionsStates] = useDropdown();

  const onSelectCategory = (option) => {
    updatedProduct.categoria.nombre = option;
  }

  const onSelectState = (option) => {
    updatedProduct.estado.nombre = option;
  };
  return (
    <Modal className="container-modal" open={open} onClose={handleClose}>
      <div style={{ margin: 'auto', width: 500, height: 380, backgroundColor: 'white', padding: 16 }}>
        <Typography color={"GrayText"} variant="h6">{title}</Typography>
        <div className="container-inputs">
          <TextField
            label="Nombre"
            name="nombre_producto"
            value={updatedProduct.nombre_producto}
            onChange={handleInputChange}
          />
          <TextField
            label="SKU"
            name="sku"
            value={updatedProduct.sku}
            onChange={handleInputChange}
            type="number"
          />
          <TextField
            label="Precio"
            type="number"
            name="precio"
            value={updatedProduct.precio}
            onChange={handleInputChange}
          />
          <Dropdown options={optionsCategory} onSelect={onSelectCategory} labelOption="Seleccionar una Categoria" title="categoria" initialValue={updatedProduct.categoria.nombre}/>
          <Dropdown options={optionsStates} onSelect={onSelectState} labelOption="Seleccionar un Estado" title="estado" initialValue={updatedProduct.estado.nombre}/>
          <TextField
            className="input-descripcion"
            label="Descripción"
            name="descripcion"
            value={updatedProduct.descripcion}
            onChange={handleInputChange}
          />
          
          <Button className="button-submit" variant="contained" onClick={handleModifyClick}>
            Guardar cambios
          </Button>
        </div>
      </div>
    </Modal>
  )
}
ModalProduct.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  updatedProduct: PropTypes.object.isRequired,
  handleModifyClick: PropTypes.func.isRequired,
}