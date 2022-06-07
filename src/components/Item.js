import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

const Item = ({ producto }) => {
  return (
    <article className="card">
      <h2 className="card__nombre">{producto.nombre}</h2>
      <div className="card__precio">
        <p> Id del producto : {producto.id} </p>
        <p>Precio: {producto.precio}</p>
      </div>
      <div className="card__imagen">
        <img className="card__imagenes" src={producto.imagen} alt="imagenesCard" />
        <div className="card__texto">
          <li>Marca: {producto.category}</li>
          <li>Hashrate : {producto.hashrate}</li>
          <li>Apta para mineria</li>
        </div>
      </div>
      <Button variant="info"><Link to={`/item/${producto.id}`}>Ver mas</Link></Button>{' '}
    </article>
  )
}

export default Item