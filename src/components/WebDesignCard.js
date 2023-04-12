import { Link } from "react-router-dom"

const WebDesignCard = () => {
    return (
        <div className="offer-container-web">
            <div className="offer-item">
                <h2>WEB DESIGN</h2>
                <Link to="/web-design" className="link">
                    <p>VIEW PROJECTS<span className="bracket">
                    <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default WebDesignCard