import {useContext,useState} from "react"
import { contexto } from "./CartContext"
import { db } from "./firebase"


const Cart = () => {
//   const [change,setChange] = useState(true)
// const  Click = () => {
//   setChange(!change)
// }




    const {precio_total,carrito,vaciarCarrito,cantidad_total} = useContext(contexto)
  return (
    <div>
 

      
      
        <h1>producto 1 :</h1>
  
{/* <button onClick={Click}>Boton</button> */}
{/* <p className={change ? "rojo":"negro"}>Hola cambio de color</p>  */}

       </div>
  )
}

export default Cart