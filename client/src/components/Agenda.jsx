import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import AgendaElement from './AgendaElement'

function Agenda() {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef([])
    const pushRef = (el) => ref.current.push(el);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        ref.current.forEach((el, index) => {
            gsap.from(el, {
                opacity: 0,
                y: -30,
                duration: .6,
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
        <section className="agenda">
            <svg className='trace-bleu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387 72.545">
                <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(0 19.545)" fill="#1a6bbc" />
            </svg>
            <svg className='trace-jaune' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387 72.545">
                <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(0 19.545)" fill="#e8b250" />
            </svg>

            <h2 className="sectionTitle">Agenda</h2>
            <div className="wrapper">
                <ul className="agendaLinks">
                    <li ref={(el) => pushRef(el)}><Link>Participer à un évènement</Link></li>
                    <li ref={(el) => pushRef(el)}><Link>Promouvoir un évènement</Link></li>
                    <li ref={(el) => pushRef(el)}><Link>S'informer</Link></li>
                    <li ref={(el) => pushRef(el)}><Link>Voir tous les évènements</Link></li>
                </ul>
                <div className="agendaElements">
                    <div className="separator" ></div>
                    <AgendaElement jour={21} mois={"Janvier"} titre={"Titre ou nom pour l'évènement"} lieu={"Lieu de l'évènement"} heure={"17:00"}></AgendaElement>
                    <div className="separator" ></div>
                    <AgendaElement jour={24} mois={"Juillet"} titre={"Titre ou nom pour l'évènement"} lieu={"Lieu de l'évènement"} heure={"17:00"}></AgendaElement>
                    <div className="separator" ></div>
                    <AgendaElement jour={"03"} mois={"Septembre"} titre={"Titre ou nom pour l'évènement"} lieu={"Lieu de l'évènement"} heure={"17:00"}></AgendaElement>
                    <div className="separator" ></div>
                </div>
            </div>
        </section>
    )
}

export default Agenda