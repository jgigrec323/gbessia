import React, { useEffect, useState } from 'react'

function Carousel({ images }) {
    const [imageIndex, setImageIndex] = useState(0)
    const [isAuto, setIsAuto] = useState(true)

    const nextImage = () => {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
        handleAutoControl()
    }
    const previousImage = () => {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
        handleAutoControl()
    }
    const handleAutoControl = () => {
        setIsAuto(false)

        setTimeout(() => {
            setIsAuto(true)
        }, 3000);
    }
    useEffect(() => {
        let intervalId;
        if (isAuto) {
            intervalId = setInterval(() => {
                nextImage();
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [isAuto, nextImage]);

    return (
        <div className="carousel">
            <div className="slider">
                {images.map((img, index) => {
                    return <img src={img} alt="Slider" key={index} style={{ translate: `${-100 * imageIndex}%` }} />
                })}


            </div>
            <div className="commandes">
                <span class="mdi mdi-chevron-left" onClick={previousImage}></span>
                <span class="mdi mdi-chevron-right" onClick={nextImage}></span>
            </div>
            <div className="neck">

            </div>
        </div>
    )
}

export default Carousel