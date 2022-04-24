import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer"


const App = () => {
    return <>
    <Header/>
    <ItemListContainer greeting="Bienvenidos a InfoCoins"/>
    <Main nombre="Horacio">
      <p>Hola mundo</p>
    </Main>
    <Footer/>
    </>
  }

  export default App