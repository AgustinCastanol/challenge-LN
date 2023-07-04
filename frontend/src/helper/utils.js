export function randomId () {
  return Math.floor(Math.random() * 1000)
}
export function validateForm (updateProduct) {
  //validar todos los campos del objeto y devolver los que dan error
  let errors = {}
  if (!updateProduct.nombre_producto) {
    errors.name = 'Name is required'
  }
  if (!updateProduct.precio) {
    errors.precio = 'Price is required'
  }
  if(!updateProduct.sku){
    errors.sku = 'SKU is required'
  }
  if(updateProduct.sku<0){
    errors.sku = 'SKU must be positive'
  }
  if (!updateProduct.descripcion) {
    errors.description = 'Description is required'
  }
  if (!updateProduct.categoria || !updateProduct.categoria.nombre) {
    errors.category = 'Category is required'
  }
  if (!updateProduct.estado) {
    errors.estado = 'estado is required'
  }
  if(updateProduct.precio<0){
    errors.precio = 'Price must be positive'
  }
  return errors
}