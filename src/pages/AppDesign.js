import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


const AppDesign = () => {
    const hero = {
        title: "App Design",
        description: `Our mobile designs bring intuitive 
        digital solutions to your customers right at their fingertips.`
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

export default AppDesign