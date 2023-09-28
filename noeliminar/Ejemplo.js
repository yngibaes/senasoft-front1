import React from "react";
import Saludo from "../Saludo.js";
  
class Ejemplo extends React.Component{
    //Declaramos el constructor

    //Con babel no necesitamos constructor
    state={//estado inicial
            data:[{//objeto tipo json que suster los componentes
                id:1,
                titulo:"Guias tecnicas",
                descripcion:"Aprende sobre el maravilloso camino del trabajo y calistemia",
                leftColor:"#A74CF2",
                rightcolor:"#617BFB",
                //imagen:"https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170700087/81190048-peque%C3%B1as-flores-delicadas-pintura-ilustraci%C3%B3n-vectorial-dibujar.jpg"
            }
            /*,{
                id:2,
                titulo:"Temas de entrenamiento",
                descripcion:"Aprende sobre tecnica",
                leftColor:"#17EAD9",
                rightcolor:"#6078EA",
                //imagen:"https://thumbs.dreamstime.com/z/peque%C3%B1as-estrellas-43677476.jpg"
            },*/
           /* {
                id:3,
                titulo:"eNTERNAMIENTO DE FUERZA",
                descripcion:"Aprende sobre FUERZA",
                leftColor:"#FAD961",
                rightcolor:"#F76B1C",
                //imagen:"https://w7.pngwing.com/pngs/67/631/png-transparent-pink-hibiscus-flowers-flower-small-fresh-summer-flowers-herbaceous-plant-summer-malvales-thumbnail.png"
            }*/
        ]
        
    }
render(){
    return(//traemos el saludo que es fijo
        <div>
<Saludo
titulo="Manzanas de Cuidado"
inicio="Inicio"
admin="Iniciar Sesion"
cuidadoras="Contacto"
sobre="Servicios"
/>
<B_inicio/>

</div>


    )
}
}
export default Ejemplo