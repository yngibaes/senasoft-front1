import React from "react";
//import imagenes from '../imagenes/exercise.png';//Necesitamos importar la imagen
import circle from '../imagenes/circles.png';//Imortammos las imagenes


class Tarjeta extends React.Component{
    //Se debe crear un constructor
    //Se define el estado inicial

    //Con babel no necesitamos constructor
    state={
            imagen:'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720'

        }
    
   
render(){//se debe definir la funcion
    //Restructuring
    const {titulo,descripcion,leftColor,rightcolor,imagen}=this.props;
    //con esto quitamos el this.props
    return (//Si enviamos mas de una linea se debe utilizar () y un div que contenga todo lo que se va a enviar
    <div className="card mx-auto Fitness-Card"
    style={{//trayendo estilos se denominan estilos en linea
        backgroundImage:`url(${circle}),linear-gradient(to right, ${leftColor}, ${rightcolor})`
    }}
    >
        <div className="card-body">
             <div className="row center">
                <div className="col-6">
                    <img src={imagen} alt="Pailas" className="float-right"/>
                </div>
                <div className="col-6-Fitness-Card-Info">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    </div>
    
    )
}
}
export default Tarjeta