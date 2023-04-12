import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="get-in-touch">
                    <div className="get-in-touch-wrapper">
                        <div className="get-in-touch-container">
                            <h2>Let’s talk about your project</h2>
                            <p>
                            Ready to take it to the next level? Contact us today and find out 
                            how our expertise can help your business grow.
                            </p>
                            <button className="footer-btn">GET IN TOUCH</button>
                            
                        </div>
                    </div>

                </div>
                <div className="footer-contents">
                    <div className="logo-container footer-logo">
                        <div className="header-circle"></div>
                        <Link to="/" className="link">
                            <h1 className="title-footer">DESIGNO</h1>
                        </Link>  
                    </div>
                    <ul className="footer-nav">
                        <Link to="/about" className="link">
                            <li>OUR COMPANY</li>
                        </Link>
                        <Link to="/location" className="link">
                            <li>LOCATIONS</li>
                        </Link>
                        <Link to="/contact" className="link">
                            <li>CONTACT</li>
                        </Link>
                    </ul>
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
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer