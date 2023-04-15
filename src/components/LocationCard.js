import backgroundCircle from "../assets/about/desktop/bg-pattern-hero-about-desktop.svg"
import canadaImg from "../assets/about/desktop/canada.svg"
import australiaImg from "../assets/about/desktop/australia.svg"
import unitedKingdomImg from "../assets/about/desktop/unitedkingdom.svg"
import { useNavigate } from "react-router-dom"

const LocationCard = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/location')
    }

    return (
        <section className="about-location">
            <div className="about-location-container">
                <div className="about-location-image">
                    <img src={backgroundCircle} 
                        alt="background-circle" 
                        className="about-location-circle circle-canada" />
                    <img src={canadaImg} alt="canada" className="country-pic" />
                </div>
                <div className="about-location-country">
                    <h3>CANADA</h3>
                    <button onClick={onClick}>SEE LOCATION</button>
                </div>
            </div>
            <div className="about-location-container">
                <div className="about-location-image">
                    <img src={backgroundCircle} 
                        alt="background-circle" 
                        className="about-location-circle circle-australia" />
                    <img src={australiaImg} alt="australia" className="country-pic" />
                </div>
                <div className="about-location-country">
                    <h3>AUSTRALIA</h3>
                    <button onClick={onClick}>SEE LOCATION</button>
                </div>
            </div>
            <div className="about-location-container">
                <div className="about-location-image">
                    <img src={backgroundCircle} 
                        alt="background-circle" 
                        className="about-location-circle circle-uk" />
                    <img src={unitedKingdomImg} alt="uk" className="country-pic" />
                </div>
                <div className="about-location-country">
                    <h3>UNITED KINGDOM</h3>
                    <button onClick={onClick}>SEE LOCATION</button>
                </div>
            </div>
        </section>
    )
}

export default LocationCard