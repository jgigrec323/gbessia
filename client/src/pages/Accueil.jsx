import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Actualites from '../components/Actualites'
import Agenda from '../components/Agenda'
import Contact from '../components/Contact'
import NotreCommune from '../components/NotreCommune'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import transition from '../script/transition'

function Accueil() {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Actualites></Actualites>
            <Agenda></Agenda>
            <Contact></Contact>
            <NotreCommune></NotreCommune>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default (Accueil)