import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import AgendaElement from './AgendaElement'
import { getMainEvents } from '../script/api';

function Agenda() {
    const [mainEvents, setMainEvents] = useState([])
    const [isFetching, setIsFetching] = useState(false)
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
    const fetchDatas = async () => {
        try {
            setIsFetching(true)
            const events = await getMainEvents()
            setMainEvents(events.data)
            console.log(events)

        } catch (error) {
            throw error;
        }
        finally {
            setIsFetching(false)
        }
    }
    useEffect(() => {
        fetchDatas()

    }, [])
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
                    <li ref={(el) => pushRef(el)}><Link to={"/agenda"}>Voir tous les évènements</Link></li>
                </ul>
                <div className="agendaElements">
                    <div className="separator" ></div>
                    {
                        (!isFetching && mainEvents.length > 0) ? mainEvents.map((event) => (
                            <React.Fragment key={event.id}>
                                <AgendaElement
                                    jour={event.jour}
                                    mois={event.mois}
                                    titre={event.titre}
                                    lieu={event.lieu}
                                    heure={event.heure}
                                />
                                <div className="separator"></div>
                            </React.Fragment>
                        )) : "Fetching datas"
                    }


                </div>
            </div>
        </section>
    )
}

export default Agenda