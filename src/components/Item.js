import { Link } from "react-router-dom"
const Item = ({producto}) => {
  return (
   <article>
       <h2>{producto.nombre}</h2>
       <p>{producto.precio}</p>
       <button>Detalles del producto</button>
       <Link to={`/item/${producto.id}`}>Ver mas</Link>
   </article>
  )
}

export default Item