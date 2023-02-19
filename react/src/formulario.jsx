import { Fragment, useState } from "react";
//import verUsuario from "./verUsuario"

function Formulario (props){

      const [nombre, setNombre] = useState ('');
      const [apellido, setApellido] = useState ('');
      const [estado, setEstado] = useState ([]);

        function registrarUsuario(e){
            e.preventDefault();
            let usuario = {
                nombre : nombre,
                apellido : apellido
            }
         setEstado ([...estado , usuario]);
        }
        function VerUsuario(props){
 
            return(
                <ul><li> su nombre es: {nombre} {apellido}</li></ul>
              );
          }
    return(
        <Fragment>
            <form action="" onSubmit={(e)=> registrarUsuario (e)}>
            <input onChange= {(e)=> setNombre(e.target.value)} type="text" name="nombre" id="nombre" />
            <input onChange= {(e)=> setApellido(e.target.value)} type="text" name="apellido" id="apellido" />
            <button>Aceptar</button>
            <VerUsuario/>

            </form>
        </Fragment>
    )
}

export default Formulario