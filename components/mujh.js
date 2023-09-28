import React, { useState } from "react";
import Headermuj from "./header_muj";

import Footer1 from "./paginas/footer1";
function Headermu(){// creamos una funcion 
    return( // agrgamos el return para que me retones los datos que van dentro del mismo 
    <div> 

<Headermuj/>
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
export default Headermu // importamos la funcion para poder importarla en otro paquete