import React from "react";
import logo from "./logo.png";
import Clases from "./clases";

export default function Main(){
    return(
        <div className="main">
            <div className="container">
                <div className="row name">
                    <div className="col-lg-6 col-sm-12">
                        <h1>Inna Pole Querétaro</h1>
                    </div>  
                    <div className="col-lg-6 col-sm-12">
                        <img src={logo} alt="personal" className="img-fluid"/>
                    </div>
                </div>
                    <hr/>
                    <div className="main-info">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h2>Pole Fit</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Pole Flex</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Pole Fly</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Pole Flow</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Pole Exotic</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Pole Power</h2>
                            </div>
                        </div>
                    </div>
                    <p> Pole Fit </p>
                    <p>Se enfoca en el entrenamiento físico, fuerza, resistencia y acondicionamiento.</p>
                    <p>
                        Pole Flex Enfatiza posturas y transiciones que requieren gran flexibilidad.
                    </p>
                    <p>Pole Fly Se centra en la fluidez de movimientos, transiciones suaves y conexión con la música.
                        Pole Power Entrenamiento físico, enfocado en fuerza, resistencia, acondicionamiento y acrobacia con un mayor grado de dificultad.
                    </p>
                    <div className="main-info">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h2>Renta de espacio</h2>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h2>Entrenamiento personalizado</h2>
                            </div>
                        </div>
                    </div>
                   <Clases/>
            </div>
        </div>
    )
}