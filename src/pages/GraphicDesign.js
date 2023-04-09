import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


const GraphicDesign = () => {
    const hero = {
        title: "Graphic Design",
        description: `We deliver eye-catching branding 
        materials that are tailored to meet your business objectives.`
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

export default GraphicDesign