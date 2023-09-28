import React from "react";//Siempre se importa react
import Header from "../header.js";// Importamos el header que vamos a utilizar 
import B_inicio from "../b_inicio.js";// Importamos la pagina de inicio 
import Footer1 from "./footer1.js";// Importamos la pagina de footer 
function Inicio(){// creamos una funcion 
    return(// agrgamos el return para que me retones los datos que van dentro del mismo 
    <div>
<Header //llamamos al header que exportamos anteriormente
titulo="Manzanas de Cuidado"// Se utilizan los props que estsamos creando en la pagian del header y se ponen el texto que quieron que nos aparecen en la pagina 
inicio="Inicio"
admin="Iniciar Sesion"
cuidadoras="Sobre Nosotros "
sobre="Servicios"
/>
<B_inicio  // llamamos el body del inicio  que se importo anteriormente

/>
<Footer1 // llamamos el footer que queremos utilizar, teniendo en cuenta lo importamos anteriormente

/>

</div>
    )   
}
export default Inicio // importamos la funcion para poder importarla en otro paquete