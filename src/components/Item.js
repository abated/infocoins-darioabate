import { Link } from "react-router-dom"
const Item = ({producto}) => {
  return (
   <article>
       <h2>{producto.nombre}</h2>
       <p>{producto.precio} {producto.id}</p>

       
       <Link to={`/item/${producto.id}`}>Ver mas</Link>
   </article>
  )
}

export default Item