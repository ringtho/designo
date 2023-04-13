import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AppCard from "../components/AppCard"
import { data } from "../data"
import WebDesignCard from "../components/WebDesignCard"
import AppDesignCard from "../components/AppDesignCard"
import GetInTouch from "../components/GetInTouch"


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
                <WebDesignCard />
                <AppDesignCard />
            </section>
        </main>
        <GetInTouch />
        <Footer />
        </>
    )
}

export default GraphicDesign