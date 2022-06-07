import { useContext, useState, useRef } from "react"
import { Link } from "react-router-dom"
import CarritoLista from "./CarritoLista"
import { contexto } from "./CartContext"
import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"


const Cart = () => {
  const [usuarios, setUsuarios] = useState([])
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const nameInput = useRef(null);
  const telInput = useRef(null);
  const emailInput = useRef(null);
  const handleClick = () => {
    if (nombre === '') {
      nameInput.current.focus()
      return false
    }
    if (telefono === '') {
      telInput.current.focus()
      return false
    } if (email === '') {
      emailInput.current.focus()
      return false
    }

    setUsuarios([...usuarios, {
      id: Math.random(),
      nombre: nombre,
      telefono: telefono,
      email: email
    }]
    )
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
      {carrito.length > 0 ? <div></div> : <Link to="/" className="nav__list--link">Comprar mas cosas </Link>}
      <CarritoLista carrito={carrito} eliminarProducto={eliminarProducto} />
      <div>
        {carrito.length > 0 ? <div>
          <div className="totalProductos"> Cantidad total de productos: {cantidad_total}  Precio Total: ${precio_total}
            <button onClick={vaciarProducto}>Vaciar el Carrito</button>
            <form >
              <h1>nombre</h1>
              <input type="text" placeholder="Nombre" ref={nameInput} onChange={handleChange} />
              <h1>Telefono</h1>
              <input type="number" placeholder="Telefono de contacto" ref={telInput} onChange={handleChange2} />
              <h1>Email</h1>
              <input type="email" placeholder="Correo Electronico" ref={emailInput} onChange={handleChange3} />
            </form>
            <button onClick={handleClick}> Confirmar Datos del Comprador</button></div> </div> : <div></div>}
        {usuarios.length && carrito.length > 0 ? <div className="finalizarCompra">
          <button className="finalizarCompra" onClick={guardarCompra}>Finalizar Compra </button></div> : <div></div>}
        {idCompra ? <h3>compra guardada con el id {idCompra}</h3> : ""}
      </div>

    </div>
  )
}

export default Cart