import React from "react";//Siempre se importa react
import Header from "../header.js";// Importamos el header que vamos a utilizar 
import B_contac from "../b_contact.js";// Importamos la pagina de contacto 
import Footer1 from "./footer1.js";// Se debe importar el footer que vamos a utilizar 
function Contacto(){// creamos una funcion 
    return( // agrgamos el return para que me retones los datos que van dentro del mismo 
    <div> 
<Header //llamamos al header que exportamos anteriormente
titulo="Manzanas de Cuidado" // Se utilizan los props que estsamos creando en la pagian del header y se ponen el texto que quieron que nos aparecen en la pagina 
inicio="Inicio" // realizamos lo mismo que el codigo anterior, el props se usa para que sea mas reactivo el codigo
admin="Iniciar Sesion"
cuidadoras="Sobre nosotros"
sobre="Servicios"
/>
<B_contac // llamamos el body del contacto que se importo anteriormnte
titulo="SOBRE NOSOTROS" // realizamos lo mismo que la linea de codigo 10
contac1="Estamos ubicados en 10 municipios"
contac2="Hemos trabajado por 12 años"
contac3="Contamos con 108 clientes"
contac4="Contamos con 30 manzanas "
/>
<Footer1 // llamamos el footer que queremos utilizar, teniendo en cuenta que importamos en la lina de codigo 4
tel="Telefono" //llamamos los props que usamos en la pagina de footer
hora="Horarios"
tel1="3220541865
(061)9295426"
ubi1="Calle 105 ·20-42- San Carlos"
hora1="Lunes-Viernes 8:00am - 7:00pm"
/>

</div>
    )   
}
export default Contacto // importamos la funcion para poder importarla en otro paquete