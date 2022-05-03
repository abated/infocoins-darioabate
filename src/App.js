import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = () => {
    return <>
    <Header/>
    <Main/> nombre="Horacio"
      <p>Hola mundo</p>
      <ItemListContainer greeting="Bienvenidos a InfoCoins"/>
      <ItemDetailContainer/>
    <Footer/>
    </>
  }
  export default App