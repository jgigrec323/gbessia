import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Actualites from '../components/Actualites'
import Agenda from '../components/Agenda'
import Contact from '../components/Contact'
import NotreCommune from '../components/NotreCommune'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import transition from '../script/transition'
import Preloader from '../components/Preloader'

function Accueil() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {!isLoading ? <>
                <Navbar />
                <Hero />
                <Actualites />
                <Agenda />
                <Contact />
                <NotreCommune />
                <Newsletter />
                <Footer />
            </> : <Preloader setIsLoading={setIsLoading} />}
        </>
    )
}

export default (Accueil)