import React from "react";//siempre se importa react
import B_serv from "../b_servicio";// Importamos la pagina de servicio 
import Header from "../header.js"; // Importamos el header que vamos a utilizar 
import Footer from "../b_footer"; // Se debe importar el footer que vamos a utilizar 
 
function servicio(){ // creamos una funcion 
    return( // agrgamos el return para que me retones los datos que van dentro del mismo 
    <div>
<Header //llamamos al header que exportamos anteriormente
titulo="Manzanas de Cuidado"  // Se utilizan los props que estsamos creando en la pagian del header y se ponen el texto que quieron que nos aparecen en la pagina 
inicio="Inicio"
admin="Iniciar Sesion"
cuidadoras="Sobre nosotros"
sobre="Servicios"
/>
<B_serv // llamamos el body del servicio que se importo anteriormnte
titulo="SERVICIOS" // realizamos lo mismo que lrealizamos anteriormente
descr="Somos espacios de la ciudad en los que brindamos  tiempo de calidad a
las mujeres y a sus familias, donde pueden estudiar, aprender, ejercitarse entre muchas otras actividades, todos los servicios son totalmente gratuitos¡QUE ESPERAS PARA SER PARTE DE NOSOTROS!"
ser1="ASESORIA JURIDICA"
ser2="LAVANDERIA COMUNITARIA "
ser3="ASESORIA PSICOLOGICA"
ser4="EMPRENDER"/>
<Footer // llamamos el footer que queremos utilizar, teniendo en cuenta que importamos anteriormente
tel="Telefono" //llamamos los props que usamos en la pagina de footer
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
export default servicio // importamos la funcion para poder importarla en otro paquete