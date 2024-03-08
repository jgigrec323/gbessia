import React, { useEffect, useRef } from 'react'
import Horaires from "../assets/images/horloge.png"
import Location from "../assets/images/gps.png"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
function AgendaElement({ jour, mois, titre, lieu, heure }) {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null)
    // const pushRef = (el) => ref.current.push(el);

    useGSAP(() => {

        gsap.from(ref.current, {
            opacity: 0,
            y: -30,

            duration: .7,
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
        <div className='agendaElement' ref={ref}>
            <div className="left">
                <h2>{jour}</h2>
                <p>{mois}</p>
            </div>
            <div className="middle">
                <h2>{titre}</h2>
                <p>
                    <span className="iconSize">
                        <span class="mdi mdi-map-marker"></span>
                    </span>
                    {lieu}
                </p>
            </div>
            <div className="right">
                <span className="iconSize">
                    <span class="mdi mdi-clock-outline"></span>
                </span>
                <p>{heure}</p>
            </div>
        </div>
    )
}

export default AgendaElement