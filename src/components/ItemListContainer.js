import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
  const onAdd = () =>{
        
  }
  return (
  
    <div>
      <p> {greeting}</p>
      
     <ItemCount stock={6} initial={0} onAdd={onAdd}/>
      </div>
  )
}

export default ItemListContainer