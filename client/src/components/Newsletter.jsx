import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { addNewsletterEmail } from '../script/api';
import { ToastContainer, toast } from 'react-toastify';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"

function Newsletter() {
    gsap.registerPlugin(ScrollTrigger);

    const [isProcessing, setIsProcessing] = useState(false)
    const [isProcessFinished, setIsProcessFinished] = useState(false)
    const [email, setEmail] = useState(null)
    const ref = useRef(null)

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleClick = async () => {
        if (!email || !validateEmail(email)) {
            toast.error("Veuillez entrer une adresse email valide")
            return;
        }

        try {
            setIsProcessing(true)
            const response = await addNewsletterEmail({ email })
            if (response.data.status) {
                setIsProcessFinished(true)
                toast.success(response.data.message)
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error)
        } finally {
            setIsProcessing(false)

        }

        setTimeout(() => {
            setIsProcessFinished(false)
        }, 3000);

    }
    useGSAP(() => {

        gsap.from(ref.current, {
            opacity: 0,
            x: -30,

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
        <>

            <section className="newsletter">

                <svg ref={ref} className='' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
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
                        <input type="text" placeholder='VOTRE EMAIL' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className="btn mainBtn" onClick={() => handleClick()}>
                            <Link to={"/"}>
                                {isProcessing ? "Patientez..." : "S'abonner"}
                                <span className="iconSize"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                                </svg>
                                </span>
                            </Link>
                        </button>
                        {isProcessFinished && <div className="confirmationMsg">
                            Merci de vous être abonné à notre newsletter !
                        </div>}
                    </div>
                </div>

            </section>
            <ToastContainer
                position='top-center'

            />
        </>

    )
}

export default Newsletter