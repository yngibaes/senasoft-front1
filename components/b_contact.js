import React from "react";
import "./estilo/contac.css"
import IMAG from "./estilo/img/CONTACTO.jpg"
const B_contac=(props)=>( //CREAME UNA CONST PARA PODER ALMACENAR DATOS// 
<div className="contac"> 

            <h1 className="titul">{props.titulo}</h1>
            <div className="contac_body"><p className="contact1">{props.contac1}</p>
            <p className="contact1">{props.contac2}</p>
            <p className="contact1">{props.contac3}</p>
            <p className="contact1">{props.contac4}</p>
           

            </div>
            <img className="img10" src={IMAG} alt="ola"/>
            </div>

          
          
    
     
       
   
)

export default B_contac
