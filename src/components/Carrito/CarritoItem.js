const CarritoItem = ({ producto, eliminarProducto,usuario }) => {
  const eliminar = () => {
    eliminarProducto(producto.id)
  }
  return (
    <div>
  
      <img className="imagenCarritoItem" src={producto.imagen} alt="imagenCarrito" />
      <h3>nombre del producto: {producto.nombre}</h3>
      <h3>cantidad del producto: {producto.cantidad}</h3>
      <h3> id del prodcuto: {producto.id}</h3>
      <h3>Total por {producto.cantidad} : ${producto.precio * producto.cantidad}</h3>
      <button onClick={eliminar}>Eliminar Producto</button>
    </div>
  )
}

export default CarritoItem