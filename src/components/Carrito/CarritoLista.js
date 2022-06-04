import CarritoItem from "./CarritoItem"

const CarritoLista = ({ carrito, eliminarProducto }) => {
  return (
    <ul>
      {carrito.map(producto => {
        return <CarritoItem key={producto.id} producto={producto} eliminarProducto={eliminarProducto} />
      })}
      </ul>
     
  )
}
export default CarritoLista
