import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';

export function AddToCart ({handlerAddToCart}){
  return (
    <Button
    variant="outlined"
    color="primary"
    startIcon={<AddShoppingCartIcon />}
    onClick={handlerAddToCart}
  >
  </Button>
  )
}

AddToCart.propTypes = {
  handlerAddToCart: PropTypes.func.isRequired,
};