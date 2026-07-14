import React from "react";
import espacio from "./espacio.jpeg";

export default function Espacio (){
    return (
        <div className="espacio" id="espacio">
            <h2>Renta de espacio</h2>
            <img src={espacio} alt="horario" className="img-fluid"/>
        </div>
    )
}