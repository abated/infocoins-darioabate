import ItemList from "./ItemList"
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom"

const productosIniciales = [
  {
    id:1,
    nombre:"Nvidia 3060",
    precio:"400$",
    category:"rentabilidad"
  },
  {
    id:2,
    nombre:"Nvidia 3090",
    precio:"900$",
    category:"mineria"

    
  },
  {
    id:3,
    nombre:"Amd  Radean 5700",
    precio:"600$",
    category:"mineria"
  }
]


const ItemListContainer = () => {
 const[cargando,setCargando] = useState(true)
 const [productos,setProductos] = useState([])
const {category} = useParams()


  useEffect(() =>{
    if(category == undefined){

    
    const pedido = new Promise((res)=>{
      console.log("Cargando")
      setTimeout(()=>{
        res(productosIniciales)
      },2000 )
    })

  pedido.then(() =>{
    console.log("salio todo bien")
    setCargando(false)
    setProductos(productosIniciales)
  })

  }else{
    const pedido = new Promise((res)=>{
      console.log("Cargando")
      setTimeout(()=>{
        res(productosIniciales)
      },2000 )
    })
.then(() =>{
    setCargando(false)
    setProductos(productosIniciales.filter((producto)=>{return producto.category == category}))
  })
  }
}
  ,[category])
  


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