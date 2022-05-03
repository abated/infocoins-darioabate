import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"


const item = 
    {
      titulo:"nvidia3060",
      precio:"400$",
      descripcion:"Producto apto para minar criptomonedas,juegos etc.."
      
    }

  
const ItemDetailContainer = () => {

    const [cargando,setCargando] = useState(true)
    const [productos,setProductos] = useState({})

    useEffect(() =>{
        const pedido = new Promise((res)=>{
          setTimeout(()=>{
            res(item)
          },2000 )
        })
    
      pedido.then(() =>{
        console.log("salio todo bien")
        setCargando(false)
        setProductos(item)
      })
    
      },[])

      if(cargando){
        return(
          <p>Cargando ItemDetail</p>
        )
      }else{
        return (
      
          <div>
            <ItemDetail item={productos}/>
            
            </div>
        )
      }
    }

export default ItemDetailContainer