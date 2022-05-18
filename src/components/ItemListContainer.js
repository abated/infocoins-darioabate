import ItemList from "./ItemList"
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDoc, doc, getDocs, addDoc,query } from "firebase/firestore"



const ItemListContainer = () => {
 const[cargando,setCargando] = useState(true)
 const [productos,setProductos] = useState([])
const {category} = useParams()


  useEffect(() =>{

 

    


    
    if(category == undefined){

    
      const productosCollection = collection(db,'productos')
      const consulta = getDocs(productosCollection)
      console.log(consulta)
      consulta
      .then((resultado) => {
        // console.log(resultado.docs)
        const productos =  resultado.docs.map(doc=> {
          const productoConId = doc.data()
          productoConId.id = doc.id
          return productoConId
        }
  
        )
        setProductos(productos)
        setCargando(false)
      })
      .catch((error) => {
      })
      .finally(() =>{
  
      })

  }else{
    
    const productosCollection = collection(db,'productos')
    const consulta = getDocs(productosCollection)
    console.log(consulta)
    consulta
    .then((resultado) => {
      // console.log(resultado.docs)
      const productos =  resultado.docs.map(doc=> {
        const productoConId = doc.data()
        productoConId.id = doc.id
        return productoConId
      }

      )
      setProductos(productos.filter((producto)=>{return producto.category == category}))
      setCargando(false)
    })
    .catch((error) => {
    })
    .finally(() =>{

    })
}
}
,[category])

  
  return (
    <>
  {cargando ?  <p>Cargando</p> : <ItemList productos={productos}/> }
    
      
    </>
      
    
  )

  
}

export default ItemListContainer