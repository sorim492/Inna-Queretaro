import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <div className='container'>
                <div className='row footer-info'>
                    <div className='col-lg-3 col-sm col-md-12'>
                        <p>Web site created using React
                        <br/> 
                        open-source on 
                        <a href='https://github.com/sorim492/Inna-Queretaro' target='_blank' rel="noreferrer" className='App-link'> github <i class="fa-brands fa-github"></i></a>, hosted on Netlify</p>
                    </div>
                    <div className='col-lg-5'>
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#clases">Clases</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#talleres">Talleres</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#nosotros">Nosotros</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#videos">Videos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    </div>
            <div className='col-lg-3 col-sm col-md-12'>
              <div class="card text-bg-tertiary mb-3">
              <div class="card-header"><a class="nav-link" href="#contacto">Contacto</a></div>
                <div class="card-body">
                    <a href='mailto:innapolequeretaro@gmail.com' target='_blank' rel="noreferrer" className='App-link'><i class="fa-regular fa-envelope"></i></a>
                    <a href='https://innapolefit.website/' target='_blank' rel="noreferrer" className='App-link'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=524423460246" target="_blank" rel="noreferrer" className="App-link"><i class="fa-brands fa-whatsapp contact-icon"></i></a>
                </div>
            </div>
        </div>
            </div>
          </div>
        </div>
    )
}