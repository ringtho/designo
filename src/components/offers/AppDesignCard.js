import { Link, useNavigate } from "react-router-dom"

const AppDesignCard = () => {
    const navigate = useNavigate()
    const handleLinkClick = () => {
        navigate("/app-design")
    }
    
    return (
        <div className="offer-container-app">
            <div className="offer-item" onClick={handleLinkClick}>
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