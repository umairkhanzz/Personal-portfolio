const Client = () => {
    return (<>
            <section className="clients" id="clients">
                <div className="container banner-second"
                     style={{borderBottom: "1px solid #dce1e4", paddingBottom: 100}}>
                    <div className="row " data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"
                         style={{marginTop: 70}}>
                        <div className="col-md-12 client-set">
                            <span className="subtitle sub-title">Popular Clients</span>
                            <h2 className="clients-title sec-title" style={{marginBottom: "37px"}}>Awesome Clients </h2>
                        </div>
                    </div>
                    { /*sidebar section start*/}
                    <div className="client-area">
                        <div className="row row--25 mt_md--40 mt_sm--40">
                            <div className="col-lg-4" style={{zIndex: "20"}}>
                                <div className="d-flex flex-wrap align-content-start h-100">
                                    <div className="position-sticky clients-wrapper sticky-top rbt-sticky-top-adjust"
                                         style={{top: 160, width: "100%"}}>
                                        <ul className="nav tab-navigation-button flex-column nav-pills me-3"
                                            id="v-pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <button aria-controls="v-pills-home" aria-selected="true"
                                                   className="nav-link active" data-bs-target="#v-pills-home"
                                                   data-bs-toggle="pill" id="v-pills-home-tab" role="tab"
                                                   type="button">Wordpress</button>
                                            </li>
                                            <li className="nav-item">
                                                <button aria-controls="v-pills-profile" aria-selected="false"
                                                   className="nav-link" data-bs-target="#v-pills-profile"
                                                   data-bs-toggle="pill" id="v-pills-profile-tab" role="tab"
                                                   type="button">Front end development </button>
                                            </li>
                                            <li className="nav-item">
                                                <button aria-controls="v-pills-messages" aria-selected="false"
                                                   className="nav-link" data-bs-target="#v-pills-messages"
                                                   data-bs-toggle="pill" id="v-pills-messages-tab" role="tab"
                                                   type="button">CRM</button>
                                            </li>
                                            <li className="nav-item">
                                                <button aria-controls="v-pills-settings" aria-selected="false"
                                                   className="nav-link" data-bs-target="#v-pills-settings"
                                                   data-bs-toggle="pill" id="v-pills-settings-tab" role="tab"
                                                   type="button">Mobile apps</button>
                                            </li>
                                            <li className="nav-item">
                                                <button aria-controls="v-pills-react" aria-selected="false"
                                                   className="nav-link" data-bs-target="#v-pills-react"
                                                   data-bs-toggle="pill" id="v-pills-settings-tab" role="tab"
                                                   type="button">Custom</button>
                                            </li>
                                            <li className="nav-item">
                                                <button aria-controls="v-pills-python" aria-selected="false"
                                                   className="nav-link" data-bs-target="#v-pills-python"
                                                   data-bs-toggle="pill" id="v-pills-settings-tab" role="tab"
                                                   type="button">Laravel</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            { /*card section start*/}
                            <div className="col-lg-8">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div aria-labelledby="v-pills-home-tab" className="tab-pane fade show active"
                                         id="v-pills-home" role="tabpanel">
                                        <div className="client-card">
                                            { /*card 1 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/collect-the-collection.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                           Collect the collection
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 1 end*/}
                                            { /*card 2 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/FAC Filter.PNG"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            FAC Filter
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 3 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>

                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Molodology.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Melodology
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 4 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>

                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/ropetechlondon.jpg"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Ropetech London
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 5 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/hh.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                           Honor by Light
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 6 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Hypromotion.png"/>
                                                        </a>
                                                        </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Hypromotion
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 7 end*/}

                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/SA Home Buyer.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            SA home buyer
                          </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div aria-labelledby="v-pills-profile-tab" className="tab-pane fade"
                                         id="v-pills-profile" role="tabpanel">
                                        <div className="client-card">
                                            { /*card 1 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/womenofcrypto.PNG"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                           Women of Crypto
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 1 end*/}
                                            { /*card 2 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Fidus Information Security.PNG"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Fidus Information Security
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 3 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/TMBH Premier.PNG"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            TMBH Premier
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 4 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Peopple Tax Relief.jpg"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Peopple Tax Relief
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 5 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/NYC Snow Bus.PNG"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                             NYC Snow Bus
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div aria-labelledby="v-pills-messages-tab" className="tab-pane fade"
                                         id="v-pills-messages" role="tabpanel">
                                        <div className="client-card">
                                            { /*card 1 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Docuvalt.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            DocuVault
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 1 end*/}
                                            { /*card 2 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/GenVault-logo.svg"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                           GenVault
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 3 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Rent london flats.webp"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Rent London flats
                          </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Veritrust.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                              Veritrust
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 6 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                    <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/iconscout-logO.svg"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            iconscout
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div aria-labelledby="v-pills-settings-tab" className="tab-pane fade"
                                         id="v-pills-settings" role="tabpanel">
                                        <div className="client-card">
                                            { /*card 1 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/gulf research center.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                           Gulf Research Center
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 1 end*/}
                                            { /*card 2 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/gulf research meeting.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Gulf Research Meeting
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 3 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/brand-02.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                           Araa
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div aria-labelledby="v-pills-react-tab" className="tab-pane fade"
                                         id="v-pills-react" role="tabpanel">
                                        <div className="client-card">
                                            { /*card 1 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Adam Meyer.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                           Indiana Signworks
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 1 end*/}
                                            { /*card 2 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Atlanta Creek League.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Atlanta Creek League
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 3 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/Incentiv It.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                          <span>
                            Incentiv It
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div aria-labelledby="v-pills-react-python" className="tab-pane fade"
                                         id="v-pills-python" role="tabpanel">
                                        <div className="client-card">
                                            { /*card 1 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/gulf research center.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                        <span>
                         Gulf Research Center
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 1 end*/}
                                            { /*card 2 start*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/gulf research meeting.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                        <span>
                          Gulf Research Meeting
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 3 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/ecoscout.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                        <span>
                          EcoScout
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            { /*card 4 end*/}
                                            <div className="main-content">
                                                <div className="inner text-center">
                                                    <div className="thumbnail">
                                                        <a>
                                                        <img alt="brand-01 " className="attachment-full size-full"
                                                             src="assets/primaryleap.png"/>
                                                        </a>
                                                    </div>
                                                    <div className="seperator"/>
                                                    <div className="client-name">
                        <span>
                          PrimaryLeap
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    { /*card section end*/}
                </div>
            </section>
        </>)
}

export default Client