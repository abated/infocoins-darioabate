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
  * Funcion onAdd trae la cantidad selecionada por el usuario desde el ItemCount. 
  * Funcion AgregarProducto se pasa por contexto hacia el Cart

  2. En el componente ItemDetailContainer:
  * Funcion useParams() es utilizada para recuperar el ID que viene por parametro de la url.

  3. En el componente ItemListContainer:
 * Funcion UseParams() se utilizada para recuperar la categoria que viene por parametro en la url.
 * import { collection, getDoc, doc } from "firebase/firestore" Trae de la base de datos los productos para el container.

 4. En el componente CartContext:
 * la funcion agregarProducto recibe por parametro un producto y se guarda en un array dentro del componente

 5. Fisebase.js
 * const firebaseConfig :  Configuracion de firebase
 *  inicializacion de Firebase : const app = initializeApp(firebaseConfig);


6. En el componente NavBar:
If ternario si footer es true o false retorna "nombre"


# Video 
* [Video Proyecto Final](https://drive.google.com/file/d/1KpHxjgINIX1xlElWVZ1FXSQxkydl3zOI/view?usp=sharing)








