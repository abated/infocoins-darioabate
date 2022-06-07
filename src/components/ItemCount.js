import { useState } from "react"
import Button from 'react-bootstrap/Button'
const ItemCount = ({ initial, stock, onAdd, producto }) => {
  const [contador, setContador] = useState(initial)
  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }
  const disminuirContador = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }
  const agregarCarritoCantidad = () => {
    onAdd(contador)
  }
  return (
    <article className="contador">
      <h2 className="contador__nombre">{producto.nombre}</h2>
      <div className="contador__precio">
        <p>Precio: {producto.precio}</p>
      </div>
      <div className="contador__imagenes">
        <img src={producto.imagen} alt="imagenContador" />
        <p>Stock {stock}</p>
        <p>Cantidad : {contador}</p>
        <div>
          <Button onClick={disminuirContador} variant="success">-</Button>{' '}
          <Button onClick={aumentarContador} variant="success">+</Button>{' '}
        </div>
        <Button onClick={agregarCarritoCantidad} variant="success contador__imagenes">Confimar Cantidad</Button>{' '}
      </div>
    </article>
  )
}

export default ItemCount