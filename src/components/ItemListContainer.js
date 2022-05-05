import ItemList from "./ItemList"
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom"

const productosIniciales = [
  {
    id:1,
    nombre:"Nvidia 3060",
    precio:"400$"
  },
  {
    id:2,
    nombre:"Nvidia 3090",
    precio:"900$"
    
  },
  {
    id:3,
    nombre:"Amd  Radean 5700",
    precio:"600$"
  }
]

const ItemListContainer = () => {
 const[cargando,setCargando] = useState(true)
 const [productos,setProductos] = useState([])
const {category} = useParams()


  useEffect(() =>{
    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },2000 )

      
  
    })

  pedido.then(() =>{
    console.log("salio todo bien")
    setCargando(false)
    setProductos(productosIniciales)
  })

  },[category])

  if(cargando){
    return(
      <p>Cargando</p>
    )
  }else{
    return (
  
      <div>
        <ItemList productos={productos}/>
        
        </div>
    )
  }
}

export default ItemListContainer