import React from "react"; //Siempre se debe importar react
import Footer from "../b_footer.js"; //Importamos el estilo de css
function Footer1(){ // Generamos una funcion 
    return( // agregamos el return para poder retornar los datos que van dentro de el 
    <div>

<Footer // Llamamos el footer que importamos anteriormente
tel="Telefono" //Agregamos datos que queremos que aparezcan en nuestra pagina
ubi="Ubicacion" // se llaman los props que utilizan en footer, esto para que la pagina sea reactiva y asi hacemos con el resto de lineas de codigo 
hora="Horarios"
tel1="3220541865
(061)9295426"
ubi1="Calle 105 ·20-42- San Carlos"
hora1="Lunes-Viernes 8:00am - 7:00pm"
/>

</div>
    )   
}
export default Footer1 //se exporta la funcion para poder importarla en otra pagina