import React from 'react'

const Banner = () => {
  return (
    <>
    <header className="second_header" id="home" style={{ borderTop: "1px solid #dce1e4" }}>
    <div className="container banner-set " style={{ borderBottom: "1px solid #dce1e4", paddingBottom: 100 }}>
        <div className="row">
            <div className="col-lg-7 col-md-12  content-width   " style={{ padding: "10px" }}>
                <div className=" title_handle">
                    <p className=" main_title">welcome to my world</p>
                    <h1 className="title"> Hi, I'm <span>Umair Khan</span>
                        <br />
                        <span className="a1 " style={{ color: "#ff014f", fontWeight: "600" }}>a</span>
                        <span className="input" style={{ marginLeft: "7px"}}  />

                    </h1>
                    <p className="desciption">
                        <span> I am Muhammad Umair Khan, I have worked with many small, medium and large multinational companies as well individuals and web agencies. I always seek new opportunities where I can show my skills and learn new technologies. I have a strong background from building custom themes from scratch to modifying and reworking existing themes, designing and developing tools and plugins, building and launching web applications, and troubleshooting bugs.  </span>
                    </p>
                    <div className="row icon-set" style={{ marginTop: 100 }}>
                        <div className="col-lg-6 col-md-6">
                            <p className=" main_title " style={{marginLeft:2}}>Find with me</p>
                            <div className="social-icone  skill-share no_has_Shadow ">
                                <ul className=" footer-ul social-share d-flex list-unstyled">
                                    <li className="single-item text-center">
                                        <a href="https://www.linkedin.com/in/muhammad-umair-khan-92ab39233/" target="_blank" title="Linkedin">
                                        </a><a className="fa fa-linkedin" target={'_blank'} href="https://www.linkedin.com/in/muhammad-umair-khan-92ab39233/" />
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 ">
                            <p className=" main_title" style={{ marginLeft: 2 }}>Best Skills on</p>
                            <ul className="social-share d-flex list-unstyled">
                                <li className="single-item">
                                    <a className="fa pe-none" href="#" style={{ background: "var(--gradient-box-w)", boxShadow: "var(--shadow-white-3)" }}>
                                        <img height="40px" src="assets/javascript.png" alt={''}/>
                                    </a>
                                </li>
                                <li className="single-item2">
                                    <a className="fa pe-none" href="#" style={{ background: "var(--gradient-box-w)", boxShadow: "var(--shadow-white-3)" }}>
                                        <img height="40px" src="assets/tailwind.png" alt={''}/>
                                    </a>
                                </li>
                                <li className="single-item2">
                                    <a className="fa pe-none" href="#" style={{ background: "var(--gradient-box-w)", boxShadow: "var(--shadow-white-3)" }}>
                                        <img height="40px" src="assets/react.png" alt={''}/>
                                    </a>
                                </li>
                                <li className="single-item2">
                                    <a className="fa pe-none" href="#" style={{ background: "var(--gradient-box-w)", boxShadow: "var(--shadow-white-3)" }}>
                                        <img height="40px" src="assets/next.png" alt={''}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-5 img-width col-md-12 col-sm-12 col-xs-8  ">
                <div className="main_image">
                    <div className="thumbnail">
                        <div className="inner image-center" >
                            <img className="img-fluid" src="assets/banner-01.png" alt={''}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
    </>
  )
}

export default Banner