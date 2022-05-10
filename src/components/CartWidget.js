import { Link } from "react-router-dom"
import React from 'react'

const CartWidget = () => {
  return (
    <Link to="/cart">    <span class="material-icons carrito">
    add_shopping_cart
    </span></Link>

  )
}

export default CartWidget