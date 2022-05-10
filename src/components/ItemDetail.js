import { Link } from "react-router-dom"
import {useState,useEffect} from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({item}) => {

  const [cantidadProductos,setCantidadProductos] = useState('')
  const [mostrar,setMostrar] = useState(true)

  const onAdd = (e) => {
    setCantidadProductos(e)
    setMostrar(false)
  }
  useEffect(() =>{
  },[cantidadProductos])

if(mostrar) {
  return (
    <div>
    <p>{item.category}</p>
      <ItemCount initial={0} stock={5} onAdd={onAdd}/>
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