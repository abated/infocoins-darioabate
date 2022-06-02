import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProductos] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const productosCollection = collection(db, 'productos')
    const resultadoDelDoC = doc(productosCollection, id)
    const consulta = getDoc(resultadoDelDoC)
    consulta
      .then((resultado) => {
        const productoConId = resultado.data()
        productoConId.id = resultado.id
        setProductos(productoConId)
        setCargando(false)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {

      })
  }
    , [])

  if (cargando) {
    return (
      <p>Cargando ItemDetail</p>
    )
  } else {
    return (

      <div>
        <ItemDetail producto={producto} />
      </div>
    )
  }
}

export default ItemDetailContainer