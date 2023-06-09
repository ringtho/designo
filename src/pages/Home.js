import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import SoftSkills from "../components/SoftSkills"
import OfferCards from "../components/offers/OfferCards"
import heroImg from "../assets/home/desktop/image-hero-phone.png"
import { Link } from "react-router-dom"
// import { HashLink } from "react-router-hash-link"

const Home = () => {

    return (
        <div className="app app-home">
        <Navbar />
        <main className="home-main">
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h2>Award-winning custom designs and digital branding solutions</h2>
                        <p>With over 10 years in the industry, we are experienced in creating 
                            fully responsive websites, app design, and engaging brand experiences. 
                            Find out more about our services.</p>
                        
                        <Link className="hero-btn link-btn" to="/web-design">
                        LEARN MORE</Link>
                        {/* <HashLink className="hero-btn link-btn" to="#offers">
                        LEARN MORE</HashLink> */}
                    </div>
                    <div className="hero-image-container">
                        <img src={heroImg} alt="" className="hero-image" />
                    </div>
                </div>
            </section>
            <OfferCards />
            <SoftSkills />
        </main>
        
        <GetInTouch />
        <Footer />
        </div>

    )
}

export default Home