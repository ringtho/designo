import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AppCard from "../components/AppCard"
import { data } from "../data"
import AppDesignCard from "../components/offers/AppDesignCard"
import GraphicDeignCard from "../components/offers/GraphicDesignCard"
import GetInTouch from "../components/GetInTouch"


const WebDesign = () => {

    const appCards = data.webDesign.map((item, idx) => {
    return <AppCard key={idx} {...item} />
    })

    return (
        <div className="app app-design">
        <Navbar />
        <main>
            <Hero {...data.webHero} />
            <div className="card-container">
            {appCards}
            </div>
            <section className="offers-design">
                <AppDesignCard />
                <GraphicDeignCard />
            </section>
        </main>
        <GetInTouch />
        <Footer />
        </div>
    )
}

export default WebDesign