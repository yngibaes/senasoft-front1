import React from "react";
function FORM(){
    return(
<div className="container"> 
        <div className="login">
            <h1>LOGIN</h1>
        <label>Inserte su email:
     <input placeholder="Ana" type="text" name="nombre" required/>
     </label>  
     <label>Inserte su contraseña:
     <input  type="password" name="password" required/>
     </label>  
     <button></button>
     </div>
     <div>
     <h1>REGISTRO</h1>
        <label>Nombre:
     <input placeholder="Nata" type="text" name="nombre" required/>
     </label>  
     <label>Apellido:
     <input placeholder="Ramos" type="text" name="apellido" required/>
     </label> 
     <label>Tipo de documento
     <select name="Tipo">
        
  <option >T.I</option>
  <option selected>C.C</option>
  <option >Cedula extranjera</option>
  <option >Pasaporte</option>
  </select>
  <label>Documento
     <input placeholder="1020351642" type="number" name="Docu" required/>
     </label> 
     <label>Telefono:
     <input placeholder="3152064201" type="number" name="Tel" required/>
     </label> 
     <label>direccion:
     <input placeholder="Calle 10 ·20-45a" type="text" name="direc" required/>
     </label> 
     <label>Ciudad:
     <input placeholder="Medellin" type="text" name="Ciudad" required/>
     </label> 
     <label>Ocupacion:
     <input placeholder="Profesora" type="text" name="ocupa" required/>
     </label> 
     <label>¿En que servicio te gustaria participar?:
     <textarea  name="comment" >Escribe algo</textarea>
     </label> 
     <button className="buton">Enviar</button>

    

     
     </label> 
     </div>
    </div>
     
  

   
    )}
    export default FORM