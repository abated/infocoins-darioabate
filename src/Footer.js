import NavBar from "./components/NavBar"
const Footer = () => {
    return (<footer>
        <div>
            <h2>Contacto</h2>
            <h3>Email: dario.infoCoins@gmail.com</h3>
            <h3>Tel: 1523323222</h3>
        </div>
        <NavBar footer={true} />
    </footer>
    )
}
export default Footer