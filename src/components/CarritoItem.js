const CarritoItem = ({producto,eliminarProducto}) => {
  return (
    <div>
        <button onClick={eliminarProducto}>Eliminar Producto</button>
    <h3>nombre del producto: {producto.nombre}</h3>
 <h3>cantidad del producto: {producto.cantidad}</h3>
 <h3> id del prodcuto: {producto.id}</h3>

 
    </div>
  )
}

export default CarritoItem