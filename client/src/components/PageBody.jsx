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
                        <button className="lireLaSuiteBtn">
                            <span className="iconSize">
                                <span class="mdi mdi-arrow-right-drop-circle"></span>

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
                        <button className="lireLaSuiteBtn">
                            <span className="iconSize">
                                <span class="mdi mdi-arrow-right-drop-circle"></span>

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