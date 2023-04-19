import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import GetInTouch from "../components/GetInTouch"
import LocationCard from "../components/LocationCard"
import AboutCard from "../components/AboutCard"
import { data } from "../data"

import useWindowSize from "../hooks/useWindowSize"


const About = () => {
    const windowSize = useWindowSize() 
    const isMobile = windowSize <= 375
    const isTablet = windowSize > 375 && windowSize < 1080
    const isDesktop = windowSize >= 1080

    const getImg = () => {
        if(isMobile){
            return data.about.mobileImg
        } else if (isTablet){
            return data.about.tabletImg
        } else if (isDesktop){
            return data.about.desktopImg
        }
    }
    
    const img = getImg()
    return (
        <div className="app">
        <Navbar />
        <section className="about-wrapper">
            <div className="about-hero" id="about-main-hero">
                <img src={img} alt="" 
                className="about-hero-image row-reverse-image"/>
                <div className="about-components">
                    <div className="about-components-wrapper">
                        <div className="about-hero-content">
                            <h2>{data.about.title}</h2>
                            <p>{data.about.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <AboutCard {...data.aboutDescription1} />
            <LocationCard />
            <AboutCard {...data.aboutDescription2} />
        </section>
        <GetInTouch />
        <Footer />
        </div>
    )
}

export default About


