import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "./estilo/img/logo.png"
import "./estilo/headermuj.css"


const Headermuj= () => {


  return (
    <header>
      <div className="header">
        
      <img  src={img}  height={150}  width={150} className="img" alt="ola"/> 
    
        
            
          <ul className="header_ul">
             <Link   className="Header_titu" to="/propu"><li>Propuestas</li></Link> 
           <Link  to="/inicio"><button className="boton5" >Cerrar sesión</button></Link>
          </ul>
       
      </div>
    </header>

  );
  
};

export default Headermuj;