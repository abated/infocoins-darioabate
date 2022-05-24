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
      const resultadoDelDoC = doc(productosCollection,id)
      const consulta = getDoc(resultadoDelDoC)
      consulta
      .then((resultado) => {
        console.log(resultado.data)
        setProductos(resultado.data())
        setCargando(false)
      })
      .catch((error) => {
        console.log(error)
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
            <ItemDetail producto={producto}/>
            
           
            
            </div>
        )
      }
    }

export default ItemDetailContainer