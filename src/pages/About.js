import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import heroImg from "../assets/about/mobile/image-about-hero.jpg"
import GetInTouch from "../components/GetInTouch"
import LocationCard from "../components/LocationCard"
import AboutCard from "../components/AboutCard"
import { data } from "../data"


const About = () => {
    return (
        <>
        <Navbar />
        <section className="about-wrapper">
            <section className="about-hero">
                <img src={heroImg} alt="" className="about-hero-image" />
                <div className="about-components">
                    <div className="about-components-wrapper">
                        <div className="about-hero-content">
                            <h2>About Us</h2>
                            <p>
                            Founded in 2010, we are a creative agency that 
                            produces lasting results for our clients. We’ve 
                            partnered with many startups, corporations, and 
                            nonprofits alike to craft designs that make real 
                            impact. We’re always looking forward to creating brands, 
                            products, and digital experiences that connect with our 
                            clients’ audiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <AboutCard {...data.aboutDescription1} />
            <LocationCard />
            <AboutCard {...data.aboutDescription2} />
        </section>
        <GetInTouch />
        <Footer />
        </>
    )
}

export default About


