import { Link } from "react-router-dom"

const GraphicDeignCard = () => {
    return (
        <div className="offer-container-graphic">
            <div className="offer-item">
                <h2>GRAPHIC DESIGN</h2>
                <Link to="/graphics-design" className="link">
                    <p>VIEW PROJECTS<span className="bracket">
                    <i className="fa-solid fa-chevron-right fa-fade fa-sm"></i></span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default GraphicDeignCard