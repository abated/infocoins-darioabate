const Main = (props) => {
  console.log(props)
  // const children = props.children
  // const {children:children} = props
  const {children,nombre} = props
  return (
    
<main>
  
 main
 bienvenido {props.nombre} {nombre}
 {children}
 {props.children}

</main>
  )
}

export default Main