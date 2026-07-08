import React from "react";
import logo from "./jess.jpg";
import alam from "./alam.jpeg";
import luci from "./luci.jpeg";
import Clases from "./clases";
import Costos from "./costo";

export default function Main(){
    return(
        <div className="main">
            <div className="container">
                <div className="row name">
                    <div className="col-lg-6 col-sm-12">
                        <h1>Inna Pole Querétaro</h1>
                        <img src={alam} alt="personal" className="img-fluid"/>
                    </div>  
                    <div className="col-lg-6 col-sm-12">
                        <img src={logo} alt="personal" className="img-fluid"/>
                    </div>
                </div>
                    <hr/>
                    <div className="main-info">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <a class="nav-link" href="#fit"><h2>Pole Fit</h2></a>
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
                    <div id="fit">
                        <img src={alam} alt="personal" className="img-fluid"/>
                        <p> 
                            Pole Fit Se enfoca en el entrenamiento físico, fuerza, resistencia y acondicionamiento.
                        </p>
                    </div>
                    <div id="flex">
                        <img src={luci} alt="personal" className="img-fluid"/>
                        <p>
                            Pole Flex Enfatiza posturas y transiciones que requieren gran flexibilidad.
                        </p>
                    </div>
                    <div id="fly">
                        <p>
                            Pole Fly Se centra en la fluidez de movimientos, transiciones suaves y conexión con la música.
                        </p>
                    </div>
                    <div id="flow">
                        <p>
                            Pole Flow Se centra en la fluidez de movimientos, transiciones suaves y conexión con la música.
                        </p>
                    </div>
                    <div id="exotic">
                        <p>
                            Pole Exotic Se centra en la fluidez de movimientos, transiciones suaves y conexión con la música.
                        </p>
                    </div>
                    <div id="Power">
                        <p>
                            Pole Power Entrenamiento físico, enfocado en fuerza, resistencia, acondicionamiento y acrobacia con un mayor grado de dificultad.
                        </p>
                    </div>
                    
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
                   <Costos/>
            </div>
        </div>
    )
}