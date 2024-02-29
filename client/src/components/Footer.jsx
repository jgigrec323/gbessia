import React from 'react'
import Location from "../assets/images/gps.png"
import Facebook from "../assets/images/facebook.png"
import Instagram from "../assets/images/instagram.png"
import Youtube from "../assets/images/youtube.png"
function Footer() {
    return (
        <footer>
            <div className="top">
                <div className="left">
                    <div className="logo">
                        Commune de <br />Gbessia
                    </div>
                    <p>
                        <span className="iconSize">
                            <img src={Location} alt="" />
                        </span>
                        Cité de l'air
                    </p>
                </div>
                <div className="verticalSeparator"></div>
                <div className="middle">
                    <h2>Liens utiles</h2>
                    <ul className="links">
                        <li>Accueil</li>
                        <li>Gbessia Télé</li>
                        <li>Galerie photo</li>
                        <li>Plan du site</li>
                        <li>Demarches</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="verticalSeparator"></div>
                <div className="right">
                    <h2>Sur les réseaux</h2>
                    <ul className="links">
                        <li>
                            <span className="iconSize">
                                <img src={Facebook} alt="" />
                            </span>
                        </li>
                        <li>
                            <span className="iconSize">
                                <img src={Instagram} alt="" />
                            </span>
                        </li>
                        <li>
                            <span className="iconSize">
                                <img src={Youtube} alt="" />
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="bottom">
                © 2024 MAIRIE DE GBESSIA. Tous droits réservés.
            </div>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
                <g id="Groupe_30" data-name="Groupe 30" transform="translate(262 -927)">
                    <g id="Groupe_10" data-name="Groupe 10" transform="translate(-212 731.409)">
                        <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-27 215.136)" fill="#1a6bbc" />
                        <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-50 251.409)" fill="#e9b85b" />
                    </g>
                </g>
            </svg>
        </footer>
    )
}

export default Footer