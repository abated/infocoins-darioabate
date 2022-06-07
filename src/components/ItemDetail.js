import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import ItemCount from './ItemCount'
import { contexto } from "./CartContext"

const ItemDetail = ({ producto }) => {
  const [cantidadProductos, setCantidadProductos] = useState(0)
  const [mostrar, setMostrar] = useState(true)
  const { agregarProducto } = useContext(contexto)
  const onAdd = (cantidadProductos) => {
    setCantidadProductos(cantidadProductos)
    producto.cantidad = cantidadProductos
    setMostrar(false)
  }

  const clickAgregarProducto = () => {
    agregarProducto(producto)
  }
  useEffect(() => {
  }, [cantidadProductos])

  if (mostrar) {
    return (
      <div>
        <ItemCount initial={1} stock={10} onAdd={onAdd} producto={producto} />

      </div>
    )
  } else {
    return (
      <div>
        <div>
          <h2 className="contador__imagenes">{producto.nombre}</h2>
          <p className="contador__imagenes">Confirma cantidad: {cantidadProductos}  </p>
        </div>
        <Link to="/cart"> <button className="contador__imagenes" onClick={clickAgregarProducto}>Agregar al Carrito</button></Link>
      </div>
    )
  }
}

export default ItemDetail