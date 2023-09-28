import React from "react";
import "./estilo/inicio.css"
import img from "./estilo/img/inicio1.png"
import img1 from "./estilo/img/img1.png"
import img2 from "./estilo/img/img2.webp"

export default function B_inicio(){
    return(
        <div className="body1">
            <div className="ini1">
            <img className="color2"/>
            <img className="img2" src={img} alt="ola"/>
            <h1 className="color"> La vida es una sucesion de elecciones que deben ser vividas para ser entendidas</h1>
            <img className="img3" src={img1} alt="ola"/>
            <img className="img4" src={img2} alt="ola"/>
         
        </div>  
      
        </div>

    )
}