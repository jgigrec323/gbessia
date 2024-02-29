import React, { useEffect, useRef } from 'react'
import StatueConakry from "../assets/images/statue-wlc.jpg"
import Cky1 from "../assets/images/cky.jpg"
import Cky2 from "../assets/images/cky-2.png"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

function Actualites() {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef([])
    const mainARef = useRef([])
    const pushRef = (el) => ref.current.push(el);
    const mainpushRef = (el) => mainARef.current.push(el);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        ref.current.forEach((el, index) => {
            gsap.from(el, {
                opacity: 0,
                y: -30,
                x: 20,
                duration: .7,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    toggleActions: 'play none none reverse',

                },
                delay: index * 0.2
            });
        });
        mainARef.current.forEach((el, index) => {
            gsap.from(el, {
                opacity: 0,
                y: -30,
                x: -20,
                duration: .7,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    toggleActions: 'play none none reverse',

                },
                delay: index * 0.2
            });
        });

    });




    return (
        <section className="actu">

            <h2 className='sectionTitle'>Actualités</h2>
            <div className="wrapper">
                <div className="left" >
                    <div className="top" ref={(el) => mainpushRef(el)} >
                        <img src={StatueConakry} alt="" />
                    </div>
                    <div className="bottom" ref={(el) => mainpushRef(el)}>
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
                    <div className="singleActu" ref={(el) => pushRef(el)} >
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
                    <div className="singleActu" ref={(el) => pushRef(el)} >
                        <div className="left">
                            <img src={Cky2} alt="" />
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
                    <button className="btn mainBtn" ref={(el) => pushRef(el)}>
                        <Link to={"/actualites"}>
                            Toutes nos actualités <span className="iconSize"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
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

export default Actualites