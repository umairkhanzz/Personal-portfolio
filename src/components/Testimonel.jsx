import Client from '../client.json'
const Testimonel = () => {
  return (
    <>
   
    <section id="testimonial">
    <div className="container  set_line  banner-set" style={{ borderBottom: "1px solid #dce1e4 !important", paddingBottom: '100px' }}>
    <div className="row">
    <div className=" text-center mt-3 col-md-12 " style={{marginTop:'70px'}} >
    <div className="text-center mt-3" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
    <span className="subtitle sub-title  mt-3">What Clients Say</span>
    <h2 className="title testi_section sec-title " style={{marginBottom:"37px"}}>Testimonial</h2>
    </div>

    </div>

    </div>
        <div className="row " style={{ marginTop: "-57px" }}>

                <div className="main-content">
                  <div className="row ">
                    <div className="col-10 mx-auto  text-right arow-setting ">
                      <div className="owl-theme ">
                        <div className="owl-controls">
                          <div className="custom-nav owl-nav">

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="owl-carousel service-slider">
                        
                          

                            {
                               Client.map((client, key) =>{
                                return(
                                    <div className='' key={key}>
                                    <div className="item">
                                    <section className="testimonial">
                                    <div className="inner">
                                <div className="card-info">
                                    <div className="card-thumbnail">
                                        <img alt="man profile image 3"   height="250" loading="lazy" src={client.img} width="332" />
                                    </div>
                                    <div className="card-content">
                                        <span className="subtitle mt-3">{client.subtitle}</span>
                                        <h3 className=" title2">{client.title}</h3>
                                        <span className="designation">{client.chief}</span>
                                    </div>

                                </div>

                                <div className="card-description">

                                    <div className="title-area">
                                        <div className="title-info">
                                            <h3 className="title title-tes">{client.main_title}</h3>
                                            <span className="date"> {client.social_icon} </span>
                                        </div>

                                        <div className="rating">
                                            <ul>
                                                <li className="has-rating list-inline-item">
                                                    <i className="star-icon">
                                                        <svg className="bi bi-star-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </i>
                                                </li>

                                                <li className="has-rating list-inline-item">
                                                    <i className="star-icon">
                                                        <svg className="bi bi-star-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </i>
                                                </li>

                                                <li className="has-rating list-inline-item">
                                                    <i className="star-icon">
                                                        <svg className="bi bi-star-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </i>
                                                </li>

                                                <li className="has-rating list-inline-item">
                                                    <i className="star-icon">
                                                        <svg className="bi bi-star-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </i>
                                                </li>

                                                <li className="has-rating list-inline-item">
                                                    <i className="star-icon">
                                                        <svg className="bi bi-star-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </i>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="seperator" />

                                    <p className="description">
                                   {client.Client_decription}</p>
                                </div>

                            </div>
                            </section>
                            </div>
                                    </div>
                                )
                               }) 
                            }
                    </div>

                </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Testimonel