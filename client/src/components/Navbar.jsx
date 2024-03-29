import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import Logo from '../assets/images/logo.svg'
import Dec1 from "../assets/images/dec1.svg"
function Navbar() {
    // State to manage the visibility of sublinks for each navigation link
    const [showGbessiaSublinks, setShowGbessiaSublinks] = useState(false);
    const [showLaMairieSublinks, setShowLaMairieSublinks] = useState(false);
    const [showServicesSublinks, setShowServicesSublinks] = useState(false);
    const [showProjetsSublinks, setShowProjetsSublinks] = useState(false);
    const [showMediaSublinks, setShowMediaSublinks] = useState(false);

    const svgRef = useRef(null)
    const ref = useRef([])
    const pushRef = (el) => ref.current.push(el);

    useGSAP(() => {
        ref.current.forEach((el, index) => {
            gsap.from(el, {

                opacity: 0.0,
                duration: .3,
                stagger: 0.1,
                ease: "power1.out",
                delay: 0.1 * index
            })
        });
        gsap.from(svgRef.current, {
            y: "-70%",
            duration: .3,
            stagger: 0.1,
            ease: "power1.out",
            delay: 0.1
        })
    })


    return (
        <nav>
            <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="108.818" height="410" viewBox="0 0 108.818 410">
                <g id="Groupe_29" data-name="Groupe 29" transform="translate(-820 0)">
                    <g id="Groupe_7" data-name="Groupe 7" transform="translate(1124.409 50) rotate(90)">
                        <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-27 215.136)" fill="#1a6bbc" />
                        <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-50 251.409)" fill="#eab452" />
                    </g>
                </g>
            </svg>

            <div className="left">
                <div className="logo" ref={(el) => pushRef(el)}>
                    <Link to={"/"}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
            </div>

            <div className="right">
                <ul className='navLinks'  >
                    <li
                        className="navLink"
                        onMouseOver={() => setShowGbessiaSublinks(true)}
                        onMouseOut={() => setShowGbessiaSublinks(false)}
                        ref={(el) => pushRef(el)}

                    >
                        Gbessia
                        {showGbessiaSublinks && (
                            <ul className="subLinks">
                                <img src={Dec1} alt="" />
                                <li className="subLink">
                                    <Link to={"/gbessia-histoire"}>Histoire</Link>
                                </li>
                                <li className="subLink">
                                    <Link to={"/demographie"}>Peuplement</Link>
                                </li>
                                <li className="subLink projetAVenir">
                                    <Link to={"/tourisme"}>Tourisme</Link>
                                </li>
                                <li className="subLink">
                                    <Link to={"/quartiers"}>Quartiers</Link>
                                </li>
                                <li className="subLink">
                                    <Link to={"/plan-acces"}>Plan d'accès</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        className="navLink"
                        onMouseOver={() => setShowLaMairieSublinks(true)}
                        onMouseOut={() => setShowLaMairieSublinks(false)}
                        ref={(el) => pushRef(el)}
                    >
                        En route pour la mairie
                        {showLaMairieSublinks && (
                            <ul className="subLinks">
                                <img src={Dec1} alt="" />
                                <li className="subLink">Notre candidat</li>
                                <li className="subLink projetAVenir">Administration</li>
                                <li className="subLink projetAVenir">Services techniques</li>
                                <li className="subLink">Nous écrire</li>
                            </ul>
                        )}
                    </li>
                    {/* <li
                        className="navLink"
                        onMouseOver={() => setShowServicesSublinks(true)}
                        onMouseOut={() => setShowServicesSublinks(false)}
                        ref={(el) => pushRef(el)}
                    >
                        Services
                        {showServicesSublinks && (
                            <ul className="subLinks">
                                <li className="subLink">Service 1</li>
                                <li className="subLink">Service 2</li>
                                <li className="subLink">Service 3</li>

                            </ul>
                        )}
                    </li> */}
                    <li
                        className="navLink"
                        onMouseOver={() => setShowProjetsSublinks(true)}
                        onMouseOut={() => setShowProjetsSublinks(false)}
                        ref={(el) => pushRef(el)}
                    >
                        Projets
                        {showProjetsSublinks && (
                            <ul className="subLinks">
                                <img src={Dec1} alt="" />
                                <li className="subLink projetAVenir">Réalisés</li>
                                <li className="subLink projetAVenir">En cours</li>
                            </ul>
                        )}
                    </li>
                    <li
                        className="navLink"
                        onMouseOver={() => setShowMediaSublinks(true)}
                        onMouseOut={() => setShowMediaSublinks(false)}
                        ref={(el) => pushRef(el)}
                    >
                        Mediathèque
                        {showMediaSublinks && (
                            <ul className="subLinks">
                                <img src={Dec1} alt="" />
                                <li className="subLink projetAVenir">
                                    <Link to={"/actualites"}>Actualités</Link>
                                </li>
                                <li className="subLink projetAVenir">
                                    <Link to={"/success-stories"}>Success Stories</Link>
                                </li>
                                <li className="subLink projetAVenir">
                                    <Link to={"/galerie"}>Galerie</Link>
                                </li>
                                <li className="subLink projetAVenir">
                                    <Link to={"/gbessiaTele"}>Videos</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
