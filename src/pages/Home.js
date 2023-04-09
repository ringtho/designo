import backgroundCircle from "../assets/home/desktop/bg-pattern-hero-home.svg"
import passionatePic from "../assets/home/desktop/illustration-passionate.svg"
import resourcefulPic from "../assets/home/desktop/illustration-resourceful.svg"
import friendlyPic from "../assets/home/desktop/illustration-friendly.svg"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
        <Navbar />
        <main>
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
            <section className="offers">
                <div className="offer-container-web">
                    <div className="offer-item">
                        <h2>WEB DESIGN</h2>
                        <p>VIEW PROJECTS<span className="bracket">
                        <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                        </p>
                    </div>
                </div>
                <div className="offer-container-app">
                    <div className="offer-item">
                        <h2>APP DESIGN</h2>
                        <p>VIEW PROJECTS<span className="bracket">
                        <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                        </p>
                    </div>
                </div>
                <div className="offer-container-graphic">
                    <div className="offer-item">
                        <h2>GRAPHIC DESIGN</h2>
                        <p>VIEW PROJECTS<span className="bracket">
                        <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="soft-skills">
                <div className="soft-skills-container">
                    <div className="soft-skills-image">
                        <img src={backgroundCircle} 
                            alt="background-circle" 
                            className="soft-skills-circle circle-passionate" />
                        <img src={passionatePic} alt="passionate" className="skills-pic" />
                    </div>
                    <div className="soft-skills-desc">
                        <h3>PASSIONATE</h3>
                        <p>Each project starts with an in-depth brand research to ensure 
                            we only create products that serve a purpose. We merge art, 
                            design, and technology into exciting new solutions.
                        </p>
                    </div>
                </div>
                <div className="soft-skills-container">
                    <div className="soft-skills-image">
                        <img src={backgroundCircle} 
                            alt="background-circle" 
                            className="soft-skills-circle circle-resourceful" />
                        <img src={resourcefulPic} alt="resourceful" className="skills-pic" />
                    </div>
                    <div className="soft-skills-desc">
                        <h3>RESOURCEFUL</h3>
                        <p>
                            Everything that we do has a strategic purpose. We use an agile approach 
                            in all of our projects and value customer collaboration. It guarantees 
                            superior results that fulfill our clients’ needs.
                        </p>
                    </div>
                </div>
                <div className="soft-skills-container mg-bottom">
                    <div className="soft-skills-image">
                        <img src={backgroundCircle} 
                            alt="background-circle" 
                            className="soft-skills-circle circle-friendly" />
                        <img src={friendlyPic} alt="friendly" className="skills-pic" />
                    </div>
                    <div className="soft-skills-desc">
                        <h3>FRIENDLY</h3>
                        <p> 
                            We are a group of enthusiastic folks who know how to put 
                            people first. Our success depends on our customers, 
                            and we strive to give them the best experience a 
                            company can provide.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>

    )
}

export default Home