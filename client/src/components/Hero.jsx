import React, { useRef } from 'react'
import HeroImg from "../assets/images/logo.JPG"
import { Link } from 'react-router-dom'
import gsap from "gsap"
import CSSPlugin from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type';
import Carousel from './Carousel'
import StatueConakry from "../assets/images/statue-wlc.jpg"
import Cky1 from "../assets/images/cky.jpg"
import Cky2 from "../assets/images/cky-2.png"
import test1 from "../assets/images/test1.jpg"
import test2 from "../assets/images/test2.jpg"
import test3 from "../assets/images/test3.jpg"

const images = [Cky1, Cky2, StatueConakry, HeroImg, test1, test2, test3]

function Hero() {
    const textRef = useRef(null);
    const btnRef = useRef(null)
    const imgRef = useRef(null)
    const ref = useRef([])
    const pushRef = (el) => ref.current.push(el);

    useGSAP(() => {
        ref.current.forEach((el, index) => {
            gsap.from(el, {
                y: "-30px",
                opacity: 0.0,
                duration: .4,
                stagger: 0.1,
                ease: "power1.out",
                delay: 0.1 * index
            })
        });
        if (textRef.current) {
            const text = new SplitType(textRef.current, { types: 'words, chars' });
            gsap.from(text.chars, {
                opacity: 0,
                y: -40,
                duration: .4,
                ease: "power1.out",
                stagger: { amount: 0.5 },
            });
        }
        if (btnRef.current) {
            gsap.from(btnRef.current, {
                opacity: 0,
                y: -40,
                duration: .5,
                ease: "power1.out",

            });
        }
        if (btnRef.current) {
            gsap.from(imgRef.current, {
                opacity: 0,
                scale: 1.2,
                duration: .8,
                ease: "power1.out",

            });
        }


    })
    return (
        <main className='hero'>
            {/*  <svg className='hero1' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
                <g id="Groupe_30" data-name="Groupe 30" transform="translate(262 -927)">
                    <g id="Groupe_10" data-name="Groupe 10" transform="translate(-212 731.409)">
                        <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-27 215.136)" fill="#1a6bbc" />
                        <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-50 251.409)" fill="#e9b85b" />
                    </g>
                </g>
            </svg>
            <svg className='hero2' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
                <g id="Groupe_30" data-name="Groupe 30" transform="translate(262 -927)">
                    <g id="Groupe_10" data-name="Groupe 10" transform="translate(-212 731.409)">
                        <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-27 215.136)" fill="#1a6bbc" />
                        <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-50 251.409)" fill="#e9b85b" />
                    </g>
                </g>
            </svg> */}

            {/* <div className="top">
                <div className="left">
                    <h1 ref={textRef}>Gbessia : Bâtissons l'avenir ensemble</h1>
                    <button className="btn mainBtn" ref={btnRef}>
                        <Link to={"/actualites"}>
                            Toutes nos actualités <span className="iconSize"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                            </span>
                        </Link>
                    </button>
                </div>
                <div className="right" ref={imgContainer}>
                    <img ref={imgRef} src={HeroImg} alt="" />
                </div>
            </div> */}
            <div className="top">
                <Carousel images={images}>
                </Carousel>
            </div>


            <div className="bottom">
                <ul className="quickLinks">

                    <Link to={"/demarches"} ref={(el) => pushRef(el)}>
                        <div className='quickLink'>
                            <span className="iconSize">
                                <span class="mdi mdi-folder-multiple"></span>
                            </span>
                            <p className="quickLinkText">Demarches</p>
                        </div>
                    </Link>

                    <Link to={"/rdv"} ref={(el) => pushRef(el)}>
                        <div className='quickLink'>
                            <span className="iconSize">
                                <span class="mdi mdi-calendar-month"></span>
                            </span>
                            <p className="quickLinkText">Rendez-vous</p>
                        </div>
                    </Link>

                    <Link to={"/gbessiaTele"} ref={(el) => pushRef(el)}>
                        <div className='quickLink'>
                            <span className="iconSize">
                                <span class="mdi mdi-television-classic"></span>

                            </span>
                            <p className="quickLinkText">Gbessia Télé</p>
                        </div>
                    </Link>
                    <Link to={"/vous-etes"} ref={(el) => pushRef(el)}>
                        <div className='quickLink'>
                            <span className="iconSize">
                                <span class="mdi mdi-account-group"></span>

                            </span>
                            <p className="quickLinkText">Vous êtes</p>
                        </div>
                    </Link>
                    <Link to={"/horaires"} ref={(el) => pushRef(el)}>
                        <div className='quickLink'>
                            <span className="iconSize">
                                <span class="mdi mdi-clock-outline"></span>

                            </span>
                            <p className="quickLinkText">Horaires</p>
                        </div>
                    </Link>

                    <Link to={"/emploi"} ref={(el) => pushRef(el)}>
                        <div className='quickLink'>
                            <span className="iconSize">
                                <span class="mdi mdi-briefcase"></span>

                            </span>
                            <p className="quickLinkText">Emploi</p>
                        </div>
                    </Link>

                    <Link to={"/contact"} ref={(el) => pushRef(el)}>
                        <div className='quickLink'>
                            <span className="iconSize">
                                <span class="mdi mdi-phone-classic"></span>

                            </span>
                            <p className="quickLinkText">Contact</p>
                        </div>
                    </Link>


                </ul>
            </div>
        </main>
    )
}

export default Hero