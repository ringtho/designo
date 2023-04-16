import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import SoftSkills from "../components/SoftSkills"
import OfferCards from "../components/offers/OfferCards"


const Home = () => {

    return (
        <div className="app">
        <Navbar />
        
        <main className="home-main">
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h2>Award-winning custom designs and digital branding solutions</h2>
                        <p>With over 10 years in the industry, we are experienced in creating 
                            fully responsive websites, app design, and engaging brand experiences. 
                            Find out more about our services.</p>
                        <button className="hero-btn">LEARN MORE</button>
                    </div>
                <div className="hero-image"></div>
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