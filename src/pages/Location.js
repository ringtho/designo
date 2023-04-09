import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import canadaMap from "../assets/locations/desktop/image-map-canada.png"
import australiaMap from "../assets/locations/desktop/image-map-australia.png"
import ukMap from "../assets/locations/desktop/image-map-united-kingdom.png"


const Location = () => {
    return (
        <>
            <Navbar />
            <main className="location-wrapper">
            <section className="about-hero">
                <img src={canadaMap} alt="canada" className="about-hero-image" />
                <div className="about-descriptions">
                    <div className="about-description-content">
                        <h2>Canada</h2>
                        <div className="location-container">
                            <h4>Designo Central Office</h4>
                            <p>3886 Wellington Street</p>
                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className="location-header">
                            <h4>Contact</h4>
                            <p>P : +1 253-863-8967</p>
                            <p>M : contact@designo.co</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-hero">
                <img src={australiaMap} alt="australia" className="about-hero-image" />
                <div className="about-descriptions">
                    <div className="about-description-content">
                        <h2>Australia</h2>
                        <div className="location-container">
                            <h4>Designo AU Office</h4>
                            <p>19 Balonne Street</p>
                            <p>New South Wales 2443</p>
                        </div>
                        <div className="location-header">
                            <h4>Contact</h4>
                            <p>P : (02) 6720 9092</p>
                            <p>M : contact@designo.au</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-hero">
                <img src={ukMap} alt="united-kingdom" className="about-hero-image" />
                <div className="about-descriptions">
                    <div className="about-description-content">
                        <h2>United Kingdom</h2>
                        <div className="location-container">
                            <h4>Designo UK Office</h4>
                            <p>13  Colorado Way</p>
                            <p>Rhyd-y-fro SA8 9GA</p>
                        </div>
                        <div className="location-header">
                            <h4>Contact</h4>
                            <p>P : 078 3115 1400</p>
                            <p>M : contact@designo.uk</p>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            <Footer />
        </>
    
    )
}

export default Location