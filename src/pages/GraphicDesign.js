import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AppCard from "../components/AppCard"
import { data } from "../data"


const GraphicDesign = () => {

    const appCards = data.graphicsDesign.map((item, idx) => {
        return <AppCard key={idx} {...item} />
    })

    return (
        <>
        <Navbar />
        <main>
            <Hero {...data.graphicsHero} />
            <div className="card-container">
            {appCards}
            </div>
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
            </section>
        </main>
        <Footer />
        </>
    )
}

export default GraphicDesign