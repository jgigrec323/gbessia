import React from 'react'

function PageInfoSection({ title, desc }) {
    return (
        <section className="pageInfoSection">
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="410" height="108.818" viewBox="0 0 410 108.818">
                <g id="Groupe_30" data-name="Groupe 30" transform="translate(262 -927)">
                    <g id="Groupe_10" data-name="Groupe 10" transform="translate(-212 731.409)">
                        <path id="Tracé_1" data-name="Tracé 1" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-27 215.136)" fill="#1a6bbc" />
                        <path id="Tracé_2" data-name="Tracé 2" d="M0,0,244.19-19.545,387,0V53L244.19,31.364,0,53" transform="translate(-50 251.409)" fill="#e9b85b" />
                    </g>
                </g>
            </svg>
            <div className="wrapper">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </section>
    )
}

export default PageInfoSection