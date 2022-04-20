import NavBar from "./components/NavBar"
const Footer = () => {
    const edad = 30
    const footer = true
    return    (  <footer>
        <p>Contacto</p>
        <NavBar nombre="Horacio"
        apellido="Gutierrez"
        edad={edad}
        footer={footer}
          
          />
    </footer>
    
    )
}
export default Footer