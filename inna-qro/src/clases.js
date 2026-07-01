import React from "react";
import horario from "./horario-Inna-Qro.png";

export default function Clases (){
    return (
        <div className="clases" id="clases">
            <h2>Horarios</h2>
            <img src={horario} alt="horario" className="img-fluid"/>
        </div>
    )
}