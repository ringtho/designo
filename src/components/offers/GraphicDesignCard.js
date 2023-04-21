import { Link, useNavigate } from "react-router-dom"

const GraphicDeignCard = () => {
    const navigate = useNavigate()
    const handleLinkClick = () => {
        navigate("/graphics-design")
    }

    return (
        <div className="offer-container-graphic">
            <div className="offer-item" onClick={handleLinkClick}>
                <h2>GRAPHIC DESIGN</h2>
                <Link to="/graphics-design" className="link">
                    <p className="offer-item-desc">VIEW PROJECTS<span className="bracket">
                    <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default GraphicDeignCard