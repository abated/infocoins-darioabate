import CarritoItem from "./CarritoItem"

const CarritoLista = ({carrito}) => {
  return (
   <ul>
        
       {carrito.map(producto=>{
           return <CarritoItem key={producto.id} producto={producto} />
       })}
       
   </ul>
  )
}

export default CarritoLista