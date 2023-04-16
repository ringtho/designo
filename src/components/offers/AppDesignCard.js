import { Link } from "react-router-dom"

const AppDesignCard = () => {
    return (
        <div className="offer-container-app">
            <div className="offer-item">
                <h2>APP DESIGN</h2>
                <Link to="/app-design" className="link">
                    <p className="offer-item-desc">VIEW PROJECTS<span className="bracket">
                    <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default AppDesignCard