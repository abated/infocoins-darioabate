const ItemDetail = ({item}) => {
  return (
    <div>
      <p>La placa  {item.titulo} {item.descripcion} </p>
     
      <img src="https://tse3.mm.bing.net/th/id/OIP.a_tvYRN9B67WpKy9O_oPwQHaE6?pid=ImgDet&rs=1" alt="card"/>
      <p>a un precio de {item.precio}</p>
    </div>
  )
}

export default ItemDetail