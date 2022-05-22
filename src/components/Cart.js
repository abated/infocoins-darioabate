import {useContext,useState} from "react"
import { Link } from "react-router-dom"
import CarritoLista from "./CarritoLista"
import { contexto } from "./CartContext"
import { db } from "./firebase"

const Cart = ({}) => {
//   const [change,setChange] = useState(true)
// const  Click = () => {
//   setChange(!change)
// }




    const {precio_total,carrito,vaciarProducto,cantidad_total,eliminarProducto} = useContext(contexto)

    
  return (
    <div> 
{/* {carrito.map(function(producto){ 
return <div>
  <div>

  
 <h3>{producto.nombre}</h3>
 <h3>{producto.cantidad}</h3>
 <h3>{producto.id}</h3>

 <button onClick={eliminarProducto}>Eliminar Producto</button>
</div>
</div>

  })
  
  } */}

{carrito.length > 0 ? <div></div>:<Link to="/" className="nav__list--link">Comprar mas cosas </Link>}
<CarritoLista carrito={carrito} eliminarProducto={eliminarProducto} />
   <div>{cantidad_total} {precio_total}
   <p><button onClick={vaciarProducto}>Vaciar el Carrito</button></p>
   
   
   </div>

{/* <button onClick={Click}>Boton</button> */}
{/* <p className={change ? "rojo":"negro"}>Hola cambio de color</p>  */}

       </div>
  )
}

export default Cart