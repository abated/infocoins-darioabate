import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer"


const App = (greeting) => {
    return <>
    <Header/>
    <Main nombre="Horacio">
      <p>Hola mundo</p>
    <ItemListContainer/>
    </Main>
    <Footer/>
    </>
  }

  export default App