import React from 'react'
import Cky1 from "../assets/images/cky.jpg"
function PageBody({ children }) {
    return (
        <section className="pageBody">
            <div className="left">
                <p className="text">
                    {children}
                </p>
            </div>
            <div className="right">
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

            </div>
        </section>
    )
}

export default PageBody