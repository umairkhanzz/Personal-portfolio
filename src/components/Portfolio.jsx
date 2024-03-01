import Projects from '../projects.json'


const Portfolio = () => {
    return (
        <>
            <section className="portoflio_section" id="portfolio">
                <div className="container banner-second " style={{ borderBottom: "1px solid #dce1e4", paddingBottom: 100 }}>
                    <div className="row" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"  data-aos-once="true" >
                        <div className="col-md-12  ">
                            <div className="section-title text-center mt-5">
                                <span className="subtitle ">Visit my portfolio and keep your feedback</span>
                                <h2 className=" sec-title mt-3" style={{ marginBottom: 37, marginTop: "15px !important" }}>My
                                    Portfolio </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            Projects.map((project,key) =>{
                                return(
                                    <div className="col-lg-4 col-sm-12  col-xs-6 col-md-6 mb-4 " key={key}>
                                        <div className='' key={project.id}>
                                             <div className="card inner2 ">
                                                 <div className="thumbnail"  >
                                                     <a data-bs-target={'#'+project.id} data-bs-toggle="modal" >
                                                         <img alt="" className="card-img-top" height="250px" src={project.img} width="340px" />
                                                     </a>
                                                 </div>
                                                 <div className="card-body content" >
                                                     <h4 className="title" >
                                                         <a data-bs-target={'#'+project.id} data-bs-toggle="modal" className={'cursor-pointer'}>{project.Title}

                                                         </a>
                                                     </h4>
                                                 </div>
                                             </div>
                                         </div>
                                         <div  aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade" id={project.id} tabIndex={-1}>
                                             <div className="modal-dialog  modal-dialog-centered" >
                                                 <div className="modal-content" >
                                                     <div className="modal-header">
                                                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ color: "#ff014f" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                  </svg>
                                </span>
                                                         </button>
                                                     </div>
                                                     <div className="modal-body">
                                                         <div className="row align-items-center">
                                                             <div className="col-lg-6">
                                                                 <div className="carousel slide" data-ride="carousel" id="portfolio-modal-thumbnail-slider-63 " >
                                                                     <div className="carousel-inner">

                                                                         <div className="carousel-item active">
                                                                             <img alt="portfolio-large-04" className="w-100" decoding="async" src={project.img} />
                                                                         </div>


                                                                     </div>

                                                                 </div>
                                                             </div>
                                                             <div className="col-lg-6 ">
                                                                 <div className="text-content">
                                                                     <div className="row">
                                                                         <div className="col-md-12 ">
                                                                             <h3> {project.Title} </h3>
                                                                             <p>{project.main_para} </p>

                                                                         </div>
                                                                         <div className="col-lg-12 col-md-12 col-sm-6">

                                                                         </div>
                                                                     </div>
                                                                 </div>
                                                                 { /* End of .text-content */ }
                                                             </div>
                                                         </div>
                                                         { /* End of .row media*/ }
                                                         <div className="row">
                                                             <div className="col-md-12">
                                                                 <div className="rb-separator pb--30 pt--30">
                                                                     <div className="divider-separator w-100" />
                                                                 </div>

                                                                 <h2>{project.mini_title}</h2>
                                                                 <div className="is-layout-flex wp-container-4 wp-block-columns" style={{    marginTop: 31}}>
                                                                     <div className="is-layout-flow wp-block-column" style={{width:155, marginLeft:6}}>
                                                                         <h5><strong>{project.title1}</strong></h5>
                                                                         <p>{project.para1}</p>
                                                                     </div>

                                                                     <div className="is-layout-flow wp-block-column" style={{width:268}}>
                                                                         <h5><strong>{project.title2}</strong></h5>
                                                                         <p>{project.para2}</p>
                                                                     </div>
                                                                     <div className="is-layout-flow wp-block-column" style={{width:235}}>
                                                                         <h5><strong>{project.title3}</strong></h5>
                                                                         <p>{project.para3}</p>
                                                                     </div>
                                                                     <div className="is-layout-flow wp-block-column">
                                                                         <h5><strong>{project.title4}</strong></h5>
                                                                         <p>{project.para4}</p>
                                                                     </div>
                                                                 </div>




                                                             </div>
                                                         </div>
                                                         { /* End of .row body*/ }
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                    </div>
                                )
                            })
                        }
            
                    </div>


                </div>
            </section>
        </>
    )
}

export default Portfolio