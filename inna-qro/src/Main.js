import React from "react";
import espacio from "./logo.png";

export default function Main(){
    return(
        <div className="main">
            <div className="container">
                <div className="row name">
                    <div className="col-lg-6 col-sm-12">
                        <h1>Inna Pole Queretaro</h1>
                    </div>  
                    <div className="col-lg-6 col-sm-12">
                        <img src={espacio} alt="personal" className="img-fluid"/>
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
                    <p> Engineer with experience in project management in industrial maintenance. I
                        have worked on projects aimed at optimizing industrial processes that have
                        taken me to enter the world of data analysis.
                    </p>
                    <p>The motivation for continuous learning has driven me to start training in topics
                        such as data science, programming, and data visualization, supported by tools
                        like Power BI, Python language, Excel. Using these new tools as support,
                        together with more strong skills like AutoCAD, I have been able to develop a
                        robust foundation in engineering project management, gain problem-solving
                        skills, an analytical mindset, and the ability to make informed decisions.
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
                   
            </div>
        </div>
    )
}