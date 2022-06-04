import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CarritoLista from "./CarritoLista"
import { contexto } from "../CartContext"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"


const Cart = ({ }) => {
  const [usuarios, setUsuarios] = useState([])
  const [nombre , setNombre] = useState("")
  const [telefono , setTelefono] = useState("")
  const [email , setEmail] = useState("")
  const handleClick = () => {
    setUsuarios([...usuarios,{
      id : Math.random(),
      nombre : nombre,
      telefono : telefono
    }])
  }

  const handleChange = (e) => {
    setNombre(e.target.value)
   
  }
  const handleChange2 = (e) => {
    setTelefono(e.target.value)
  }
  const handleChange3 = (e) => {
    setEmail(e.target.value)
  }

  const { precio_total, carrito, vaciarProducto, cantidad_total, eliminarProducto } = useContext(contexto)
  const [idCompra, setIdCompra] = useState("")
  const guardarCompra = () => {
    const ordenesCollection = collection(db, "ordenes")
    const orden = {
      buyer: {
        Nombre: nombre,
        Telefono: telefono,
        Email: email
      },
      items: carrito,
      date: "",
      total: precio_total
    }
    const consulta = addDoc(ordenesCollection, orden)
    consulta
      .then((resultado) => {
        setIdCompra(resultado.id)
        vaciarProducto(setIdCompra)

      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>

  <h1>nombre</h1>
      <input type="text" onChange={handleChange}/>

      <h1>telefono</h1>
  <input type="text" onChange={handleChange2}/>
  <h1>Email</h1>
  <input type="text" onChange={handleChange3}/>

<button onClick={handleClick}>enviar datos</button>



      {carrito.length > 0 ? <div></div> : <Link to="/" className="nav__list--link">Comprar mas cosas </Link>}
      <CarritoLista carrito={carrito} eliminarProducto={eliminarProducto} />
      <div>
        {carrito.length > 0 ? <div>
       <div className="totalProductos"> Cantidad Total: {cantidad_total}  PrecioTotal: {precio_total} 
       <button onClick={guardarCompra}>Finalizar Compra</button><button onClick={vaciarProducto}>Vaciar el Carrito</button></div> </div> : <div></div> }
        {idCompra ? <h3>compra guardada con el id {idCompra}</h3> : ""}
      </div>
    </div>
  )
}

export default Cart