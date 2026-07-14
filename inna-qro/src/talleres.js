import React from "react";
import tallerkarim from "./taller karim.jpeg";

export default function Talleres (){
    return (
        <div className="talleres" id="talleres">
            <h2>Talleres</h2>
            <img src={tallerkarim} alt="horario" className="img-fluid"/>
        </div>
    )
}