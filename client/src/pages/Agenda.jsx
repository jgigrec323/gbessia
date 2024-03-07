import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PageInfoSection from '../components/PageInfoSection'
import AgendaElement from '../components/AgendaElement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { getAllEvents } from '../script/api'



function Agenda() {
    const [allEvents, setAllEvents] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const fetchDatas = async () => {
        try {
            setIsFetching(true)
            const events = await getAllEvents()
            setAllEvents(events.data)
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
        <>
            <Navbar></Navbar>
            <PageInfoSection title={"Agenda"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et."}></PageInfoSection>
            <section className="agendaBody">
                <div className="left">
                    <div className="agendaElements">
                        <div className="separator" ></div>
                        {
                            (!isFetching && allEvents.length > 0) ? allEvents.map((event) => (
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
                    <div className="navSection">

                        <div className="navigationBtns">
                            <span className="navIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#ecedef" />
                                </svg>
                            </span>
                            <span className="navIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                    <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#1a6bbc" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="facebookCard">

                    </div>
                    <button className="btn mainBtn">
                        Participer
                        <span className="iconSize">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                        </span>
                    </button>
                    <button className="btn mainBtn">
                        Promouvoir
                        <span className="iconSize">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                        </span>
                    </button>
                    <button className="btn mainBtn">
                        S'informer
                        <span className="iconSize">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                        </span>
                    </button>
                    <button className="btn mainBtn">
                        Contact
                        <span className="iconSize">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                                <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                            </svg>
                        </span>
                    </button>
                </div>
            </section>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default Agenda