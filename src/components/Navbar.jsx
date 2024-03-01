import React from 'react';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-xl main_banner " style={{height: 93}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="assets/logo-dark.png"  alt={''}/>
                    </a>
                    <button aria-controls="offcanvasNavbarExample-expand-xl" className="navbar-toggler" data-bs-target="#offcanvasNavbarExample-expand-xl"
                        data-bs-toggle="offcanvas" type="button">
                        <span data-bs-target="#offcanvasNavbarExample-expand-xl">
                        <svg className="bi bi-list" fill="currentColor"
                            height="16" style={{color: "#ff014f",
                            fontSize: "85px !important",
                            width: "53px !important",
                            height: "22px !important",
                             lineHeight: "2"}} viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            fillRule="evenodd" />
                            </svg>
</span>
                    </button>
                    
                    
                    <div aria-labelledby="offcanvasNavbarExample-expand-xlLabel" className="offcanvas offcanvas-start" data-bs-hideresize="true"
                        id="offcanvasNavbarExample-expand-xl" tabIndex="-1">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasLabel">
                                <a className="navbar-brand" href="#">
                                    <img className="img2" src="assets/logo.png" alt={''}/>
                                </a>
                            </h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                                <span aria-hidden="true" style={{color: "#ff014f"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" /> 
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="offcanvas-body" style={{display: "flex", justifyContent: "end"}}>
                            <div>
                                <p className="desciption1">I am Faisal Sarfraz, I have worked with many small, medium and large multinational companies as well individuals and web agencies. </p>
                            </div>
                            <div className="offcanvas-start ">
                                <ul className="navbar-nav main_menu">
                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                        <a aria-current="page" className="nav-link"  href="#home">Home</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                        <a className="nav-link" href="#features">Features</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                        <a className="nav-link" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                        <a className="nav-link" href="#resume">Resume</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                        <a className="nav-link" href="#testimonial">Testimonial</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                        <a className="nav-link" href="#clients">Clients</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                        <a className="nav-link" href="#contactus">Contacts</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="footer footer-nav">
                                <div className="social-share-style-1">
                                    <span className="main_title2">find with me</span>
                                    <ul className="social-share set_icon2 d-flex list-unstyled">
                                        <li className="single-item">
                                            <a className="fa fa-linkedin" href="https://www.linkedin.com/in/faisalsarfraz/"></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Navbar