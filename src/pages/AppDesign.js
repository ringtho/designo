import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AppCard from "../components/AppCard"
import { data } from "../data"
import WebDesignCard from "../components/WebDesignCard"
import GraphicDeignCard from "../components/GraphicDesignCard"


const AppDesign = () => {

    const appCards = data.appDesign.map((item, idx) => {
        return <AppCard key={idx} {...item} />
    })

    return (
        <>
        <Navbar />
        <main>
            <Hero {...data.appHero} />
            <div className="card-container">
            {appCards}
            </div>
            <section className="offers">
                <WebDesignCard />
                <GraphicDeignCard />
            </section>
        </main>
        <Footer />
        </>
    )
}

export default AppDesign