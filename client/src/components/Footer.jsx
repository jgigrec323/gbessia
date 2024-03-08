import React, { useRef } from 'react'
import Location from "../assets/images/gps.png"
import { Link } from "react-router-dom"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
import Logo from '../assets/images/logo.svg'
function Footer() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)
    useGSAP(() => {

        gsap.from(ref.current, {
            opacity: 0,
            x: 30,
            duration: .5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ref.current,
                start: 'top bottom',
                toggleActions: 'play none none reverse',

            },
            delay: 0.2
        });
    });
    return (
        <footer>
            <div className="top">
                <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <p>
                        <span className="iconSize">
                            <span class="mdi mdi-map-marker"></span>
                        </span>
                        Cité de l'air
                    </p>
                </div>
                <div className="verticalSeparator"></div>
                <div className="middle">
                    <h2>Liens utiles</h2>
                    <ul className="links">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/gbessiaTele">Gbessia Télé</Link></li>
                        <li><Link to="/galerie">Galerie photo</Link></li>
                        <li><Link to="/plan-du-site">Plan du site</Link></li>
                        <li><Link to="/demarches">Demarches</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </div>
                <div className="verticalSeparator"></div>
                <div className="right">
                    <h2>Sur les réseaux</h2>
                    <ul className="links">
                        <li>
                            <span class="mdi mdi-facebook"></span>

                        </li>
                        <li>
                            <span class="mdi mdi-instagram"></span>

                        </li>
                        <li>
                            <span class="mdi mdi-youtube"></span>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="bottom">
                © 2024 MAIRIE DE GBESSIA. Tous droits réservés.
            </div>
            <svg ref={ref} className='' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
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