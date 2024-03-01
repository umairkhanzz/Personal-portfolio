const Contact = () => {
  return (
   <>
    <section className="contact2" id="contactus">
    <div className="container banner-second" style={{ paddingBottom: 100, borderBottom: "1px solid #dce1e4" }}>
        <div className="row aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"  data-aos-once="true">
            <div className="col-md-12  ">
                <div className="section-title text-center mt-5">
                    <span className="subtitle ">CONTACT</span>
                    <h2 className=" sec-title mt-3" style={{ marginBottom: 36 }}>Contact With Me</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 mb-4 contact-about-area">
                <div className="card inner2 ">
                    <div className="thumbnail">
                        <img alt="" className="card-img-top" height="250px" src="assets/pro1.jpg" width="340px" />
                    </div>
                    <div className="card-body content">
                        <div className="title-area">
                            <h4 className="title-contact">Muhammad Umair Khan</h4>
                            <span>Frontend Developer</span>
                            <div className="description" style={{ fontSize: 18 }}>
                                <p style={{ marginTop: 20 }}> I am available for freelance work. Connect with me via and
                                    call in to my account. </p>
                                <span className="phone" id="phone1" style={{ padding: "10px 0" }}>Phone: <a className="nav-link2 nav-link-ltr" href="tel:+92-042-35721419">+92-327-3300079</a>
                      </span>
                                <span className="mail" id="email">Email: <a className="nav-link2 nav-link-ltr" href="mailto:faisal@devsspace.com" >ibneyadam432062@gmail.com</a>
                      </span>
                      <span className="mail" id="emails" style={{marginTop:"4px"}}>Address: <a className="nav-link2 nav-link-ltr0"  style={{onmouseover:"this.style.color='unset'" }}>Satellite Town , Gujranwala  </a>
                      </span>
                            </div>
                            <div className="social-area  ">
                                <div className="name">FIND WITH ME</div>
                                <div className="social-icone skill-share no_has_Shadow ">
                                    <ul className="social-share social_area2 d-flex list-unstyled">
                                        <li className="single-item">
                                            <a className="fa fa-linkedin" target={'_blank'} href="https://www.linkedin.com/in/muhammad-umair-khan-92ab39233/" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8  ">
                <div className="form-content-area">
                    <form className="row g-3">
                        <div className="col-lg-6">
                            <label className="form-label" htmlFor="inputEmail4">Your Name</label>
                            <input className="form-control" id="inputEmail4" type="email" />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label" htmlFor="inputPhone">Phone number</label>
                            <input className="form-control" id="inputPhone" type="phone" />
                        </div>
                        <div className="col-12">
                            <label className="form-label" htmlFor="inputEmail">Email</label>
                            <input className="form-control" id="inputEmail" type="email" />
                        </div>
                        <div className="col-12">
                            <label className="form-label" htmlFor="inputSubject">City</label>
                            <input className="form-control" id="inputSubject" type="text" />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label" htmlFor="Message">Subject</label>
                            <textarea className="form-control" cols={10} id="Message" name="text" rows={8} />
                        </div>
                        <div className="col-lg-12">
                            <input className="wpcf7-form-control has-spinner wpcf7-submit rn-btn2" type="submit" value="SEND MESSAGE" />
                            <span className="wpcf7-spinner" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default Contact