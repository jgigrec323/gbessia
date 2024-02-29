import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClearSky from '../assets/images/clear-sky.png'
import Storm from '../assets/images/storm.png'
import Snow from '../assets/images/snow.png'
import Haze from '../assets/images/haze.png'
import Clouds from '../assets/images/clouds.png'
import Rain from '../assets/images/rain.png'
function NotreCommune() {

    const [weather, setWeather] = useState({})

    function translateWeatherDescription(description) {
        switch (description) {
            case 'Clouds':
                return 'Nuages';
            case 'Clear':
                return 'Dégagé';
            case 'Rain':
                return 'Pluie';
            case 'Drizzle':
                return 'Bruine';
            case 'Thunderstorm':
                return 'Orage';
            case 'Snow':
                return 'Neige';
            case 'Mist':
                return 'Brouillard';
            case 'Smoke':
                return 'Fumée';
            case 'Haze':
                return 'Brume';
            case 'Dust':
                return 'Poussière';
            case 'Fog':
                return 'Brouillard';
            default:
                return description;
        }
    }
    const kelvinToCelsius = (kelvin) => {
        return Math.floor((kelvin - 273.15).toFixed(2))
    };

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const processingDatas = (data) => {
        const { main, id } = data.weather[0];
        const { temp, humidity } = data.main;
        const { sunrise, sunset } = data.sys;
        const windSpeed = data.wind.speed;
        let img;

        if (id === 800) {
            img = ClearSky;
        } else if (id >= 200 && id <= 232) {
            img = Storm;
        } else if (id >= 600 && id <= 622) {
            img = Snow;
        } else if (id >= 701 && id <= 781) {
            img = Haze;
        } else if (id >= 801 && id <= 804) {
            img = Clouds;
        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            img = Rain;
        }
        const sunriseTimestamp = sunrise * 1000;
        const sunsetTimestamp = sunset * 1000;

        const sunriseDate = new Date(sunriseTimestamp);
        const sunsetDate = new Date(sunsetTimestamp);

        const formattedSunriseTime = formatTime(sunriseDate);
        const formattedSunsetTime = formatTime(sunsetDate);

        setWeather({
            id,
            description: translateWeatherDescription(main),
            temp: kelvinToCelsius(temp),
            humidity,
            sunrise: formattedSunriseTime,
            sunset: formattedSunsetTime,
            img,
            windSpeed: Math.floor(windSpeed * 3.6)
        });
    };


    const fetchData = async () => {
        let name = "gbessia"
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                processingDatas(data)
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <section className="notreCommune">
            <h2 className="sectionTitle">Notre commune</h2>
            <div className="wrapper">
                <div className="left">
                    <div className="top">
                        <img src={weather.img} alt="" />
                        <h3 className="weather">{weather.temp}°</h3>
                        <p className="wDesc">{weather.description}</p>
                    </div>
                    <div className="bottom">
                        <div className="wElement">
                            <span className="wDay">Lever du soleil</span>
                            <span>{weather.sunrise}</span>
                        </div>
                        <div className="wElement">
                            <span className="wDay">Coucher du soleil</span>
                            <span>{weather.sunset}</span>
                        </div>
                        <div className="wElement">
                            <span className="wDay">Humidité</span>
                            <span>{weather.humidity}%</span>
                        </div>
                        <div className="wElement">
                            <span className="wDay">Vitess du vent</span>
                            <span>{weather.windSpeed} km/h</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6102.587445134078!2d-13.62694124980173!3d9.573916771609897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1d2bbe4aa770ef%3A0xf8b16f21907a7a6a!2sA%C3%A9roport%20International%20Ahmed%20S%C3%A9kou%20Tour%C3%A9!5e0!3m2!1sfr!2str!4v1708627438497!5m2!1sfr!2str" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <button className="btn">
                <Link to={"/#"}>
                    Visiter Gbessia <span className="iconSize"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.4 34">
                        <path id="arrow-circle-right" d="M20.2,2C10.172,2,2,9.633,2,19s8.172,17,18.2,17,18.2-7.633,18.2-17S30.228,2,20.2,2Zm5.078,17.9-6.425,6a1.431,1.431,0,0,1-1.929,0,1.223,1.223,0,0,1,0-1.8l5.46-5.1-5.46-5.1a1.223,1.223,0,0,1,0-1.8,1.443,1.443,0,0,1,1.929,0l6.425,6a1.2,1.2,0,0,1,0,1.8Z" transform="translate(-2 -2)" fill="#e9b85b" />
                    </svg>
                    </span>
                </Link>
            </button>
        </section>
    )
}

export default NotreCommune