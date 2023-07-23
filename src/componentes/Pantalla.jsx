import React from "react";
import '../hojas-de-estilo/Pantalla.css';
//componentes mas sencillo por eso esta sintaxis
//componente funcion flecha que define una función anonima
const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;