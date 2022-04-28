const Item = ({producto}) => {
  return (
   <article>
       <h2>{producto.nombre}</h2>
       <p>{producto.precio}</p>
       <button>Detalles del producto</button>
   </article>
  )
}

export default Item