import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import MapCard from "../components/MapCard"
import { data } from "../data"


const Location = () => {
    const locationCards = data.locations.map( (location, idx) => (
        <MapCard key={idx} {...location} />
    ))
    return (
        <>
            <Navbar />
            <main className="location-wrapper">
            {locationCards}
            </main>
            <GetInTouch />
            <Footer />
        </>
    )
}

export default Location