import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AppCard from "../components/AppCard"
import { data } from "../data"
import WebDesignCard from "../components/offers/WebDesignCard"
import GraphicDeignCard from "../components/offers/GraphicDesignCard"
import GetInTouch from "../components/GetInTouch"


const AppDesign = () => {

    const appCards = data.appDesign.map((item, idx) => {
        return <AppCard key={idx} {...item} />
    })

    return (
        <div className="app">
        <Navbar />
        <main>
            <Hero {...data.appHero} />
            <div className="card-container">
            {appCards}
            </div>
            <section className="offers-design">
                <WebDesignCard />
                <GraphicDeignCard />
            </section>
        </main>
        <GetInTouch />
        <Footer />
        </div>
    )
}

export default AppDesign