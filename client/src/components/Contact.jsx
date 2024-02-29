import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

function Contact() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);


        const onUpdateHandler = (self) => {
            const scaleValue = 0.9 + (0.1 * (1 - self.progress)); // Scale down by 10%
            ref.current.style.transform = `scale(${scaleValue})`;

        };

        gsap.from(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: 'top top',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
                onUpdate: onUpdateHandler,
            }
        });



    });
    return (
        <section className="contact" ref={ref}>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
                <g id="Groupe_30" data-name="Groupe 30" transform="translate(262 -927)">
                    <g id="Groupe_10" data-name="Groupe 10" transform="translate(-212 731.409)">
                        <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-27 215.136)" fill="#1a6bbc" />
                        <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-50 251.409)" fill="#e9b85b" />
                    </g>
                </g>
            </svg>
            <div className="inside">
                <div className="left">
                    <input type="text" placeholder='NOM ET PRéNOM(S)' />
                    <input type="text" placeholder='QUARTIER' />
                    <input type="tel" placeholder='TéléPHONE' />
                    <textarea rows={4} placeholder='VOTRE MESSAGE'></textarea>
                    <button className='btn contactBtn'>Envoyer</button>
                </div>
                <div className="right">
                    <h2>Contactez nous</h2>
                    <p>Dites nous comment nous pouvons vous aider</p>
                </div>
            </div>

        </section>
    )
}

export default Contact