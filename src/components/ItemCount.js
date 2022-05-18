import { useState,useEffect } from "react"
const ItemCount = ({initial,stock,onAdd}) => {
  
    useEffect(() => {
        console.log("hubo un efecto")
    })

    const [contador,setContador] = useState(initial)

//    const handleConfirmar = () => {
//     onClick(contador)
//    }

    // const resultado2 = useState(5)
    // const stock = resultado2[0]
    // const setStock = resultado2[1]


    // const resultado = useState(1)
    // const contador = resultado[0]
    // const setContador = resultado[1]
    
    const aumentarContador = () =>{
        if(contador < stock){
        setContador(contador + 1)
         // setStock(stock - 1)
    }
    }
   
    const disminuirContador = () =>{
        setContador(contador - 1)
        // setStock(stock + 1) 
    }
const agregarCarrito = () => {
    onAdd(contador)
}

  return (
      
    <div>
        
        <p>Stock {stock}</p>
        <p>Cantidad : {contador}</p>
<button onClick={aumentarContador} className="botonEstilo">+</button>
<button onClick={disminuirContador} className="botonEstilo">-</button>
<button onClick={agregarCarrito}>Agregar al carrito</button>



    </div>
  )
}

export default ItemCount