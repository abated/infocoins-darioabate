const CarritoItem = ({ producto, eliminarProducto, precio_total }) => {
  const eliminar = () => {
    eliminarProducto(producto.id)
  }
  return (
    <div>
      <h3>nombre del producto: {producto.nombre}</h3>
      <h3>cantidad del producto: {producto.cantidad}</h3>
      <p>cantidad total: {precio_total}</p>
      <h3> id del prodcuto: {producto.id}</h3>
      <button onClick={eliminar}>Eliminar Producto</button>
    </div>
  )
}

export default CarritoItem