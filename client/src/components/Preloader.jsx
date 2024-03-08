import React, { useEffect, useRef } from 'react';
import Logo from '../assets/images/logo.svg';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';

function Preloader({ setIsLoading }) {
    const textRef = useRef(null);
    const logoRef = useRef(null);

    useGSAP(() => {
        if (textRef.current && logoRef.current) {
            const text = new SplitType(textRef.current, { types: 'words, chars' });

            gsap.from(text.words, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                ease: 'power1.out',
                stagger: { amount: 0.5 },
            });

            gsap.to(text.words, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                delay: 2.2,
                ease: 'power1.out',
                stagger: { amount: 0.5 },
                onComplete: () => setIsLoading(false),
            });

            gsap.to(logoRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                delay: 2,
                ease: 'power2.inOut',
            });
        }
    });

    return (
        <div className="preloader">
            <div className="logo" ref={logoRef}>
                <img src={Logo} alt="" />
            </div>
            <p ref={textRef}>Gbessia : Bâtissons l'avenir ensemble</p>
        </div>
    );
}

export default Preloader;
