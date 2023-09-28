import React from "react";
import Tarjeta from "./Tarjeta";

const List=({rutis})=>(
    <div>
    {rutis.map((ejerc)=>{//sustituimos por las props
     return(
        <Tarjeta 
    key={rutis.id}
    titulo={ejerc.titulo}//traemos el array 
    descripcion={ejerc.descripcion}
   
    imagen={ejerc.imagen}
    />
     )   
    })}
    </div> 
)
/*
function List(props){
    return(
<div>
{props.rutis.map((ejerc)=>{//sustituimos por las props
 return(
    <Tarjeta 
titulo={ejerc.titulo}//traemos el array 
descripcion={ejerc.descripcion}
leftColor={ejerc.leftColor}
rightcolor={ejerc.rightcolor}
imagen={ejerc.imagen}
/>
 )   
})}
</div>
    )
}*/
export default List