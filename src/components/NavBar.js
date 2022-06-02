import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = ({ footer, nombre }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {!footer && <li><Link to="#" className="nav__list--link">{nombre} </Link></li>}
        <li><Link to="/" className="nav__list--link">inicio</Link></li>
        <li><Link to="/category/NVIDIA" className="nav__list--link">Placas De Video NVIDIA</Link></li>
        <li><Link to="/category/AMD" className="nav__list--link">Placas De Video AMD</Link></li>
        <CartWidget />
      </ul>
    </nav>
  )
}
export default NavBar