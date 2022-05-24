import {useContext,useState} from "react"
import { Link } from "react-router-dom"
import CarritoLista from "./CarritoLista"
import { contexto } from "./CartContext"
import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"


const Cart = ({}) => {
    const {precio_total,carrito,vaciarProducto,cantidad_total,eliminarProducto} = useContext(contexto)
    const[idCompra,setIdCompra] = useState("")
const guardarCompra = () => {
  const ordenesCollection = collection(db,"ordenes")
  const orden = {
    buyer : {
      name:"Dario",
      phone:"153223232",
      email:"dario@hotmail.com"
    },
    items: carrito,
    date: "",
    total: precio_total
  }
  const consulta = addDoc(ordenesCollection,orden)

  consulta
  .then((resultado)=>{
    setIdCompra(resultado.id)
    vaciarProducto(setIdCompra)
    
  })
  .catch((error)=>{
console.log(error)
  })
}

    
  return (
    <div> 


{carrito.length > 0 ? <div></div>:<Link to="/" className="nav__list--link">Comprar mas cosas </Link>}
<CarritoLista carrito={carrito} eliminarProducto={eliminarProducto} />
   <div>{cantidad_total} {precio_total}
   <p><button onClick={vaciarProducto}>Vaciar el Carrito</button></p>
   {carrito.length > 0 ? <p><button onClick={guardarCompra}>Finalizar Compra</button></p> : <div></div> }
   {idCompra ? <h3>compra guardada con el id {idCompra}</h3> : ""}
   

   </div>

       </div>
  )
}

export default Cart