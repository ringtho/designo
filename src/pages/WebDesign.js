import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


const WebDesign = () => {
    const hero = {
        title: "Web Design",
        description: `We build websites that serve as powerful 
        marketing tools and bring memorable brand experiences.`
    }

    return (
        <>
        <Navbar />
        <main>
            <Hero {...hero} />
        </main>
        <Footer />
        </>
    )
}

export default WebDesign