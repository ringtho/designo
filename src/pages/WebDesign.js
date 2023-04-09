import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AppCard from "../components/AppCard"
import imageExpress from "../assets/web-design/desktop/image-transfer.jpg"
import { data } from "../data"


const WebDesign = () => {

    const hero = {
        title: "Web Design",
        description: `We build websites that serve as powerful 
        marketing tools and bring memorable brand experiences.`
    }

    const appCards = data.webDesign.map((item, idx) => <AppCard key={idx} {...item} />)

    return (
        <>
        <Navbar />
        <main>
            <Hero {...hero} />
            <div className="card-container">
            {appCards}
            </div>
        </main>
        <Footer />
        </>
    )
}

export default WebDesign