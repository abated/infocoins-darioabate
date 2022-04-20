import CartWidget from "./CartWidget"

const NavBar = (props) => {
  if(props.footer){
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li><a href="" className="nav__list--link">Inicio</a></li>
          <li><a href="" className="nav__list--link">Mineria</a></li>
          <li><a href="" className="nav__list--link">Retabilidad</a></li>
        </ul> 
  </nav>
    )
  }else{return(
  <nav className="nav">
  <ul className="nav__list">
  <CartWidget/>
  <li><a href="" className="nav__list--link">{props.nombre} {props.apellido}</a></li>
    <li><a href="" className="nav__list--link">Inicio</a></li>
    <li><a href="" className="nav__list--link">Mineria</a></li>
    <li><a href="" className="nav__list--link">Retabilidad</a></li>
  </ul> 
</nav>)
 }
}

export default NavBar