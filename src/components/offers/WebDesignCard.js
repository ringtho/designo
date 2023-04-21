import { Link, useNavigate } from "react-router-dom"

const WebDesignCard = () => {
    const navigate = useNavigate()
    const handleLinkClick = () => {
        navigate("/web-design")
    }

    return (
        <div className="offer-container-web">
            <div className="offer-item" onClick={handleLinkClick}>
                <h2>WEB DESIGN</h2>
                <Link to="/web-design" className="link">
                    <p className="offer-item-desc">VIEW PROJECTS<span className="bracket">
                    <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default WebDesignCard