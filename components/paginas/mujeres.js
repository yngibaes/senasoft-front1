import React from "react"; //siempre se importa react
import Header from "../header"; // Importamos el header que vamos a utilizar 
import Footer1 from "./footer1"; // Se debe importar el footer que vamos a utilizar 
function Mujeres(){ // creamos una funcion 
    return( // agrgamos el return para que me retones los datos que van dentro del mismo 
    <div>
<Header //llamamos al header que exportamos anteriormente
titulo="Manzanas de Cuidado" // Se utilizan los props que estsamos creando en la pagian del header y se ponen el texto que quieron que nos aparecen en la pagina 
inicio="Propuesta"  
admin="Cerrar Sesion"
/>

<Footer1  // llamamos el footer que se importo anteriormente
tel="Telefono" // Se utilizan los props que estsamos creando en la pagian del footer y se ponen el texto que quieron que nos aparecen en la pagina 
ubi="Ubicacion"
hora="Horarios"
tel1="3220541865
(061)9295426"
ubi1="Calle 105 ·20-42- San Carlos"
hora1="Lunes-Viernes 8:00am - 7:00pm"
/>

</div>
    )   
}
export default Mujeres  // importamos la funcion para poder importarla en otro paquete