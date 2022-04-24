import { useState , useEffect } from "react"

const Presentacional = (props) => {

    const resultado = useState(0)
    const contador = resultado[0]
    const setContador = resultado[1]


const handleClick = () =>{
setContador(contador + 1)
    console.log('Click');
}

  return (
    <div>
        <p>Contador Actual : {contador}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Presentacional