import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import backgroundCircle from "../assets/about/desktop/bg-pattern-hero-about-desktop.svg"
import canadaImg from "../assets/about/desktop/canada.svg"
import australiaImg from "../assets/about/desktop/australia.svg"
import unitedKingdomImg from "../assets/about/desktop/unitedkingdom.svg"




const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="form-container">
                
                    <div class="contact-wrapper">
                        <div className="contact-heading">
                            <h1>Contact Us</h1>
                            <p>
                                Ready to take it to the next level? Let’s talk about 
                                your project or idea and find out how we can help 
                                your business grow. If you are looking for unique 
                                digital experiences that’s relatable to your users, 
                                drop us a line.
                            </p>
                        </div>
                        <form className="form" action="#">
                            <input type="name" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="text" name="phone" placeholder="Phone" />
                            <textarea name="message" placeholder="Your Message" />
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>

                </section>
            
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
                            <button>SEE LOCATION</button>
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
                            <button>SEE LOCATION</button>
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
                            <button>SEE LOCATION</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Contact