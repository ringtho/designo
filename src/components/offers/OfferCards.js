import AppDesignCard from "./AppDesignCard"
import WebDesignCard from "./WebDesignCard"
import GraphicDeignCard from "./GraphicDesignCard"

const OfferCards = () => {
    return (
        <section className="offers" id="offers">
            <WebDesignCard />
            <AppDesignCard />
            <GraphicDeignCard />
        </section>
    )
}

export default OfferCards