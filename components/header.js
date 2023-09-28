import React from "react";
import "./estilo/header.css"
import img from "./estilo/img/logo.png"
import { Link } from "react-router-dom";
import { IconUserSquareRounded } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { IconSettingsSearch } from '@tabler/icons-react';
import { IconHearts } from '@tabler/icons-react';



const Header=(props)=>( //CREAME UNA CONST PARA PODER ALMACENAR DATOS// 
<div className="container"> 
        <div className="header">
        <img  src={img}  height={150}  width={150} className="img" alt="ola"/> 
        <h1 className="titu" >{props.titulo}</h1>
        <ul className="header_ul">
            <Link className="Header_tit" to="/inicio"><li> <span><IconHome/></span> {props.inicio} </li></Link>
            <Link className="Header_tit" to="/Serv"><li> <span><IconSettingsSearch/></span>{props.sobre}  </li></Link>
            <Link className="Header_tit" to="/contac"><li ><span><IconHearts/></span> {props.cuidadoras}</li></Link>
            <Link className="boton1" to="/B_Login"> <button className="boton"><span><IconUserSquareRounded/></span>  {props.admin} </button> </Link>
        </ul> 
        </div>
    </div>
)

export default Header