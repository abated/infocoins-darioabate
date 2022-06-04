# Descripcion general del proyecto
### InfoCoins

Es un E-commerce para informacion y venta de placas de video para mineria de criptomonedas. El proyecto filtra por categorias entre AMD Y NVIDIA.

# Descripcion de herramientas utilizadas

1. "react-bootstrap": "^2.4.0"

     Se utiliza especificamente para crear un Carrusel.

2. "sass": "^1.50.0"

    Se utiliza para tener un codigo mas limpio y optimo en la parte de estilos.

3. "firebase": "^9.8.1"

    Se utiliza como base de datos donde podemos agregar mas productos y recibir ordenes de compra.

# Pasos de uso/Instalacion 

* Descargar  el repositorio de GitHub y descomprimir el archivo [Link](https://github.com/abated/infocoins-darioabate/archive/refs/heads/master.zip)

* Instalar NodeJs desde este [Link](https://nodejs.org/es/)
* Una vez instalado en la consola de comandos(CMD) nos ubicamos en la carpeta del proyecto y ejecutamos los siguientes codigos: 
 1. "npm install create-react-app" y esperamos que termine la instalacion
 2. "npm install react-bootstrap bootstrap"
 * Como ultimo paso ejecutamos "npm start" y el proyecto se iniciara.

 # Comentarios adicionales de componentes/funciones-metodos

   1. En el componente ItemDetail:
  * Funcion onAdd trae la cantidad selecionada por el usuario 
  * Funcion AgregarProducto se pasa por contexto hacia el Cart

  2. En el componente ItemDetailContainer:
  * Funcion useParams() Se utilizada para filtrar por ID los items en la base de datos(firebase).

  3. En el componente ItemListContainer:
 * Funciion UseParams() se utilizada para filtrar por categorias con los ID de parametros.
 * import { collection, getDoc, doc } from "firebase/firestore" Trae de la base de datos los productos para el container.

 4. En el componente CartContext:
 * la funcion agregarProducto se le pasa el parametro del ItemDetail(producto) luego se hace un if para realizar logica de agregado de producto al carrito.

 5. Fisebase.js
 * const firebaseConfig :  Configuracion de firebase
 *  Initialize Firebase
const app = initializeApp(firebaseConfig);

6. En el componente NavBar:
If alternario si footer es true o false retorna "nombre"


# Video 
* [Video Proyecto Final](https://drive.google.com/drive/folders/1Hx0jycx0dQFjgDqdgfhspsO6G_oeEHYh?usp=sharing)








