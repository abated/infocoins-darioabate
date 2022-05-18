import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDoc, doc, getDocs, addDoc,query } from "firebase/firestore"


  

const ItemDetailContainer = () => {
    const [cargando,setCargando] = useState(true)
    const [producto,setProductos] = useState({})
    const {id} = useParams()
    useEffect(() =>{
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
        setProductos(productos.find((producto)=>producto.id == id))
        setCargando(false)
      })
      .catch((error) => {
      })
      .finally(() =>{

      })
  }
  
  ,[])

      if(cargando){
        return(
          <p>Cargando ItemDetail</p>
        )
      }else{
        return (
      
          <div>
            <ItemDetail item={producto}/>
            
           
            
            </div>
        )
      }
    }

export default ItemDetailContainer