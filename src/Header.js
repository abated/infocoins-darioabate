import NavBar from "./components/NavBar"
import { Link } from "react-router-dom"
const Header = () => {
    return    (  <header className="header">
    <h1><Link to="category/inicio" className="nav__list--link">InfoCoins</Link></h1>
<NavBar nombre="Pedro"
 apellido="Gomez"
 footer={false}
 />
</header>
)
}

export default Header