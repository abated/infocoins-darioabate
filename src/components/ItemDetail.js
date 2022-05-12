import { Link } from "react-router-dom"
import {useState,useEffect,useContext} from 'react'
import ItemCount from './ItemCount'
import { contexto } from "./CartContext"
const ItemDetail = ({item}) => {

  const [cantidadProductos,setCantidadProductos] = useState(0)
  const [mostrar,setMostrar] = useState(true)
  const {agregarProducto} = useContext(contexto)
  const onAdd = (cantidad) => {
    setCantidadProductos(cantidad)
    agregarProducto(item,cantidadProductos)
    setMostrar(false)
  }
  useEffect(() =>{
  },[cantidadProductos])

if(mostrar) {
  return (
    <div>
    <p>{item.category}</p>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    <p>cantidad: {cantidadProductos}</p>
    </div>
  )
}else {
  return(
    <div>
     <Link to="/cart"> <button>Terminar mi compra</button></Link> 
          <p>cantidad: {cantidadProductos} </p>
    </div>
  )
}}

export default ItemDetail