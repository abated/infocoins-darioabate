import { Link } from "react-router-dom"
import {useState,useEffect,useContext} from 'react'
import ItemCount from './ItemCount'
import { contexto } from "./CartContext"
import { db } from "./firebase"


const ItemDetail = ({item}) => {

  const [cantidadProductos,setCantidadProductos] = useState(0)
  const [mostrar,setMostrar] = useState(true)
  const {agregarProducto} = useContext(contexto)

  const onAdd = (cantidadProductos) => {
    setCantidadProductos(cantidadProductos)
    console.log(cantidadProductos)
    agregarProducto(cantidadProductos,item)
    setMostrar(false)
  }
  const Click = () => {
    agregarProducto(cantidadProductos,item)
   } 
  useEffect(() =>{
  },[cantidadProductos])
  

if(mostrar) {
  return (
    <div>
      
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
     
    <p>cantidad: {cantidadProductos}</p>
    </div>
  )
}else {
  return(
    <div>
     <Link to="/cart"> <button onClick={Click}>Terminar mi compra</button></Link> 
          <p>cantidad: {cantidadProductos}  </p>

          
          
    </div>
  )
}}

export default ItemDetail