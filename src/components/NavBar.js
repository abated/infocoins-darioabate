import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = (props) => {
  if(props.footer){
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li><Link to="/category/inicio" className="nav__list--link">inicio</Link></li>
          <li><Link to="/category/mineria" className="nav__list--link">mineria</Link></li>
          <li><Link to="/category/rentabilidad" className="nav__list--link">rentabilidad</Link></li>
        </ul> 
  </nav>
    )
  }else{return(
  <nav className="nav">
  <ul className="nav__list">
  <CartWidget/>
  <li><a to="" className="nav__list--link">{props.nombre} {props.apellido}</a></li>
    <li><Link to="/category/inicio" className="nav__list--link">inicio</Link></li>
    <li><Link to="/category/mineria" className="nav__list--link">mineria</Link></li>
    <li><Link to="/category/rentabilidad" className="nav__list--link">rentabilidad</Link></li>
  </ul> 
</nav>)
 }
}

export default NavBar