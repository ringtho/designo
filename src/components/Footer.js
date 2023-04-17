import { NavLink } from "react-router-dom"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-contents">
                <div className="footer-nav-container">
                    <div className="logo-container footer-logo">
                        <div className="header-circle"></div>
                        <NavLink to="/" className="link">
                            <h1 className="title-footer">DESIGNO</h1>
                        </NavLink>  
                    </div>
                    <ul className="footer-nav">
                        <NavLink to="/about" className="link">
                            <li>OUR COMPANY</li>
                        </NavLink>
                        <NavLink to="/location" className="link">
                            <li>LOCATIONS</li>
                        </NavLink>
                        <NavLink to="/contact" className="link">
                            <li>CONTACT</li>
                        </NavLink>
                    </ul>
                </div>
                <div className="office-location">
                    <p className="bold">Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="contact-us">
                    <p className="bold">Contact Us (Central Office)</p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className="footer-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer