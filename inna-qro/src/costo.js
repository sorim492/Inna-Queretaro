import React from "react";
import costos from "./costos.jpeg";

export default function Costos (){
    return (
        <div className="costos" id="costos">
            <h2>Costos</h2>
            <img src={costos} alt="costos" className="img-fluid"/>
        </div>
    )
}