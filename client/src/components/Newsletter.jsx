import React from 'react'
import { Link } from 'react-router-dom'

function Newsletter() {
    return (
        <section className="newsletter">
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
                <g id="Groupe_30" data-name="Groupe 30" transform="translate(262 -927)">
                    <g id="Groupe_10" data-name="Groupe 10" transform="translate(-212 731.409)">
                        <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-27 215.136)" fill="#1a6bbc" />
                        <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-50 251.409)" fill="#e9b85b" />
                    </g>
                </g>
            </svg>
            <div className="wrapper">
                <div className="left">
                    <h2>Newsletter</h2>
                    <p className="desc">Ne ratez aucune annonce, ne ratez aucune nouvelle. Soyez au courant avant les autres</p>
                </div>
                <div className="right">
                    <input type="text" placeholder='VOTRE EMAIL' />
                    <button className="btn mainBtn">
                        <Link to={"/"}>
                            S'abonner <span className="iconSize"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter