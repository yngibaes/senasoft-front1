import React from "react";
import "./estilo/servicio.css"
import IMAGE from "./estilo/img/serv1.jpg"
import IMAGES from "./estilo/img/serv2.webp"


   
        const B_serv=(props)=>( //CREAME UNA CONST PARA PODER ALMACENAR DATOS// 
        <div className="serv"> 
         <div className="serv_body">
                    <h1 className="titul">{props.titulo}</h1>
                    <h3 className="descr">{props.descr} </h3>
                    </div>
                  
                    <img className="img5" src={IMAGE} alt="ola"/>
                    <p className="serv1">
                    {props.ser1}
                    </p>
                    <p className="serv3">
                    {props.ser2}
                    </p>
                    <p className="colors">
                    <div>
                    <p className="serv2"> {props.ser3}</p>
                    <p className="serv4"> {props.ser4}</p>
                    <img className="img6" src={IMAGES} alt="ola"/>
                   
                    </div>      
             </p>
             
                  </div>
           
        )
        
        export default B_serv
    

