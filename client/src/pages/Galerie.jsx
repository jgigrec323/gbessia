import React from 'react'
import Navbar from '../components/Navbar'
import PageInfoSection from '../components/PageInfoSection'
import BanniereSection from '../components/BanniereSection'
import Cky1 from "../assets/images/cky.jpg"
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
function Galerie() {
    return (
        <>
            <Navbar></Navbar>
            <PageInfoSection title={"Galerie"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et."}></PageInfoSection>
            <BanniereSection></BanniereSection>
            <section className="galerieImgs">
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
                <div className="galerieImg">
                    <img src={Cky1} alt="" />
                </div>
            </section>
            <div className="navSection">
                <div className="buttons">
                    <button className="btn mainBtn">
                        Consulter notre chaine YT
                        <span className="iconSize">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                        </span>
                    </button>
                    <button className="btn mainBtn">
                        Gbessia télé
                        <span className="iconSize">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                        </span>
                    </button>
                </div>
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

export default Galerie