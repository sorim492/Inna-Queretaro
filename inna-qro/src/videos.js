import React from "react";
import horario from "./horario-Inna-Qro.png";

export default function Videos (){
    return (
        <div className="videos" id="videos">
            <h2>Videos</h2>
            <img src={horario} alt="horario" className="img-fluid"/>
        </div>
    )
}