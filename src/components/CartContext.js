import {createContext,useState} from "react"

export const contexto = createContext();

const { Provider } = contexto;

const MicustomProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    

    const [cantidad_total,setCantidad_total] = useState(0)
    const [precio_total,setPrecio_total] = useState(0)

const agregarProducto = (cantidadProductos,producto) => {
    console.log(producto.id)
    console.log(cantidadProductos)
   
    if(estaEnCarrito(producto.id)){
        console.log("el producto ya esta en el carrito")
     

    }else {
        setCantidad_total(cantidad_total + cantidadProductos)
        setPrecio_total(precio_total + producto.precio)
        setCarrito([...carrito,producto])
        
       
    }
 
   
}


console.log(precio_total)
console.log(cantidad_total)
console.log([carrito[0]])
console.log([carrito[1]])
console.log([carrito[2]])

const estaEnCarrito = (id) => {
    return carrito.find(elemento => elemento.id == id)
  

}
const eliminarProducto = (id) => {
    setCarrito([carrito].filter(producto=> producto.id !== id))
}
const vaciarProducto = () =>{
    setCarrito([])

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