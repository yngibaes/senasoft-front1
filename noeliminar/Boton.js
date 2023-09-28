import React from "react";//Siempre se debe importar react
import "./estilos/Boton.css"// Se importa el estilo de css
import img1 from "../imagenes/add.png" //Se importa la imagen qu
import { Link } from "react-router-dom";

const B=()=>(//el to es a donde va
    <Link to="/new">
        
        <img src={img1} className="suma"/>
    </Link>
)
export default B