import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
const Header = () => {
    return    (  <header className="header">
    <h1 className="header__titulo">InfoCoins</h1>
<NavBar nombre="Pedro"
 apellido="Gomez"
 footer={false}
 />
 <ItemListContainer/>
</header>
)
}

export default Header