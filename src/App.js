import Cart from "./components/Cart"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const App = () => {
    return <BrowserRouter>
    <Header/>
    <Main/>
    <Routes>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:category" element={<ItemListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
  </Routes>

    <Footer/>
    </BrowserRouter>
  }
  export default App