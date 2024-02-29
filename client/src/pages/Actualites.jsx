import React from 'react'
import Navbar from '../components/Navbar'
import PageInfoSection from '../components/PageInfoSection'
import StatueConakry from "../assets/images/statue-wlc.jpg"
import Cky1 from "../assets/images/cky.jpg"
import Cky2 from "../assets/images/cky-2.png"
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Actualites() {
    return (
        <>
            <Navbar></Navbar>
            <PageInfoSection title={"Actualités"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et."}></PageInfoSection>
            <section className="actu actualites">
                <div className="wrapper">
                    <div className="left">
                        <div className="top">
                            <img src={StatueConakry} alt="" />
                        </div>
                        <div className="bottom">
                            <h3 className="actuTitle">Bienvenue sur notre site internet !</h3>
                            <p className='actuText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta, tenetur reiciendis sequi reprehenderit accusamus porro omnis, possimus ducimus labore earum odio eius fugit aspernatur?</p>
                            <button className="">
                                <span className="iconSize">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                        <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                    </svg>
                                </span>
                                Lire la suite
                            </button>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </section>
            <section className="otherActu">

                <div className="singleActu">
                    <div className="left">
                        <img src={Cky1} alt="" />
                    </div>
                    <div className="right">
                        <h3 className="actuTitle">
                            Titre de l'actualité secondaire de la page d'accueil
                        </h3>
                        <button className="">
                            <span className="iconSize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                </svg>
                            </span>
                            Lire la suite
                        </button>
                    </div>
                </div>
                <div className="singleActu">
                    <div className="left">
                        <img src={Cky1} alt="" />
                    </div>
                    <div className="right">
                        <h3 className="actuTitle">
                            Titre de l'actualité secondaire de la page d'accueil
                        </h3>
                        <button className="">
                            <span className="iconSize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                </svg>
                            </span>
                            Lire la suite
                        </button>
                    </div>
                </div>
                <div className="singleActu">
                    <div className="left">
                        <img src={Cky1} alt="" />
                    </div>
                    <div className="right">
                        <h3 className="actuTitle">
                            Titre de l'actualité secondaire de la page d'accueil
                        </h3>
                        <button className="">
                            <span className="iconSize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                </svg>
                            </span>
                            Lire la suite
                        </button>
                    </div>
                </div>
                <div className="singleActu">
                    <div className="left">
                        <img src={Cky1} alt="" />
                    </div>
                    <div className="right">
                        <h3 className="actuTitle">
                            Titre de l'actualité secondaire de la page d'accueil
                        </h3>
                        <button className="">
                            <span className="iconSize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                </svg>
                            </span>
                            Lire la suite
                        </button>
                    </div>
                </div>
                <div className="singleActu">
                    <div className="left">
                        <img src={Cky1} alt="" />
                    </div>
                    <div className="right">
                        <h3 className="actuTitle">
                            Titre de l'actualité secondaire de la page d'accueil
                        </h3>
                        <button className="">
                            <span className="iconSize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                </svg>
                            </span>
                            Lire la suite
                        </button>
                    </div>
                </div>
                <div className="singleActu">
                    <div className="left">
                        <img src={Cky1} alt="" />
                    </div>
                    <div className="right">
                        <h3 className="actuTitle">
                            Titre de l'actualité secondaire de la page d'accueil
                        </h3>
                        <button className="">
                            <span className="iconSize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                </svg>
                            </span>
                            Lire la suite
                        </button>
                    </div>
                </div>
            </section>
            <div className="navSection" style={{ flexDirection: "row-reverse" }}>

                <div className="navigationBtns">
                    <span className="navIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                            <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#ecedef" />
                        </svg>
                    </span>
                    <span className="navIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                            <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                        </svg>
                    </span>
                </div>
            </div>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default Actualites