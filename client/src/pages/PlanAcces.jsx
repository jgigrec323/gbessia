import React from 'react'
import Navbar from '../components/Navbar'
import PageInfoSection from '../components/PageInfoSection'
import PageBody from '../components/PageBody'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
function PlanAcces() {
    return (
        <>
            <Navbar></Navbar>
            <PageInfoSection title={"Plan d'accès"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et."}></PageInfoSection>
            <PageBody>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6102.587445134078!2d-13.62694124980173!3d9.573916771609897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1d2bbe4aa770ef%3A0xf8b16f21907a7a6a!2sA%C3%A9roport%20International%20Ahmed%20S%C3%A9kou%20Tour%C3%A9!5e0!3m2!1sfr!2str!4v1708627438497!5m2!1sfr!2str" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </PageBody>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default PlanAcces