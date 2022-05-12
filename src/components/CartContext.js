import {createContext,useState} from "react"

export const contexto = createContext();

const { Provider } = contexto;

const MicustomProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    

    const [cantidad_total,setCantidad_total] = useState(0)
    const [precio_total,setPrecio_total] = useState(0)

const agregarProducto = (nombre,cantidad) => {
    if(estaEnCarrito(nombre.id)){
        const nuevoCarrito = [carrito];
        for (const element of nuevoCarrito ){
            if(element.nombre.id == nombre.id ){
                nombre.cantidad = nombre.cantidad + cantidad
            }
        }
        setCarrito(nuevoCarrito)
    }else{
        setCarrito([
            carrito,
            {
                nombre:nombre,
                cantidad:cantidad
            }
        ])
    }

}

const eliminarProducto = (id) => {

}
const vaciarProducto = () =>{
    setCarrito([])

}
const estaEnCarrito = (id) => {
    return carrito.find(elemento => elemento.id === id)

}

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