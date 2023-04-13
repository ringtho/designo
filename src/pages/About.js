import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import heroImg from "../assets/about/mobile/image-about-hero.jpg"
import wordclassImg from "../assets/about/mobile/image-world-class-talent.jpg"
import realdealImg from "../assets/about/mobile/image-real-deal.jpg"
import backgroundCircle from "../assets/about/desktop/bg-pattern-hero-about-desktop.svg"
import canadaImg from "../assets/about/desktop/canada.svg"
import australiaImg from "../assets/about/desktop/australia.svg"
import unitedKingdomImg from "../assets/about/desktop/unitedkingdom.svg"
import GetInTouch from "../components/GetInTouch"



const About = () => {
    return (
        <>
        <Navbar />
        <section className="about-wrapper">
            <section className="about-hero">
                <img src={heroImg} alt="" className="about-hero-image" />
                <div className="about-components">
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
            </section>
            <section className="about-hero">
                <img src={wordclassImg} alt="" className="about-hero-image" />
                <div className="about-descriptions">
                    <div className="about-description-content">
                        <h2>World-class talent</h2>
                        <p>
                        We are a crew of strategists, problem-solvers, and technologists. 
                        Every design is thoughtfully crafted from concept to launch, 
                        ensuring success in its given market. We are constantly updating our 
                        skills in a myriad of platforms.  
                        </p>
                        <p>
                        Our team is multi-disciplinary and we are not merely interested in 
                        form — content and meaning are just as important. We give great 
                        importance to craftsmanship, service, and prompt delivery. 
                        Clients have always been impressed with our high-quality 
                        outcomes that encapsulates their brand’s story and mission.
                        </p>
                    </div>
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
            <section className="about-hero">
                <img src={realdealImg} alt="" className="about-hero-image" />
                <div className="about-descriptions">
                    <div className="about-description-content">
                        <h2>The real deal</h2>
                        <p>
                        As strategic partners in our clients’ businesses, we are ready to 
                        take on any challenge as our own.
                        Solving real problems require empathy and collaboration, 
                        and we strive to bring a fresh perspective to every opportunity. 
                        We make design and technology more accessible and give you tools to measure success.  
                        </p>
                        <p>
                        We are visual storytellers in appealing and captivating ways. 
                        By combining business and marketing strategies, we inspire audiences 
                        to take action and drive real results.
                        </p>
                    </div>
                </div>
            </section>
        </section>
        <GetInTouch />
        <Footer />
        </>
    )
}

export default About


