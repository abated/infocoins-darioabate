import { createContext, useState } from "react"

export const contexto = createContext();

const { Provider } = contexto;

const MicustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])


    const [cantidad_total, setCantidad_total] = useState(0)
    const [precio_total, setPrecio_total] = useState(0)

    const agregarProducto = (producto) => {
        if (estaEnCarrito(producto.id)) {
            const nuevoCarrito = [...carrito]
            for (const elemento of nuevoCarrito) {
                if (elemento.id === producto.id) {
                    elemento.cantidad = elemento.cantidad + producto.cantidad
                }
            }
            setCarrito(nuevoCarrito)
        } else {
            setCarrito([...carrito, producto])
        }
        setCantidad_total(cantidad_total + producto.cantidad)
        setPrecio_total(precio_total + (producto.cantidad * producto.precio))
    }
    const estaEnCarrito = (id) => {
        return carrito.find(elemento => elemento.id === id)
    }
    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(producto => producto.id != id))
        const productoEliminado = carrito.find(item => item.id === id);
        setCantidad_total(cantidad_total - productoEliminado.cantidad)
        setPrecio_total(precio_total - (productoEliminado.cantidad * productoEliminado.precio))
    }
    const vaciarProducto = () => {
        setCarrito([])
        setCantidad_total(0)
        setPrecio_total(0)
    }
    const valorDelContexto = {
        cantidad_total: cantidad_total,
        precio_total: precio_total,
        carrito: carrito,
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