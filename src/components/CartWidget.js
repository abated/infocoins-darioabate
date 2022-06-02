import { Link } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "./CartContext"

const CartWidget = () => {

  const { cantidad_total, precio_total } = useContext(contexto)

  return (
    <Link to="/cart">    <span className="material-icons carrito">
      add_shopping_cart
    </span>
      {cantidad_total}
    </Link>

  )
}

export default CartWidget