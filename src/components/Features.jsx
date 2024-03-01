import Card from '../card.json'

const Features = () => {
  return (
  <>
    <section id="features">
    <div className="container banner-second " style={{ paddingBottom: 100, borderBottom: "1px solid #dce1e4" }}>
        <div className="row feature_section  aos-animate" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" >
            <div className="col-lg-12 feature-heading " style={{ marginBottom: 71, marginTop: "-38px" }}>
                <span className="sub_title"> Features </span>
                <h2 className="main_subtitle">What I Do</h2>
            </div>
        </div>
        <div className="row " data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
           {
            Card.map((card, key) =>{
                return(
                    <div key={key} className="col-lg-4 col-md-6 col-12 mb-4 ">
                        <div className=" solution_cards_box" id="">
                            <div className="solution_card">
                                <div className="so_top_icon">
                                    <img alt="" className="img-fluid" src={card.img} style={{color:"pink"}}/>
                                </div>
                                <div className="content">
                                    <h4 className="solu_title">{card.title}</h4>
                                </div>
                                <div className="solu_description">
                                    <p>{card.decription} </p>
                                    <a className="read-more-button" href="#">
                                        <svg className="bi bi-arrow-right" fill="currentColor" height="25" viewBox="0 0 16 16" width="25" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fillRule="evenodd" />
                                        </svg>
                                    </a>
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

export default Features