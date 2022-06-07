import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const { category } = useParams()
  useEffect(() => {
    const productosCollection = collection(db, 'productos')
    if (category === undefined) {
      const consulta = getDocs(productosCollection)
      consulta
        .then((resultado) => {
          const productos = resultado.docs.map(doc => {
            const productoConId = doc.data()
            productoConId.id = doc.id
            return productoConId
          }
          )
          setProductos(productos)
          setCargando(false)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
        })

    } else {
      const queryDeFirestore = query(productosCollection, where("category", "==", category))
      const consulta = getDocs(queryDeFirestore)
      consulta
        .then((resultado) => {
          const productos = resultado.docs.map(doc => {
            const productoConId = doc.data()
            productoConId.id = doc.id
            return productoConId
          })
          setProductos(productos)
          setCargando(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
    , [category])
  return (
    <>
      {cargando ? <p>Cargando</p> : <ItemList productos={productos} />}
    </>
  )
}
export default ItemListContainer