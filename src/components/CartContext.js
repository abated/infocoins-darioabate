import {createContext,useState} from "react"

export const contexto = createContext();

const { Provider } = contexto;

const MicustomProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])

    const [cantidad_total,setCantidad_total] = useState(1)
    const [precio_total,setPrecio_total] = useState(1)

const agregarProducto = (cantidadProductos,item) => {
    console.log(item)
   
    if(estaEnCarrito(item.id)){
        console.log("el producto ya esta en el carrito")
    }else {
        setCantidad_total(cantidadProductos + item.cantidad)
        setPrecio_total(precio_total + item.precio)
        setCarrito([...carrito,item])
       
    }
 
   
}
console.log(cantidad_total)
const eliminarProducto = (id) => {
    const nuevoCarrito = [carrito].map(element => element.id !== id);
    setCarrito(nuevoCarrito);
}
const vaciarProducto = () =>{
    setCarrito([])

}
const estaEnCarrito = (id) => {
    return carrito.find(elemento => elemento.id === id)

}
console.log("Cambio de estado")

    const valorDelContexto = {
        cantidad_total : cantidad_total,
        precio_total: precio_total,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
        vaciarProducto,
        estaEnCarrito
    }
  return (
   <Provider value={valorDelContexto}>
       {children}
   </Provider>
  )
}

export default MicustomProvider